export interface KeywordData {
  category: string;
  subcategory: string;
  keyword: string;
  title: string;
  metaDescription: string;
  searchIntent: 'Informational' | 'Transactional' | 'Educational';
  contentType: string;
  priority: 'High' | 'Medium' | 'Low';
  competitionLevel: 'High' | 'Medium' | 'Low';
  monthlySearchVolume: number;
  difficultyScore: number;
  cpc: number;
}

export interface KeywordMetrics {
  monthlySearchVolume: number;
  difficultyScore: number;
  cpc: number;
  opportunityScore: number;
}

export interface KeywordAnalysis {
  keyword: KeywordData;
  metrics: KeywordMetrics;
  recommendations: string[];
}