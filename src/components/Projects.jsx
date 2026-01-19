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
        code : '/',
        discord : '/'
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
        code : 'https://github.com/SumairAziz/Cafe-84',
        discord : '/'
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
        code : 'https://github.com/Zarrar48/trading-bot',
        discord : 'https://discord.gg/3YTwF5Ar'
    },
    'quantix': {
        title: 'Quantix AI Analytics',
        icon: 'ph-trend-up', 
        color: 'text-cyan-500',
        bg: 'bg-cyan-500/10',
        purpose: 'A next-generation financial analytics dashboard utilizing AI to predict market trends and visualize complex datasets in real-time.',
        stack: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'WebSockets', 'PostgreSQL', 'Discord API', 'Tailwind CSS'],
        features: [
            'AI-driven predictive modeling for asset price movements.',
            'Interactive, high-performance charting libraries.',
            'Server-side rendering for optimal SEO and performance.',
            'Secure authentication and cloud data storage via Supabase.'
        ],
        code : 'https://github.com/Zarrar48/quantix',
        discord : 'https://discord.gg/SExNGjV3'
    },
    'syntax': {
        title: 'Syntax CMS Template',
        icon: 'ph-article', 
        color: 'text-indigo-500',
        bg: 'bg-indigo-500/10',
        purpose: 'A modern, high-performance React template designed for content-heavy applications, blogs, and social media platforms with a focus on typography and readability.',
        stack: ['React.js', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion'],
        features: [
            'Editorial-style layout with sticky sidebars and responsive grid.',
            'Custom "Light/Dark" mode implementation with smooth transitions.',
            'Component-based architecture suitable for scalable CMS frontends.',
            'Optimized typography using Tailwind Typography plugins.'
        ],
        code : '/',
        discord : '/'
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

                {/* Project 3: Syntax CMS Template (NEW) */}
                <div className="reveal glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                    <div className="h-52 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-950 dark:to-slate-900 relative flex items-center justify-center overflow-hidden p-6">
                        {/* Browser Window UI */}
                        <div className="w-full h-full bg-white dark:bg-slate-950 rounded-lg shadow-xl border border-indigo-200 dark:border-indigo-900/30 flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                             {/* Browser Toolbar */}
                            <div className="h-6 bg-slate-50 dark:bg-slate-900 border-b border-indigo-100 dark:border-slate-800 flex items-center px-3 gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                                {/* Address Bar */}
                                <div className="ml-2 w-1/2 h-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700"></div>
                            </div>
                            
                            {/* App Content Preview */}
                            <div className="flex-1 flex">
                                {/* Sidebar */}
                                <div className="w-1/4 h-full border-r border-indigo-50 dark:border-slate-800 p-2 flex flex-col gap-2">
                                    <div className="w-full h-2 bg-indigo-100 dark:bg-indigo-900/40 rounded"></div>
                                    <div className="w-3/4 h-2 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                </div>
                                {/* Main Feed */}
                                <div className="flex-1 p-3 flex flex-col gap-3">
                                     <div className="w-full h-16 bg-indigo-50 dark:bg-slate-800/50 rounded-md border border-indigo-100 dark:border-slate-800 relative overflow-hidden">
                                        <div className="absolute top-2 left-2 w-8 h-8 rounded bg-indigo-200 dark:bg-indigo-900"></div>
                                     </div>
                                     <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                     <div className="w-2/3 h-2 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex gap-2 mb-4">
                            <span className="px-2 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-500 rounded">React</span>
                            <span className="px-2 py-1 text-xs font-bold bg-cyan-500/10 text-cyan-500 rounded">Tailwind</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Syntax CMS Template</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                            A clean, editorial-style React template designed for social media and content-heavy applications with a focus on modern typography.
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between">
                            <button onClick={() => setSelectedProject(projectsData['syntax'])} className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-light transition-colors">
                                View Details <i className="ph-bold ph-arrow-right"></i>
                            </button>
                            
                            <a 
                                href="https://syntax-eosin.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand dark:text-slate-400 dark:hover:text-brand transition-colors"
                            >
                                Live Preview <i className="ph-bold ph-arrow-square-out"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project 4: Trading Bot */}
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

                {/* Project 5: Quantix */}
                <div className="reveal glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                    <div className="h-52 bg-slate-900 relative flex items-center justify-center overflow-hidden">
                        {/* Background Grid Effect */}
                        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                        
                        {/* Central Glowing Element */}
                        <div className="relative z-10 w-24 h-24 bg-cyan-900/30 rounded-full flex items-center justify-center border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.2)] transform group-hover:scale-110 transition-transform duration-500">
                             <div className="absolute inset-0 rounded-full border-t border-cyan-400 animate-spin-slow"></div>
                             <i className="ph-bold ph-trend-up text-4xl text-cyan-400"></i>
                        </div>
                        
                        {/* Decorative floating elements */}
                        <div className="absolute bottom-4 left-4 text-[10px] font-mono text-cyan-500/50">
                            <div>CPU: 42%</div>
                            <div>MEM: 1.2GB</div>
                        </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex gap-2 mb-4">
                            <span className="px-2 py-1 text-xs font-bold bg-cyan-500/10 text-cyan-500 rounded">Next.js</span>
                            <span className="px-2 py-1 text-xs font-bold bg-slate-500/10 text-slate-500 dark:text-slate-300 rounded">TypeScript</span>
                            <span className="px-2 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-500 dark:text-indigo-300 rounded">Python</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Quantix AI Analytics</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                            A next-generation financial analytics dashboard utilizing AI to predict market trends and visualize complex datasets in real-time.
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between">
                            <button onClick={() => setSelectedProject(projectsData['quantix'])} className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-light transition-colors">
                                View Details <i className="ph-bold ph-arrow-right"></i>
                            </button>
                            
                            <a 
                                href="https://quantix-two.vercel.app/" 
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