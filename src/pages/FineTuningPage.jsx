import React from 'react';
import { Sliders, Cpu, Zap, ArrowRight } from 'lucide-react';

const FineTuningPage = () => {
    const models = [
        { name: 'Llama 3 8B', type: 'Open Source', status: 'Ready', description: 'Optimized for general purpose tasks and chat.', icon: Zap, color: 'text-orange-500', bg: 'bg-orange-50' },
        { name: 'GPT-4 Turbo', type: 'Proprietary', status: 'Active', description: 'High-intelligence model for complex reasoning.', icon: Cpu, color: 'text-blue-500', bg: 'bg-blue-50' },
        { name: 'Mistral 7B', type: 'Open Source', status: 'Standby', description: 'Efficient and fast model for low-latency needs.', icon: Sliders, color: 'text-purple-500', bg: 'bg-purple-50' },
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Fine-Tuning</h1>
                <p className="text-slate-500">Manage and fine-tune your AI models.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {models.map((model, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer group">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-lg ${model.bg} ${model.color}`}>
                                <model.icon size={24} />
                            </div>
                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${model.status === 'Ready' || model.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
                                }`}>
                                {model.status}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{model.name}</h3>
                        <p className="text-sm text-slate-500 mb-4 h-10">{model.description}</p>
                        <div className="flex items-center text-blue-600 text-sm font-semibold gap-1 group-hover:gap-2 transition-all">
                            Configure <ArrowRight size={16} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FineTuningPage;
