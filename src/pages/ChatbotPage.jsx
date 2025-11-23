import React from 'react';
import { Bot, MessageSquare, MoreHorizontal } from 'lucide-react';

const ChatbotPage = () => {
    const chatbots = [
        { name: 'Customer Support Bot', type: 'GPT-4', status: 'Active', conversations: '1,234', satisfaction: '94%' },
        { name: 'Sales Assistant', type: 'GPT-3.5', status: 'Active', conversations: '856', satisfaction: '89%' },
        { name: 'Technical Help Bot', type: 'GPT-4', status: 'Training', conversations: '423', satisfaction: '91%' },
        { name: 'FAQ Bot', type: 'Custom', status: 'Active', conversations: '2,145', satisfaction: '87%' },
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Chatbot</h1>
                <p className="text-slate-500">Manage and monitor your AI chatbot instances.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {chatbots.map((bot, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                                    <Bot size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">{bot.name}</h3>
                                    <p className="text-sm text-slate-500">{bot.type}</p>
                                </div>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <MessageSquare size={14} className="text-slate-400" />
                                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Conversations</span>
                                </div>
                                <p className="text-xl font-bold text-slate-900">{bot.conversations}</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Satisfaction</span>
                                </div>
                                <p className="text-xl font-bold text-slate-900">{bot.satisfaction}</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${bot.status === 'Active' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
                                }`}>
                                {bot.status}
                            </span>
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                                View Details →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatbotPage;
