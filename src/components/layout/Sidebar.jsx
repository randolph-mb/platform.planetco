import React from 'react';
import { LayoutDashboard, Sliders, Bot, Mic, BarChart2, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Sidebar = () => {
    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
        { icon: BarChart2, label: 'Data Analysis', path: '/data-analysis' },
        { icon: Sliders, label: 'Fine-Tuning', path: '/fine-tuning' },
        { icon: Bot, label: 'Chatbot', path: '/chatbot' },
        { icon: Mic, label: 'Voice Agent', path: '/voice-agent' },
        { icon: BarChart2, label: 'Usage Analytics', path: '/analytics' },
    ];

    return (
        <div className="w-64 h-screen bg-slate-900 text-slate-400 flex flex-col fixed left-0 top-0 border-r border-slate-800 shadow-xl z-20">
            <div className="p-6 mb-2">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="PlanetCo Logo" className="w-9 h-9 object-contain" />
                    <span className="text-lg font-bold text-white tracking-tight">PlanetCo Platform</span>
                </div>
            </div>

            <nav className="flex-1 px-3 space-y-1">
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                            ? 'bg-blue-600/10 text-blue-400 border-l-2 border-blue-500'
                            : 'hover:bg-slate-800/50 hover:text-slate-200 hover:pl-5'
                            }`}
                    >
                        {({ isActive }) => (
                            <>
                                <item.icon size={18} className={`transition-colors ${isActive ? 'text-blue-400' : 'group-hover:text-white'}`} />
                                <span className="font-medium text-sm">{item.label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-800/50">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800/50 cursor-pointer transition-colors group">
                    <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 border border-slate-700 group-hover:border-slate-600">
                        <User size={16} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">John Doe</p>
                        <p className="text-xs text-slate-500">Administrator</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
