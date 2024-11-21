import { KeywordData } from '../types/keywords';

export class KeywordAnalyzer {
  private keywords: KeywordData[];

  constructor(keywords: KeywordData[]) {
    this.keywords = keywords;
  }

  public getHighPriorityKeywords(): KeywordData[] {
    return this.keywords.filter(keyword => keyword.priority === 'High');
  }

  public getLowCompetitionKeywords(): KeywordData[] {
    return this.keywords.filter(keyword => keyword.competitionLevel === 'Low');
  }

  public getKeywordsByCategory(category: string): KeywordData[] {
    return this.keywords.filter(keyword => keyword.category === category);
  }

  public getKeywordsByIntent(intent: string): KeywordData[] {
    return this.keywords.filter(keyword => keyword.searchIntent === intent);
  }

  public getKeywordMetrics(keyword: string): KeywordData | undefined {
    return this.keywords.find(k => k.keyword === keyword);
  }

  public getSortedBySearchVolume(): KeywordData[] {
    return [...this.keywords].sort((a, b) => b.monthlySearchVolume - a.monthlySearchVolume);
  }

  public getOpportunityScore(keyword: KeywordData): number {
    const searchVolume = keyword.monthlySearchVolume;
    const difficulty = keyword.difficultyScore;
    const cpc = keyword.cpc;

    return (searchVolume * cpc) / Math.pow(difficulty, 2);
  }

  public getBestOpportunities(limit: number = 10): KeywordData[] {
    return [...this.keywords]
      .sort((a, b) => this.getOpportunityScore(b) - this.getOpportunityScore(a))
      .slice(0, limit);
  }
}