import React from 'react';
import { Mic, Play, MoreHorizontal } from 'lucide-react';

const VoiceAgentPage = () => {
    const voices = [
        { name: 'Sarah (US)', lang: 'English (US)', gender: 'Female', style: 'Professional', status: 'Active' },
        { name: 'Michael (UK)', lang: 'English (UK)', gender: 'Male', style: 'Calm', status: 'Active' },
        { name: 'Emma (AU)', lang: 'English (AU)', gender: 'Female', style: 'Friendly', status: 'Training' },
        { name: 'Hans (DE)', lang: 'German', gender: 'Male', style: 'Formal', status: 'Active' },
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Voice Agent</h1>
                <p className="text-slate-500">Manage voice synthesis and recognition profiles.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {voices.map((voice, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                                    <Mic size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">{voice.name}</h3>
                                    <p className="text-sm text-slate-500">{voice.lang} • {voice.gender}</p>
                                </div>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex-1 h-12 bg-slate-50 rounded-lg border border-slate-100 flex items-center px-4 gap-2">
                                <button className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors">
                                    <Play size={14} fill="currentColor" />
                                </button>
                                <div className="flex-1 flex items-center gap-1 h-full py-4">
                                    {/* Fake waveform */}
                                    {[...Array(20)].map((_, i) => (
                                        <div key={i} className="w-1 bg-slate-300 rounded-full" style={{ height: `${Math.random() * 100}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Style: <span className="text-slate-700">{voice.style}</span></span>
                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${voice.status === 'Active' ? 'bg-indigo-50 text-indigo-600' : 'bg-amber-50 text-amber-600'
                                }`}>
                                {voice.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VoiceAgentPage;
