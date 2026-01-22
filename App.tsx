import React, { useState } from 'react';
import {
  BarChart3,
  LayoutDashboard,
  FileText,
  Github,
  TrendingUp,
  Activity,
  Calculator,
  BookOpen,
  Zap
} from 'lucide-react';

import {
  COEFFICIENTS_DATA,
  WORD_DISTANCE_DATA,
  PHRASE_DISTANCE_DATA,
  TERM_FREQUENCY_DATA,
  RAW_TERM_FREQUENCY_DATA,
  STATS_DATA,
  PATENT_STATS
} from './constants';
import { DashboardCard } from './components/DashboardCard';
import { CoefficientsTable } from './components/CoefficientsTable';
import { TermFrequencyChart, EditDistanceTable, StatsCard } from './components/AnalysisPlots';

// Sidebar Navigation Item
const NavItem = ({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      active
        ? 'bg-cyan-500/10 text-cyan-400 border-r-2 border-cyan-400'
        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
    }`}
  >
    {icon}
    <span className="font-medium text-sm">{label}</span>
  </button>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-900 flex text-slate-100 font-sans selection:bg-cyan-500/30">

      {/* Sidebar - Hidden on mobile, sticky on desktop */}
      <aside className="w-64 hidden lg:flex flex-col border-r border-slate-800 bg-slate-900/95 backdrop-blur fixed h-full z-10">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Activity size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400">
              L2 Assessment
            </h1>
          </div>

          <nav className="space-y-1">
            <NavItem
              icon={<LayoutDashboard size={18} />}
              label="Overview"
              active={activeTab === 'overview'}
              onClick={() => setActiveTab('overview')}
            />
            <NavItem
              icon={<TrendingUp size={18} />}
              label="Part 1: Regression"
              active={activeTab === 'part1'}
              onClick={() => setActiveTab('part1')}
            />
            <NavItem
              icon={<Calculator size={18} />}
              label="Part 2: Algorithm"
              active={activeTab === 'part2'}
              onClick={() => setActiveTab('part2')}
            />
            <NavItem
              icon={<BarChart3 size={18} />}
              label="Part 3: Text Analysis"
              active={activeTab === 'part3'}
              onClick={() => setActiveTab('part3')}
            />
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-slate-800">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-white">
              DS
            </div>
            <div>
              <p className="text-sm font-medium text-slate-200">Data Scientist</p>
              <p className="text-xs text-slate-500">L2 Assessment</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-4 lg:p-8 overflow-y-auto">

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Activity size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold">L2 Assessment</h1>
          </div>
        </div>

        {/* Header Section */}
        <div className="mb-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-slate-100 mb-2">
            Coding Assessment Dashboard
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Interactive visualization of the L2 Assistant Data Scientist coding assessment results.
            Featuring regression analysis (Part 1), edit distance algorithm (Part 2), and patent text analysis (Part 3).
          </p>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <>
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <StatsCard label="Schools With Devices" value="4,029" subtitle="81.3% of total" color="emerald" />
              <StatsCard label="Model Accuracy" value="81.25%" subtitle="Logistic Regression" color="cyan" />
              <StatsCard label="Patents Analyzed" value="8,156" subtitle="Text Analysis" color="violet" />
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <button
                onClick={() => setActiveTab('part1')}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all text-left group"
              >
                <TrendingUp className="text-cyan-400 mb-3" size={24} />
                <h3 className="font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">Part 1: Regression</h3>
                <p className="text-sm text-slate-400 mt-1">WiFi device availability prediction</p>
              </button>
              <button
                onClick={() => setActiveTab('part2')}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all text-left group"
              >
                <Calculator className="text-emerald-400 mb-3" size={24} />
                <h3 className="font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">Part 2: Algorithm</h3>
                <p className="text-sm text-slate-400 mt-1">Expanded Hamming distance</p>
              </button>
              <button
                onClick={() => setActiveTab('part3')}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all text-left group"
              >
                <BarChart3 className="text-violet-400 mb-3" size={24} />
                <h3 className="font-semibold text-slate-200 group-hover:text-violet-400 transition-colors">Part 3: Text Analysis</h3>
                <p className="text-sm text-slate-400 mt-1">Patent term frequency analysis</p>
              </button>
            </div>

            {/* Preview of Part 3 Chart */}
            <DashboardCard
              title="Term Frequency Preview"
              description="Top 10 terms by patent type (stop words removed)"
              icon={<BarChart3 size={20} />}
            >
              <TermFrequencyChart data={TERM_FREQUENCY_DATA} />
            </DashboardCard>
          </>
        )}

        {activeTab === 'part1' && (
          <>
            {/* Part 1 Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <StatsCard label="Schools With Devices" value="4,029" subtitle="81.3% of total" color="emerald" />
              <StatsCard label="Schools Without" value="930" subtitle="18.7% of total" color="amber" />
              <StatsCard label="Model Accuracy" value="81.25%" subtitle="Test set" color="cyan" />
            </div>

            {/* Coefficients Table */}
            <DashboardCard
              title="Part 1: Model Coefficients"
              description="Logistic regression coefficients predicting WiFi device availability in schools. Sorted by absolute magnitude."
              icon={<TrendingUp size={20} />}
            >
              <CoefficientsTable data={COEFFICIENTS_DATA} />
            </DashboardCard>

            {/* Interpretation */}
            <div className="mt-6 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-slate-200 mb-3 flex items-center gap-2">
                <BookOpen size={18} className="text-cyan-400" />
                Key Findings
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• <span className="text-rose-400 font-semibold">High schools (-0.80)</span> and <span className="text-rose-400 font-semibold">alternative schools (-0.70)</span> show strongest negative associations with device availability</li>
                <li>• <span className="text-emerald-400 font-semibold">Elementary and middle schools (+0.32)</span> are more likely to have sufficient devices</li>
                <li>• Model accuracy equals baseline rate, suggesting these features alone don't provide strong predictive power</li>
              </ul>
            </div>
          </>
        )}

        {activeTab === 'part2' && (
          <>
            {/* Algorithm Description */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 mb-8">
              <h3 className="text-lg font-semibold text-slate-200 mb-3 flex items-center gap-2">
                <Zap size={18} className="text-cyan-400" />
                Algorithm Design
              </h3>
              <p className="text-sm text-slate-400 mb-3">
                Extended Hamming distance that handles strings of different lengths:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-sm text-slate-400">
                <li>Compare characters position-by-position up to the shorter string's length</li>
                <li>Add the length difference as a penalty</li>
                <li>For phrases, apply the same logic at the word level</li>
              </ol>
            </div>

            {/* Word Distance Results */}
            <div className="mb-8">
              <DashboardCard
                title="Part 2A: Word Distance"
                description="Character-level comparison with length penalty"
                icon={<Calculator size={20} />}
              >
                <EditDistanceTable data={WORD_DISTANCE_DATA} title="Word Comparisons" />
              </DashboardCard>
            </div>

            {/* Phrase Distance Results */}
            <DashboardCard
              title="Part 2B: Phrase Distance"
              description="Word-level comparison treating words as atomic units"
              icon={<Calculator size={20} />}
            >
              <EditDistanceTable data={PHRASE_DISTANCE_DATA} title="Phrase Comparisons" />
            </DashboardCard>
          </>
        )}

        {activeTab === 'part3' && (
          <>
            {/* Patent Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <StatsCard label="Total Patents" value="8,156" subtitle="descriptions analyzed" color="cyan" />
              <StatsCard label="Utility Patents" value="7,547" subtitle="92.5%" color="emerald" />
              <StatsCard label="Design Patents" value="609" subtitle="7.5%" color="amber" />
            </div>

            {/* Raw Terms Chart */}
            <div className="mb-8">
              <DashboardCard
                title="Part 3A: Top 10 Terms (Raw)"
                description="Most common terms including stop words. Note how 'the', 'of', and other common words dominate."
                icon={<BarChart3 size={20} />}
              >
                <TermFrequencyChart data={RAW_TERM_FREQUENCY_DATA} />
              </DashboardCard>
            </div>

            {/* Clean Terms Chart */}
            <DashboardCard
              title="Part 3B: Top 10 Terms (Stop Words Removed)"
              description="After removing 130 common stop words, meaningful patterns emerge between patent types."
              icon={<BarChart3 size={20} />}
            >
              <TermFrequencyChart data={TERM_FREQUENCY_DATA} />
            </DashboardCard>

            {/* Observations */}
            <div className="mt-6 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-slate-200 mb-3 flex items-center gap-2">
                <BookOpen size={18} className="text-cyan-400" />
                Key Observations
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• <span className="text-violet-400 font-semibold">"invention"</span> appears 2,400x in Utility patents but only 4x in Design patents (600:1 ratio)</li>
                <li>• <span className="text-amber-400 font-semibold">Design patents</span> emphasize visual terminology: "view", "perspective", "figure"</li>
                <li>• <span className="text-cyan-400 font-semibold">Utility patents</span> favor technical language: "embodiment", "comprising", "method"</li>
              </ul>
            </div>
          </>
        )}

        {/* Footer */}
        <footer className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Github size={16} />
            <span>L2 Assistant Data Scientist Assessment</span>
          </div>
          <p>January 2026 | Built with React + Recharts + Tailwind</p>
        </footer>

      </main>
    </div>
  );
};

export default App;
