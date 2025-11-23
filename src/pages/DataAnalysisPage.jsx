import React from 'react';
import { BarChart2, PieChart, TrendingUp, Download, Calendar } from 'lucide-react';

const DataAnalysisPage = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Data Analysis</h1>
                    <p className="text-slate-500">Deep dive into your platform's data and performance metrics.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors text-sm font-medium">
                        <Calendar size={16} />
                        Last 30 Days
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm">
                        <Download size={16} />
                        Export Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Chart 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 lg:col-span-2">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-slate-900">User Growth & Retention</h3>
                        <button className="text-slate-400 hover:text-slate-600"><TrendingUp size={20} /></button>
                    </div>
                    <div className="h-64 flex items-end gap-4 px-2">
                        {/* Fake Line Chart Visual */}
                        {[40, 55, 45, 60, 75, 65, 80, 70, 85, 90, 85, 95].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
                                <div className="w-full bg-blue-100 rounded-t-sm h-full relative overflow-hidden">
                                    <div className="absolute bottom-0 w-full bg-blue-500 transition-all duration-500 group-hover:bg-blue-600" style={{ height: `${h}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-slate-400 font-medium uppercase tracking-wider">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                    </div>
                </div>

                {/* Chart 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-6">Traffic Sources</h3>
                    <div className="flex justify-center mb-8 relative">
                        {/* CSS Donut Chart */}
                        <div className="w-48 h-48 rounded-full border-[16px] border-slate-100 relative flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border-[16px] border-indigo-500 border-t-transparent border-r-transparent rotate-45"></div>
                            <div className="absolute inset-0 rounded-full border-[16px] border-emerald-500 border-b-transparent border-l-transparent rotate-[200deg]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-slate-900">24k</span>
                                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Total Visits</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                                <span className="text-slate-600">Direct</span>
                            </div>
                            <span className="font-bold text-slate-900">65%</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                                <span className="text-slate-600">Referral</span>
                            </div>
                            <span className="font-bold text-slate-900">25%</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-slate-200"></span>
                                <span className="text-slate-600">Other</span>
                            </div>
                            <span className="font-bold text-slate-900">10%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Bounce Rate', value: '42.3%', change: '-2.1%', color: 'emerald' },
                    { label: 'Avg. Session', value: '4m 32s', change: '+12s', color: 'blue' },
                    { label: 'Conversion', value: '3.2%', change: '+0.4%', color: 'purple' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <p className="text-sm text-slate-500 font-medium mb-1">{stat.label}</p>
                        <div className="flex items-end gap-3">
                            <h4 className="text-2xl font-bold text-slate-900">{stat.value}</h4>
                            <span className={`text-xs font-bold mb-1 ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-emerald-600'}`}>{stat.change}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataAnalysisPage;
