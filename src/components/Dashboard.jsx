import React, { useState } from 'react';
import { Clock, DollarSign, MessageSquare, ChevronLeft, ChevronRight, Flame, MapPin, ArrowRight, Loader2, Cpu, Bot } from 'lucide-react';
import { useDashboardData } from '../hooks/useDashboardData';

const Dashboard = () => {
  const { data, loading, error } = useDashboardData();
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        Error loading dashboard data. Please try again later.
      </div>
    );
  }

  const { stats, news, aiHistory } = data;

  const nextHistory = () => {
    setCurrentHistoryIndex((prev) => (prev + 1) % aiHistory.length);
  };

  const prevHistory = () => {
    setCurrentHistoryIndex((prev) => (prev - 1 + aiHistory.length) % aiHistory.length);
  };

  const currentItem = aiHistory[currentHistoryIndex];

  // Helper to get icon component
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Flame': return <Flame size={20} fill="currentColor" />;
      case 'MessageSquare': return <MessageSquare size={20} fill="currentColor" />;
      case 'Bot': return <Bot size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      default: return <Flame size={20} fill="currentColor" />;
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Main Content - AI History Carousel */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:shadow-[0_8px_24px_rgb(0,0,0,0.08)] transition-all duration-300 h-full flex flex-col justify-between">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50/50 to-transparent rounded-bl-full -mr-24 -mt-24 pointer-events-none opacity-60"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-wider rounded-md border border-indigo-100">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
                  AI History Spotlight
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevHistory}
                    className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors z-20"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextHistory}
                    className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors z-20"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="transition-all duration-500 ease-in-out transform">
                <h2 className="text-3xl font-bold text-slate-900 mb-3 flex items-center gap-3 tracking-tight">
                  <span className="p-2 bg-indigo-50 rounded-lg text-indigo-500 border border-indigo-100">
                    {getIcon(currentItem.icon)}
                  </span>
                  {currentItem.title}
                </h2>

                <p className="text-slate-500 mb-8 flex items-center gap-2 text-sm font-medium">
                  <MapPin size={14} className="text-slate-400" />
                  {currentItem.year} • {currentItem.category}
                </p>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/60 mb-8">
                  <p className="text-slate-600 font-serif italic leading-relaxed text-lg">
                    "{currentItem.description}"
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-auto">
              {aiHistory.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentHistoryIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentHistoryIndex ? 'bg-indigo-500 w-6' : 'bg-slate-200 hover:bg-slate-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - News */}
        <div className="lg:col-span-1 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Industry News</h3>
              <p className="text-xs text-slate-500 font-medium">Latest updates & announcements</p>
            </div>
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">View All</button>
          </div>

          <div className="space-y-4">
            {news.map((item) => (
              <a
                key={item.id}
                href={item.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wide">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-slate-400">{item.time}</span>
                </div>

                <h4 className="font-bold text-slate-800 text-base mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {item.description || 'Discover the latest developments in AI technology and how they impact the industry.'}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-600 text-xs font-semibold gap-1.5 group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  {item.image && (
                    <div className="w-12 h-12 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                      <img src={item.image} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
