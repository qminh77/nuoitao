import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { SPENDING_DATA } from '../constants';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-600 p-3 rounded-lg shadow-xl">
        <p className="font-bold text-white">{payload[0].name}</p>
        <p className="text-emerald-400 font-mono text-lg">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const PieChartSection: React.FC = () => {
  return (
    <div className="h-[300px] sm:h-[400px] w-full relative z-10">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={SPENDING_DATA}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={5}
            innerRadius={60}
          >
            {SPENDING_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(0,0,0,0)" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="bottom" 
            height={36} 
            formatter={(value) => <span className="text-slate-300 text-sm ml-2">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Center Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center pointer-events-none">
        <span className="text-3xl font-bold text-white block">100%</span>
        <span className="text-xs text-slate-400">MINH BẠCH</span>
      </div>
    </div>
  );
};

export default PieChartSection;