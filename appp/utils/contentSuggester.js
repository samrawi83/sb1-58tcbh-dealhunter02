import { analyzeTopics } from './topicAnalyzer'
import { getTrendingKeywords } from './keywordAnalyzer'

export class ContentSuggester {
  async generateContentIdeas(niche) {
    const trends = await this.analyzeTrends(niche)
    const gaps = await this.findContentGaps()
    const opportunities = await this.identifyOpportunities()

    return this.prioritizeIdeas([...trends, ...gaps, ...opportunities])
  }

  async analyzeTrends(niche) {
    return {
      googleTrends: await this.getGoogleTrends(niche),
      socialTrends: await this.getSocialTrends(niche),
      newsTopics: await this.getNewsTopics(niche),
      seasonalTrends: await this.getSeasonalTrends(niche)
    }
  }

  async findContentGaps() {
    const competitorContent = await this.getCompetitorContent()
    const userQuestions = await this.getUserQuestions()
    return this.identifyGaps(competitorContent, userQuestions)
  }

  async generateOutline(topic) {
    const research = await this.researchTopic(topic)
    return {
      title: await this.generateOptimizedTitle(topic),
      headings: await this.generateHeadings(research),
      keywords: await this.suggestKeywords(topic),
      references: await this.findReferences(topic)
    }
  }
} 