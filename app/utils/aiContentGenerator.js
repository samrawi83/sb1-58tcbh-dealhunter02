import { OpenAI } from 'openai'
import { ContentAnalyzer } from './contentAnalyzer'
import { TrendAnalyzer } from './trendAnalyzer'

export class AIContentGenerator {
  constructor() {
    this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    this.analyzer = new ContentAnalyzer()
    this.trendAnalyzer = new TrendAnalyzer()
  }

  async generateOptimizedContent(topic, category) {
    const trends = await this.trendAnalyzer.getTopTrends(category)
    const competitors = await this.analyzer.analyzeCompetitors(topic)
    
    const prompt = await this.buildPrompt({
      topic,
      category,
      trends,
      competitors,
      style: 'engaging',
      tone: 'conversational',
      intent: 'commercial'
    })

    const content = await this.generateContent(prompt)
    return await this.enhanceContent(content)
  }

  async enhanceContent(content) {
    return {
      main: content,
      variations: await this.generateVariations(content),
      multimedia: await this.generateMultimedia(content),
      snippets: await this.generateSocialSnippets(content),
      schema: await this.generateSchema(content)
    }
  }

  async generateMultimedia(content) {
    return {
      images: await this.generateOptimizedImages(content),
      videos: await this.generateVideoContent(content),
      infographics: await this.generateInfographics(content),
      socialCards: await this.generateSocialCards(content)
    }
  }
} 