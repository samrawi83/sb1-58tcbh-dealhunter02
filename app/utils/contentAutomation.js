import { OpenAI } from 'openai'
import Parser from 'rss-parser'
import Bull from 'bull'
import Redis from 'ioredis'
import { rewriteContent } from './contentRewriter'
import { optimizeSEO } from './seoOptimizer'
import { shareToSocial } from './socialSharer'

const redis = new Redis(process.env.REDIS_URL)
const contentQueue = new Bull('content-processing')

export class ContentAutomator {
  constructor() {
    this.parser = new Parser()
    this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    this.setupQueues()
  }

  async setupQueues() {
    contentQueue.process(async (job) => {
      const { content, type } = job.data
      
      switch (type) {
        case 'rss':
          return await this.processRSSContent(content)
        case 'rewrite':
          return await this.rewriteContent(content)
        case 'optimize':
          return await this.optimizeContent(content)
        case 'share':
          return await this.shareContent(content)
      }
    })
  }

  async fetchRSSFeeds(feeds) {
    const results = []
    for (const feed of feeds) {
      try {
        const content = await this.parser.parseURL(feed.url)
        results.push(...content.items.map(item => ({
          ...item,
          category: feed.category
        })))
      } catch (error) {
        console.error(`Error fetching feed ${feed.url}:`, error)
      }
    }
    return results
  }

  async processContent(content) {
    // Rewrite and optimize content
    const rewritten = await rewriteContent(content)
    const optimized = await optimizeSEO(rewritten)
    
    // Store in Redis for caching
    await redis.set(`content:${content.id}`, JSON.stringify(optimized))
    
    // Share to social media
    await shareToSocial(optimized)
    
    return optimized
  }

  async scheduleContentProcessing(content) {
    return await contentQueue.add({
      content,
      type: 'process'
    }, {
      attempts: 3,
      backoff: {
        type: 'exponential',
        delay: 2000
      }
    })
  }
}

export const contentAutomator = new ContentAutomator()