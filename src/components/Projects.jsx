import { useState } from 'react';
import ProjectModal from './ProjectModal';

const projectsData = {
    'erp': {
        title: 'Enterprise ERP System',
        icon: 'ph-buildings',
        color: 'text-brand',
        bg: 'bg-brand/10',
        purpose: 'To streamline complex business processes including inventory, HR, and finance into a single unified platform, reducing manual errors by 40%.',
        stack: ['ASP.NET Core', 'C#', 'SQL Server', 'React.js', 'Redux', 'Bootstrap'],
        features: [
            'Role-based Access Control (RBAC) for secure data management.',
            'Complex SQL Stored Procedures for generating financial reports.',
            'Real-time inventory tracking and automated low-stock alerts.',
            'Responsive UI allowing access from tablet and desktop devices.'
        ],
        code : '/'
    },
    'mobile': {
        title: 'Cross-Platform Mobile App',
        icon: 'ph-device-mobile-camera',
        color: 'text-purple-500',
        bg: 'bg-purple-500/10',
        purpose: 'To provide a seamless e-commerce experience on both iOS and Android, focusing on speed and user retention.',
        stack: ['React Native', 'Redux Toolkit', 'Stripe API', 'Firebase', 'Lottie'],
        features: [
            'Smooth 60fps animations using Lottie for better UX.',
            'Secure payment gateway integration with Stripe.',
            'Offline mode functionality using Redux Persist.',
            'Dynamic Dark/Light mode switching based on system preference.'
        ],
        code : '/'
    },
    'bot': {
        title: 'Automated Trading Bot',
        icon: 'ph-cpu', 
        color: 'text-yellow-500',
        bg: 'bg-yellow-500/10',
        purpose: 'To automate cryptocurrency trading strategies based on technical indicators, removing emotional bias from trading.',
        stack: ['Python', 'WebSockets', 'PostgreSQL', 'Discord API', 'Docker'],
        features: [
            'Real-time market data ingestion via WebSockets.',
            'Automated buy/sell execution with low latency.',
            'Discord bot integration for instant trade notifications and logs.',
            'Backtesting engine to validate strategies before live deployment.'
        ],
        code : 'https://github.com/Zarrar48/trading-bot'
    }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <div className="w-20 h-1 bg-brand mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Project 1: ERP */}
                <div className="reveal glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                    <div className="h-52 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 relative flex items-center justify-center overflow-hidden p-6">
                        <div className="w-full h-full bg-white dark:bg-slate-950 rounded-t-lg shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-500 border border-black/5 dark:border-white/5">
                            <div className="h-6 bg-slate-100 dark:bg-slate-900 border-b border-black/5 dark:border-white/5 flex items-center px-3 gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex-1 p-4 grid grid-cols-12 gap-2">
                                <div className="col-span-3 h-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                                <div className="col-span-9 h-full flex flex-col gap-2">
                                    <div className="h-1/3 bg-brand/20 rounded w-full"></div>
                                    <div className="h-2/3 bg-slate-50 dark:bg-slate-900 rounded border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center">
                                        <i className="ph ph-chart-bar text-3xl text-brand/50"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex gap-2 mb-4">
                            <span className="px-2 py-1 text-xs font-bold bg-brand/10 text-brand rounded">.NET Core</span>
                            <span className="px-2 py-1 text-xs font-bold bg-blue-500/10 text-blue-500 rounded">SQL Server</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Enterprise ERP System</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                            A comprehensive web application for managing business processes, featuring complex SQL stored procedures and a secure C# backend.
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                            <button onClick={() => setSelectedProject(projectsData['erp'])} className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-light transition-colors">
                                View Details <i className="ph-bold ph-arrow-right"></i>
                            </button>
                            
                            <a 
                                href="https://www.easeead.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand dark:text-slate-400 dark:hover:text-brand transition-colors"
                            >
                                Live Preview <i className="ph-bold ph-arrow-square-out"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 2: Mobile App */}
                <div className="reveal glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                     <div className="h-52 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 relative flex items-center justify-center overflow-hidden p-4">
                        <div className="w-32 h-full bg-white dark:bg-slate-950 rounded-2xl shadow-2xl border-4 border-slate-300 dark:border-slate-700 transform group-hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-300 dark:bg-slate-700 rounded-b-lg"></div>
                            <div className="p-4 pt-8 flex flex-col gap-3 h-full">
                                <div className="w-full h-24 bg-purple-500/20 rounded-lg flex items-center justify-center"><i className="ph-fill ph-wallet text-purple-500"></i></div>
                                <div className="w-full h-8 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                <div className="w-3/4 h-8 bg-slate-100 dark:bg-slate-800 rounded"></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex gap-2 mb-4">
                            <span className="px-2 py-1 text-xs font-bold bg-purple-500/10 text-purple-500 rounded">React Native</span>
                            <span className="px-2 py-1 text-xs font-bold bg-green-500/10 text-green-500 rounded">Redux</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Cross-Platform Mobile App</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                            A high-performance mobile application with smooth Lottie animations, Stripe payment integration, and dark mode support.
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                            <button onClick={() => setSelectedProject(projectsData['mobile'])} className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-light transition-colors">
                                View Details <i className="ph-bold ph-arrow-right"></i>
                            </button>
                            
                            <a 
                                href="https://cafe-84.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand dark:text-slate-400 dark:hover:text-brand transition-colors"
                            >
                                Live Preview <i className="ph-bold ph-arrow-square-out"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 3: Trading Bot */}
                <div className="reveal glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                     <div className="h-52 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 relative flex items-center justify-center overflow-hidden p-6">
                        <div className="w-full h-full bg-slate-900 rounded shadow-2xl p-4 font-mono text-xs text-green-400 flex flex-col gap-1 transform group-hover:scale-105 transition-transform duration-500 border border-slate-700">
                            <div className="flex gap-2 mb-2 border-b border-slate-800 pb-2">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                            <div className="opacity-50">&gt; init_trading_bot.py</div>
                            <div>&gt; Connecting to WebSocket... <span className="text-green-200">OK</span></div>
                            <div>&gt; Fetching market data...</div>
                            <div className="text-yellow-400">&gt; Signal detected: BUY @ 150.20</div>
                            <div className="animate-pulse">_</div>
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex gap-2 mb-4">
                            <span className="px-2 py-1 text-xs font-bold bg-yellow-500/10 text-yellow-500 rounded">Python</span>
                            <span className="px-2 py-1 text-xs font-bold bg-blue-400/10 text-blue-400 rounded">PostgreSQL</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Automated Trading Bot</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                            An intelligent bot using Python for web scraping and automation, integrated with Discord for real-time alerts and database logging.
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between">
                            <button onClick={() => setSelectedProject(projectsData['bot'])} className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-light transition-colors">
                                View Details <i className="ph-bold ph-arrow-right"></i>
                            </button>
                            
                            <a 
                                href="https://trading-bot-py.streamlit.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand dark:text-slate-400 dark:hover:text-brand transition-colors"
                            >
                                Live Preview <i className="ph-bold ph-arrow-square-out"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default Projects;