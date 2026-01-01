
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  metric: string;
  result: string;
  image: string;
  category: string;
}

export interface AuditResult {
  headline: string;
  summary: string;
  recommendations: string[];
  projectedGrowth: string;
}
