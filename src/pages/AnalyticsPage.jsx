import React from 'react';
import { BarChart2, TrendingUp, Users, Clock } from 'lucide-react';

const AnalyticsPage = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Usage Analytics</h1>
                <p className="text-slate-500">Insights into your platform usage and performance.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { label: 'Total Requests', value: '2.4M', change: '+12.5%', icon: BarChart2, color: 'blue' },
                    { label: 'Avg. Latency', value: '145ms', change: '-5.2%', icon: Clock, color: 'emerald' },
                    { label: 'Active Users', value: '8,540', change: '+3.1%', icon: Users, color: 'purple' },
                    { label: 'Token Usage', value: '450M', change: '+8.4%', icon: TrendingUp, color: 'orange' },
                ].map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2 rounded-lg bg-${stat.color}-50 text-${stat.color}-600`}>
                                <stat.icon size={20} />
                            </div>
                            <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-emerald-600'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                        <p className="text-sm text-slate-500">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Charts Section (Placeholder visuals) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-6">Request Volume (30 Days)</h3>
                    <div className="h-64 flex items-end gap-2">
                        {[...Array(30)].map((_, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-blue-500 rounded-t-sm hover:bg-blue-600 transition-colors"
                                style={{ height: `${Math.max(10, Math.random() * 100)}%`, opacity: 0.5 + (Math.random() * 0.5) }}
                            ></div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-slate-400">
                        <span>Nov 1</span>
                        <span>Nov 15</span>
                        <span>Nov 30</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-6">Usage by Model</h3>
                    <div className="space-y-4">
                        {[
                            { label: 'Llama 3 8B', value: 45, color: 'bg-orange-500' },
                            { label: 'GPT-4 Turbo', value: 30, color: 'bg-blue-500' },
                            { label: 'Mistral 7B', value: 15, color: 'bg-purple-500' },
                            { label: 'Others', value: 10, color: 'bg-slate-300' },
                        ].map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium text-slate-700">{item.label}</span>
                                    <span className="text-slate-500">{item.value}%</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;
