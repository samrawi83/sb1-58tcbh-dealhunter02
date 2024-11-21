import { fetchSerpData } from './serpApi'
import { analyzeSentiment } from './nlpAnalyzer'
import { getBacklinkData } from './backlinkAnalyzer'

export class CompetitorAnalyzer {
  async analyzeCompetitors(keyword) {
    const competitors = await this.identifyCompetitors(keyword)
    return await Promise.all(competitors.map(async competitor => ({
      domain: competitor,
      metrics: await this.getCompetitorMetrics(competitor),
      content: await this.analyzeCompetitorContent(competitor),
      strategy: await this.analyzeStrategy(competitor)
    })))
  }

  async identifyCompetitors(keyword) {
    const serpData = await fetchSerpData(keyword, 20) // Top 20 results
    return serpData.filter(result => this.isRelevantCompetitor(result))
  }

  async getCompetitorMetrics(domain) {
    return {
      traffic: await this.estimateTraffic(domain),
      backlinks: await getBacklinkData(domain),
      socialMetrics: await this.getSocialMetrics(domain),
      contentFrequency: await this.analyzePostingFrequency(domain)
    }
  }

  async analyzeCompetitorContent(domain) {
    const content = await this.scrapeContent(domain)
    return {
      topics: await this.extractTopics(content),
      sentiment: await analyzeSentiment(content),
      wordCount: this.getWordCount(content),
      readabilityScore: this.calculateReadability(content),
      keywordDensity: this.analyzeKeywordDensity(content)
    }
  }
} 