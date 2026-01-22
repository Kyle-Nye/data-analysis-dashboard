import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { TermFrequency, EditDistanceResult } from '../types';

// Custom Tooltip for dark mode
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-lg text-xs">
        <p className="text-slate-200 font-semibold mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// =============================================================================
// Term Frequency Bar Chart (Part 3)
// =============================================================================

interface TermFrequencyChartProps {
  data: TermFrequency[];
  title?: string;
}

export const TermFrequencyChart: React.FC<TermFrequencyChartProps> = ({ data, title }) => {
  return (
    <div className="w-full h-[400px]">
      {title && <h4 className="text-sm text-slate-400 mb-2">{title}</h4>}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, bottom: 60, left: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
          <XAxis
            dataKey="term"
            stroke="#94a3b8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#ffffff', fontSize: 14, fontWeight: 500 }}
            angle={0}
            tickMargin={15}
            interval={0}
          />
          <YAxis
            stroke="#94a3b8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#ffffff', fontSize: 14, fontWeight: 500 }}
            tickFormatter={(val) => val >= 1000 ? `${(val/1000).toFixed(0)}k` : val}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: '10px' }} />
          <Bar
            dataKey="design"
            name="Design Patents"
            fill="#f97316"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="utility"
            name="Utility Patents"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// =============================================================================
// Edit Distance Results Table (Part 2)
// =============================================================================

interface EditDistanceTableProps {
  data: EditDistanceResult[];
  title: string;
}

export const EditDistanceTable: React.FC<EditDistanceTableProps> = ({ data, title }) => {
  return (
    <div className="w-full">
      <h4 className="text-sm text-slate-400 mb-3">{title}</h4>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-semibold text-cyan-400 uppercase">
                {item.comparison}
              </span>
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-bold">
                Distance: {item.distance}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="font-mono text-slate-300 bg-slate-900/50 px-3 py-2 rounded">
                "{item.word1}"
              </div>
              <div className="font-mono text-slate-300 bg-slate-900/50 px-3 py-2 rounded">
                "{item.word2}"
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2 italic">
              {item.breakdown}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// =============================================================================
// Stats Card Component
// =============================================================================

interface StatsCardProps {
  label: string;
  value: string;
  subtitle?: string;
  color?: 'cyan' | 'emerald' | 'violet' | 'amber';
}

export const StatsCard: React.FC<StatsCardProps> = ({
  label,
  value,
  subtitle,
  color = 'cyan'
}) => {
  const colorClasses = {
    cyan: 'text-cyan-400',
    emerald: 'text-emerald-400',
    violet: 'text-violet-400',
    amber: 'text-amber-400',
  };

  return (
    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
      <p className="text-xs text-slate-400 uppercase font-semibold">{label}</p>
      <p className={`text-2xl font-bold ${colorClasses[color]}`}>{value}</p>
      {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
    </div>
  );
};
