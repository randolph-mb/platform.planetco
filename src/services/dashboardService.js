
// Mock data service
export const fetchDashboardData = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return {
        stats: {
            trainingTime: '45 Min.',
            apiCost: '$0.005',
            useCases: 'Chat, Code, RAG'
        },
        aiHistory: [
            {
                id: 1,
                year: '2017',
                category: 'Research Milestone',
                title: 'Attention Is All You Need',
                description: 'Google Research publishes the landmark paper introducing the Transformer architecture, laying the foundation for modern LLMs.',
                icon: 'Flame'
            },
            {
                id: 2,
                year: '2022',
                category: 'Product Launch',
                title: 'ChatGPT Released',
                description: 'OpenAI releases ChatGPT, bringing conversational AI to the mainstream and sparking a global AI revolution.',
                icon: 'MessageSquare'
            },
            {
                id: 3,
                year: 'Culture',
                category: 'Sci-Fi Literature',
                title: 'The Murderbot Diaries',
                description: 'Martha Wells\' series exploring consciousness and autonomy through the lens of a security unit that hacked its own governor module.',
                icon: 'Bot'
            },
            {
                id: 4,
                year: '1950',
                category: 'Foundations',
                title: 'The Turing Test',
                description: 'Alan Turing proposes the "Imitation Game" to test a machine\'s ability to exhibit intelligent behavior equivalent to a human.',
                icon: 'Cpu'
            }
        ],
        news: [
            {
                id: 1,
                title: 'Voice Agent v2.0 Available',
                category: 'New Service',
                time: '2h ago',
                description: 'Permanent Optimization of Call Centers with improved latency and natural sounding voices.',
                image: null
            },
            {
                id: 2,
                title: 'OpenAI Pricing Update',
                category: 'Platform Maintenance',
                time: '1d ago',
                description: 'Platform Maintenance',
                image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=150&h=150&fit=crop'
            },
            {
                id: 3,
                title: 'Database Optimization',
                category: 'Scheduled Maintenance',
                time: '2d ago',
                description: 'Scheduled Maintenance',
                image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=150&h=150&fit=crop'
            }
        ]
    };
};
