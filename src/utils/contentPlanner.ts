import { KeywordData, KeywordAnalysis } from '../types/keywords';
import { KeywordAnalyzer } from './keywordAnalyzer';

export class ContentPlanner {
  private keywordAnalyzer: KeywordAnalyzer;

  constructor(keywords: KeywordData[]) {
    this.keywordAnalyzer = new KeywordAnalyzer(keywords);
  }

  public generateContentPlan(timeframe: number = 30): ContentPlan {
    const bestOpportunities = this.keywordAnalyzer.getBestOpportunities(timeframe);
    
    return {
      keywords: bestOpportunities,
      schedule: this.createPublishingSchedule(bestOpportunities),
      priorities: this.prioritizeContent(bestOpportunities),
      resources: this.estimateResources(bestOpportunities)
    };
  }

  private createPublishingSchedule(keywords: KeywordData[]): PublishingSchedule[] {
    return keywords.map((keyword, index) => ({
      keyword: keyword,
      publishDate: this.calculatePublishDate(index),
      contentType: this.determineContentType(keyword),
      estimatedEffort: this.estimateEffort(keyword)
    }));
  }

  private calculatePublishDate(index: number): Date {
    const date = new Date();
    date.setDate(date.getDate() + (index * 2)); // Publish every 2 days
    return date;
  }

  private determineContentType(keyword: KeywordData): string {
    const intent = keyword.searchIntent;
    const volume = keyword.monthlySearchVolume;

    if (intent === 'Informational' && volume > 20000) {
      return 'comprehensive-guide';
    } else if (intent === 'Transactional') {
      return 'product-review';
    }
    return 'standard-article';
  }

  private estimateEffort(keyword: KeywordData): number {
    const baseEffort = 4; // Base hours
    const difficultyMultiplier = keyword.difficultyScore / 50;
    return Math.round(baseEffort * difficultyMultiplier);
  }

  private prioritizeContent(keywords: KeywordData[]): ContentPriority[] {
    return keywords.map(keyword => ({
      keyword: keyword,
      priority: this.calculatePriority(keyword),
      reason: this.getPriorityReason(keyword)
    }));
  }

  private calculatePriority(keyword: KeywordData): number {
    const opportunity = this.keywordAnalyzer.getOpportunityScore(keyword);
    const difficulty = keyword.difficultyScore;
    return (opportunity * 100) / difficulty;
  }

  private getPriorityReason(keyword: KeywordData): string {
    const volume = keyword.monthlySearchVolume;
    const difficulty = keyword.difficultyScore;

    if (volume > 25000 && difficulty < 50) {
      return 'High volume, low competition opportunity';
    } else if (keyword.cpc > 2) {
      return 'High commercial value';
    }
    return 'Standard priority';
  }

  private estimateResources(keywords: KeywordData[]): ResourceEstimate {
    const totalEffort = keywords.reduce((acc, keyword) => 
      acc + this.estimateEffort(keyword), 0);

    return {
      totalHours: totalEffort,
      writers: Math.ceil(totalEffort / 80), // Assuming 80 hours per writer per month
      editors: Math.ceil(totalEffort / 160), // One editor can handle twice as many articles
      estimatedCost: totalEffort * 50 // $50 per hour
    };
  }
}

interface ContentPlan {
  keywords: KeywordData[];
  schedule: PublishingSchedule[];
  priorities: ContentPriority[];
  resources: ResourceEstimate;
}

interface PublishingSchedule {
  keyword: KeywordData;
  publishDate: Date;
  contentType: string;
  estimatedEffort: number;
}

interface ContentPriority {
  keyword: KeywordData;
  priority: number;
  reason: string;
}

interface ResourceEstimate {
  totalHours: number;
  writers: number;
  editors: number;
  estimatedCost: number;
}