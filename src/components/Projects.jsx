import { useState } from 'react';
import ProjectModal from './ProjectModal';

const projectsData = {
    'erp': {
        title: 'Enterprise ERP System',
        icon: 'ph-buildings',
        color: 'text-brand',
        bg: 'bg-brand/10',
        purpose: 'A unified platform streamlining inventory, HR, and finance into a single interface, designed to reduce manual business errors by 40%.',
        stack: ['.NET Core', 'React', 'SQL Server', 'Bootstrap'],
        features: [
            'Role-Based Access Control (RBAC) for secure management.',
            'Complex SQL stored procedures for data processing.',
            'Unified modules for Inventory, HR, and Finance.',
            'Real-time reporting and analytics.'
        ],
        code : '/',
        discord : '/'
    },
    'quantix': {
        title: 'Quantix AI Analytics',
        icon: 'ph-trend-up', 
        color: 'text-cyan-500',
        bg: 'bg-cyan-500/10',
        purpose: 'A high-performance financial dashboard utilizing AI to predict market trends and visualize complex financial data.',
        stack: ['Next.js', 'Python', 'FastAPI', 'Supabase', 'WebSockets'],
        features: [
            'Real-time data ingestion via WebSockets.',
            'AI-driven market trend predictions.',
            'Interactive charting for financial analysis.',
            'Secure data storage using Supabase.'
        ],
        code : 'https://github.com/Zarrar48/quantix',
        discord : 'https://discord.gg/SExNGjV3'
    },
    'bot': {
        title: 'Automated Trading Bot',
        icon: 'ph-cpu', 
        color: 'text-yellow-500',
        bg: 'bg-yellow-500/10',
        purpose: 'An algorithmic trading system that executes buy/sell orders based on technical indicators, removing emotional bias.',
        stack: ['Python', 'Docker', 'WebSockets', 'Discord API'],
        features: [
            'Real-time WebSocket data ingestion.',
            'Automated execution based on technical indicators.',
            'Discord integration for instant trade alerts.',
            'Containerized deployment using Docker.'
        ],
        code : 'https://github.com/Zarrar48/trading-bot',
        discord : 'https://discord.gg/3YTwF5Ar'
    },
    'cafe84': { 
        title: 'Cafe-84 Mobile App',
        icon: 'ph-device-mobile-camera',
        color: 'text-purple-500',
        bg: 'bg-purple-500/10',
        purpose: 'A cross-platform e-commerce app designed for speed and user retention, featuring offline capabilities and smooth interactions.',
        stack: ['React Native', 'Redux', 'Stripe', 'Lottie'],
        features: [
            'Smooth 60fps interactions with Lottie animations.',
            'Secure payment integration via Stripe.',
            'Offline mode for uninterrupted browsing.',
            'Dynamic dark/light theme switching.'
        ],
        code : 'https://github.com/SumairAziz/Cafe-84',
        discord : '/'
    },
    'syntax': {
        title: 'Syntax CMS Template',
        icon: 'ph-article', 
        color: 'text-indigo-500',
        bg: 'bg-indigo-500/10',
        purpose: 'A modern, editorial-style frontend template designed specifically for content-heavy applications and blogs.',
        stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
        features: [
            'Refined typographic hierarchy for readability.',
            'Modular, component-based architecture.',
            'High-performance build using Vite.',
            'Editorial layout with sticky sidebars.'
        ],
        code : '/',
        discord : '/'
    },
    'vitalsync': {
        title: 'VitalSync Daily Tracker',
        icon: 'ph-activity', // Changed icon to activity/fitness
        color: 'text-rose-500',
        bg: 'bg-rose-500/10',
        purpose: 'A comprehensive daily tracker designed to help users lose or gain weight by monitoring food intake, water consumption, and exercise habits.',
        stack: ['Flutter'],
        features: [
            'Calorie and macronutrient tracking for meals.',
            'Daily water intake logging with hydration goals.',
            'Exercise and workout activity tracking.',
            'Weight management tools for loss or gain goals.'
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
                
                {/* 1. ERP */}
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
                            <span className="px-2 py-1 text-xs font-bold bg-blue-500/10 text-blue-500 rounded">React</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{projectsData['erp'].title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                            {projectsData['erp'].purpose}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                            <button onClick={() => setSelectedProject(projectsData['erp'])} className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-light transition-colors">
                                View Details <i className="ph-bold ph-arrow-right"></i>
                            </button>
                            <a href="https://www.easeead.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand dark:text-slate-400 dark:hover:text-brand transition-colors">
                                Live Preview <i className="ph-bold ph-arrow-square-out"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 2. Quantix */}
                <div className="reveal glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                    <div className="h-52 bg-slate-900 relative flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                        <div className="relative z-10 w-24 h-24 bg-cyan-900/30 rounded-full flex items-center justify-center border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.2)] transform group-hover:scale-110 transition-transform duration-500">
                             <div className="absolute inset-0 rounded-full border-t border-cyan-400 animate-spin-slow"></div>
                             <i className="ph-bold ph-trend-up text-4xl text-cyan-400"></i>
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex gap-2 mb-4">
                            <span className="px-2 py-1 text-xs font-bold bg-cyan-500/10 text-cyan-500 rounded">Next.js</span>
                            <span className="px-2 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-500 dark:text-indigo-300 rounded">Python</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{projectsData['quantix'].title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                             {projectsData['quantix'].purpose}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                            <button onClick={() => setSelectedProject(projectsData['quantix'])} className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-light transition-colors">
                                View Details <i className="ph-bold ph-arrow-right"></i>
                            </button>
                            <a href="https://quantix-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand dark:text-slate-400 dark:hover:text-brand transition-colors">
                                Live Preview <i className="ph-bold ph-arrow-square-out"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 3. Trading Bot */}
                <div className="reveal glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                      <div className="h-52 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 relative flex items-center justify-center overflow-hidden p-6">
                        <div className="w-full h-full bg-slate-900 rounded shadow-2xl p-4 font-mono text-xs text-green-400 flex flex-col gap-1 transform group-hover:scale-105 transition-transform duration-500 border border-slate-700">
                            <div className="flex gap-2 mb-2 border-b border-slate-800 pb-2">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                            <div className="opacity-50">&gt; init_trading_bot.py</div>
                            <div>&gt; WebSocket... <span className="text-green-200">OK</span></div>
                            <div className="text-yellow-400">&gt; Signal: BUY @ 150.20</div>
                            <div className="animate-pulse">_</div>
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex gap-2 mb-4">
                            <span className="px-2 py-1 text-xs font-bold bg-yellow-500/10 text-yellow-500 rounded">Python</span>
                            <span className="px-2 py-1 text-xs font-bold bg-blue-400/10 text-blue-400 rounded">Docker</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{projectsData['bot'].title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                             {projectsData['bot'].purpose}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                            <button onClick={() => setSelectedProject(projectsData['bot'])} className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-light transition-colors">
                                View Details <i className="ph-bold ph-arrow-right"></i>
                            </button>
                            <a href="https://trading-bot-py.streamlit.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand dark:text-slate-400 dark:hover:text-brand transition-colors">
                                Live Preview <i className="ph-bold ph-arrow-square-out"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 4. Cafe-84 (Mobile) */}
                <div className="reveal glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                      <div className="h-52 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 relative flex items-center justify-center overflow-hidden p-4">
                        <div className="w-32 h-full bg-white dark:bg-slate-950 rounded-2xl shadow-2xl border-4 border-slate-300 dark:border-slate-700 transform group-hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-300 dark:bg-slate-700 rounded-b-lg"></div>
                            <div className="p-4 pt-8 flex flex-col gap-3 h-full">
                                <div className="w-full h-24 bg-purple-500/20 rounded-lg flex items-center justify-center"><i className="ph-fill ph-coffee text-purple-500"></i></div>
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
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{projectsData['cafe84'].title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                             {projectsData['cafe84'].purpose}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                            <button onClick={() => setSelectedProject(projectsData['cafe84'])} className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-light transition-colors">
                                View Details <i className="ph-bold ph-arrow-right"></i>
                            </button>
                            <a href="https://cafe-84.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand dark:text-slate-400 dark:hover:text-brand transition-colors">
                                Live Preview <i className="ph-bold ph-arrow-square-out"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 5. Syntax CMS */}
                <div className="reveal glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                    <div className="h-52 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-950 dark:to-slate-900 relative flex items-center justify-center overflow-hidden p-6">
                        <div className="w-full h-full bg-white dark:bg-slate-950 rounded-lg shadow-xl border border-indigo-200 dark:border-indigo-900/30 flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                            <div className="h-6 bg-slate-50 dark:bg-slate-900 border-b border-indigo-100 dark:border-slate-800 flex items-center px-3 gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                                <div className="ml-2 w-1/2 h-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700"></div>
                            </div>
                            <div className="flex-1 flex">
                                <div className="w-1/4 h-full border-r border-indigo-50 dark:border-slate-800 p-2 flex flex-col gap-2">
                                    <div className="w-full h-2 bg-indigo-100 dark:bg-indigo-900/40 rounded"></div>
                                    <div className="w-3/4 h-2 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                </div>
                                <div className="flex-1 p-3 flex flex-col gap-3">
                                     <div className="w-full h-16 bg-indigo-50 dark:bg-slate-800/50 rounded-md border border-indigo-100 dark:border-slate-800"></div>
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
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{projectsData['syntax'].title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                            {projectsData['syntax'].purpose}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                            <button onClick={() => setSelectedProject(projectsData['syntax'])} className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-light transition-colors">
                                View Details <i className="ph-bold ph-arrow-right"></i>
                            </button>
                            <a href="https://syntax-eosin.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand dark:text-slate-400 dark:hover:text-brand transition-colors">
                                Live Preview <i className="ph-bold ph-arrow-square-out"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 6. VitalSync (App Download) */}
                <div className="reveal glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                    <div className="h-52 bg-rose-50 dark:bg-slate-900 relative flex items-center justify-center overflow-hidden p-6">
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                             <div className="w-64 h-64 rounded-full border-4 border-rose-500 animate-ping" style={{animationDuration: '3s'}}></div>
                        </div>
                        <div className="relative z-10 w-full max-w-[180px] bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-rose-100 dark:border-rose-900/30 transform group-hover:scale-105 transition-transform duration-500 flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500">
                                <i className="ph-fill ph-check-circle text-2xl"></i>
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <div className="flex items-center gap-2">
                                     <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                                     <div className="w-full h-1 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                                </div>
                                <div className="flex items-center gap-2">
                                     <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                                     <div className="w-3/4 h-1 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                                </div>
                                <div className="flex items-center gap-2">
                                     <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                                     <div className="w-1/2 h-1 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex gap-2 mb-4">
                            <span className="px-2 py-1 text-xs font-bold bg-rose-500/10 text-rose-500 rounded">Flutter</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{projectsData['vitalsync'].title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                            {projectsData['vitalsync'].purpose}
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between">
                            <button onClick={() => setSelectedProject(projectsData['vitalsync'])} className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-light transition-colors">
                                View Details <i className="ph-bold ph-arrow-right"></i>
                            </button>
                            
                            {/* DOWNLOAD BUTTON for VitalSync */}
                            <a 
                                href="https://drive.google.com/file/d/1ik1JDT0GhMMYm8goQnOKBop2rTv4YvAb/view?usp=drive_link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-500 transition-colors"
                            >
                                Download App <i className="ph-bold ph-download-simple"></i>
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