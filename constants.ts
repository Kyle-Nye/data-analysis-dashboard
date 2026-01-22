import { CoefficientRow, EditDistanceResult, TermFrequency, StatCard } from './types';

// =============================================================================
// Part 1: Regression Model Coefficients
// =============================================================================

export const COEFFICIENTS_DATA: CoefficientRow[] = [
  { feature: 'SCH_UGDETAIL_HS', coef: -0.7985, interpretation: 'High schools less likely to have devices' },
  { feature: 'SCH_STATUS_ALT', coef: -0.7047, interpretation: 'Alternative schools less likely' },
  { feature: 'SCH_STATUS_SPED', coef: -0.3776, interpretation: 'Special ed schools less likely' },
  { feature: 'SCH_STATUS_CHARTER', coef: -0.2563, interpretation: 'Charter schools less likely' },
  { feature: 'SCH_UGDETAIL_MS', coef: +0.3190, interpretation: 'Middle schools more likely' },
  { feature: 'SCH_UGDETAIL_ES', coef: +0.3190, interpretation: 'Elementary schools more likely' },
  { feature: 'SCH_STATUS_MAGNET', coef: +0.1087, interpretation: 'Magnet schools marginal positive' },
  { feature: 'Intercept', coef: +1.5107, interpretation: 'Baseline log-odds' },
];

// =============================================================================
// Part 2: Edit Distance Results
// =============================================================================

export const WORD_DISTANCE_DATA: EditDistanceResult[] = [
  {
    comparison: 'Word i',
    word1: 'potting',
    word2: 'putting',
    distance: 1,
    breakdown: '1 char mismatch (o→u), 0 length diff'
  },
  {
    comparison: 'Word ii',
    word1: 'banana',
    word2: 'bananas',
    distance: 1,
    breakdown: '0 char mismatches, 1 length diff'
  },
];

export const PHRASE_DISTANCE_DATA: EditDistanceResult[] = [
  {
    comparison: 'Phrase i',
    word1: 'two dogs and two cats',
    word2: 'two cats and two dogs',
    distance: 2,
    breakdown: 'Words differ at positions 1 (dogs/cats) and 4 (cats/dogs)'
  },
  {
    comparison: 'Phrase ii',
    word1: 'two dogs and two cats',
    word2: 'three dogs and two cats',
    distance: 1,
    breakdown: 'Words differ at position 0 (two/three)'
  },
];

// =============================================================================
// Part 3: Text Analysis - Term Frequencies (Stop Words Removed)
// =============================================================================

export const TERM_FREQUENCY_DATA: TermFrequency[] = [
  { term: 'fig', design: 700, utility: 9034 },
  { term: 'view', design: 575, utility: 3814 },
  { term: 'invention', design: 4, utility: 2400 },
  { term: 'showing', design: 97, utility: 1201 },
  { term: 'present', design: 3, utility: 1202 },
  { term: 'sectional', design: 18, utility: 1167 },
  { term: 'embodiment', design: 35, utility: 1059 },
  { term: 'taken', design: 41, utility: 873 },
  { term: 'diagram', design: 0, utility: 907 },
  { term: 'side', design: 190, utility: 674 },
];

export const RAW_TERM_FREQUENCY_DATA: TermFrequency[] = [
  { term: 'the', design: 277, utility: 12484 },
  { term: 'of', design: 324, utility: 11355 },
  { term: 'fig', design: 700, utility: 9034 },
  { term: 'is', design: 607, utility: 5883 },
  { term: 'view', design: 575, utility: 3814 },
  { term: 'in', design: 90, utility: 4175 },
  { term: 'and', design: 132, utility: 3505 },
  { term: 'invention', design: 4, utility: 2400 },
  { term: 'to', design: 24, utility: 2317 },
  { term: 'an', design: 61, utility: 1963 },
];

// =============================================================================
// Dashboard Stats
// =============================================================================

export const STATS_DATA: StatCard[] = [
  { label: 'Schools With Devices', value: '4,029', subtitle: '81.3% of total' },
  { label: 'Schools Without', value: '930', subtitle: '18.7% of total' },
  { label: 'Model Accuracy', value: '81.25%', subtitle: 'Test set' },
];

export const PATENT_STATS: StatCard[] = [
  { label: 'Total Patents', value: '8,156', subtitle: 'descriptions analyzed' },
  { label: 'Utility Patents', value: '7,547', subtitle: '92.5%' },
  { label: 'Design Patents', value: '609', subtitle: '7.5%' },
];
