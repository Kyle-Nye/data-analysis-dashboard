import React from 'react';
import { CoefficientRow } from '../types';

interface CoefficientsTableProps {
  data: CoefficientRow[];
}

export const CoefficientsTable: React.FC<CoefficientsTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left text-sm text-slate-300">
        <thead className="bg-slate-900/50 text-xs uppercase font-semibold text-slate-400">
          <tr>
            <th className="px-4 py-3 rounded-tl-lg">Feature</th>
            <th className="px-4 py-3 text-right">Coefficient</th>
            <th className="px-4 py-3 rounded-tr-lg">Interpretation</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700/50">
          {data.map((row, index) => (
            <tr
              key={index}
              className="hover:bg-slate-700/20 transition-colors"
            >
              <td className="px-4 py-3 font-mono text-slate-200 text-xs">{row.feature}</td>
              <td className={`px-4 py-3 text-right font-mono font-bold ${
                row.coef > 0 ? 'text-emerald-400' : row.coef < 0 ? 'text-rose-400' : 'text-slate-400'
              }`}>
                {row.coef > 0 ? '+' : ''}{row.coef.toFixed(4)}
              </td>
              <td className="px-4 py-3 text-slate-400 text-xs">
                {row.interpretation}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-xs text-slate-500 italic">
        Positive coefficients (green) indicate higher likelihood of having devices. Negative (red) indicate lower likelihood.
      </div>
    </div>
  );
};
