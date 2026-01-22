import React, { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ 
  title, 
  description, 
  children, 
  icon,
  className = ""
}) => {
  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 shadow-xl flex flex-col ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
            {icon && <span className="text-cyan-400">{icon}</span>}
            {title}
          </h2>
          {description && (
            <p className="text-sm text-slate-400 mt-1">{description}</p>
          )}
        </div>
      </div>
      <div className="flex-1 w-full min-h-0">
        {children}
      </div>
    </div>
  );
};
