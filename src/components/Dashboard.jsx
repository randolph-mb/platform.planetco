import React from 'react';
import { Clock, DollarSign, MessageSquare, ChevronLeft, ChevronRight, Flame, MapPin, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Feature Card */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:shadow-[0_8px_24px_rgb(0,0,0,0.08)] transition-all duration-300">
            {/* Background decoration - more subtle */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50/50 to-transparent rounded-bl-full -mr-24 -mt-24 pointer-events-none opacity-60"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider rounded-md border border-emerald-100">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  Available
                </div>
                <div className="flex gap-2">
                  <button className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors">
                    <ChevronLeft size={16} />
                  </button>
                  <button className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-3 flex items-center gap-3 tracking-tight">
                <span className="p-2 bg-orange-50 rounded-lg text-orange-500 border border-orange-100">
                  <Flame size={20} fill="currentColor" />
                </span>
                Llama 3 8B Fine-Tuning
              </h2>

              <p className="text-slate-500 mb-8 flex items-center gap-2 text-sm font-medium">
                <MapPin size={14} className="text-slate-400" />
                Enterprise-grade model customization
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-100 hover:border-slate-200 transition-colors">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-2 tracking-wider">Training Time</p>
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <Clock size={16} className="text-blue-500" />
                    45 Min. <span className="text-slate-400 font-normal text-xs">(typ)</span>
                  </div>
                </div>
                <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-100 hover:border-slate-200 transition-colors">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-2 tracking-wider">API Cost</p>
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <DollarSign size={16} className="text-blue-500" />
                    $0.005 <span className="text-slate-400 font-normal text-xs">/ 1k Tokens</span>
                  </div>
                </div>
                <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-100 hover:border-slate-200 transition-colors">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-2 tracking-wider">Use Cases</p>
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <MessageSquare size={16} className="text-blue-500" />
                    Chat, Code, RAG
                  </div>
                </div>
              </div>

              {/* Technology Section */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/60">
                <h3 className="text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-widest">The Technology</h3>
                <p className="text-slate-600 font-serif italic leading-relaxed text-lg">
                  "Powered by the latest open-source architecture, Llama 3 Fine-Tuning enables unparalleled enterprise data adaptation. Achieve industry-specific accuracy for mission-critical applications."
                </p>
              </div>
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
            {/* News Item 1 */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">New Service</span>
                <span className="text-[10px] text-slate-400">2h ago</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Voice Agent v2.0 Available</h4>
              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                Permanent Optimization of Call Centers with improved latency and natural sounding voices.
              </p>
            </div>

            {/* News Item 2 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all cursor-pointer flex gap-4 group">
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex-shrink-0 overflow-hidden border border-slate-100">
                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                  <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=150&h=150&fit=crop" alt="News" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-slate-800 text-sm mb-1 truncate group-hover:text-blue-600 transition-colors">OpenAI Pricing Update</h4>
                <p className="text-xs text-slate-500 mb-2">Platform Maintenance</p>
                <div className="flex items-center text-blue-500 text-[10px] font-bold gap-1">
                  Read More <ArrowRight size={10} />
                </div>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all cursor-pointer flex gap-4 group">
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex-shrink-0 overflow-hidden border border-slate-100">
                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                  <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=150&h=150&fit=crop" alt="News" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-slate-800 text-sm mb-1 truncate group-hover:text-blue-600 transition-colors">Database Optimization</h4>
                <p className="text-xs text-slate-500 mb-2">Scheduled Maintenance</p>
                <div className="flex items-center text-blue-500 text-[10px] font-bold gap-1">
                  Read More <ArrowRight size={10} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
