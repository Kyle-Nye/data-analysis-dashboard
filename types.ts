// Part 1: Regression Coefficients
export interface CoefficientRow {
  feature: string;
  coef: number;
  interpretation: string;
}

// Part 2: Edit Distance Results
export interface EditDistanceResult {
  comparison: string;
  word1: string;
  word2: string;
  distance: number;
  breakdown: string;
}

// Part 3: Term Frequency Data
export interface TermFrequency {
  term: string;
  design: number;
  utility: number;
}

// Stats Card Data
export interface StatCard {
  label: string;
  value: string;
  subtitle?: string;
}
