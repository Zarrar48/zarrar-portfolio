const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
                <div className="w-20 h-1 bg-brand mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="relative timeline-line pl-8 md:pl-12 space-y-12">
                    
                    <div className="reveal relative group">
                        <div className="absolute -left-[43px] md:-left-[59px] top-1 w-6 h-6 rounded-full bg-white dark:bg-dark-bg border-4 border-brand shadow-lg z-10 group-hover:scale-125 transition-transform"></div>
                        <div className="glass-card p-6 md:p-8 rounded-2xl relative">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Full Stack Web Developer</h3>
                                    <div className="text-brand font-medium">Xinfo-Tech, Sargodha</div>
                                </div>
                                <span className="px-3 py-1 bg-brand/10 text-brand text-xs font-bold rounded-full border border-brand/20">Mar 2024 - Dec 2025</span>
                            </div>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed marker:text-brand">
                                <li>Developed and maintained web apps using .NET framework, C#, and ASP.NET.</li>
                                <li>Designed database schemas (SQL Server/Oracle) and optimized queries/stored procedures.</li>
                                <li>Collaborated with UI/UX teams to implement responsive React.js frontends.</li>
                                <li>Integrated RESTful APIs for seamless data retrieval and manipulation.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="reveal relative group">
                        <div className="absolute -left-[43px] md:-left-[59px] top-1 w-6 h-6 rounded-full bg-white dark:bg-dark-bg border-4 border-slate-400 dark:border-slate-600 shadow-lg z-10 group-hover:scale-125 transition-transform"></div>
                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Backend Developer</h3>
                                    <div className="text-slate-500 dark:text-slate-400 font-medium">Freelance, Islamabad</div>
                                </div>
                                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-full">Feb 2022 - May 2024</span>
                            </div>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                <li>Designed and implemented RESTful APIs and optimized database queries.</li>
                                <li>Implemented Redis caching to improve performance under heavy loads.</li>
                                <li>Ensured security via data validation and sanitization.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="reveal relative group">
                        <div className="absolute -left-[43px] md:-left-[59px] top-1 w-6 h-6 rounded-full bg-white dark:bg-dark-bg border-4 border-purple-500 shadow-lg z-10 group-hover:scale-125 transition-transform"></div>
                        <div className="glass-card p-6 md:p-8 rounded-2xl">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">React Native Developer</h3>
                                    <div className="text-purple-600 dark:text-purple-400 font-medium">BUH TECH, Sargodha</div>
                                </div>
                                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold rounded-full">Jan 2024 - Mar 2024</span>
                            </div>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                <li>Built cross-platform apps using React Native and Redux for state management.</li>
                                <li>Implemented React Navigation and Lottie animations for smooth UX.</li>
                                <li>Integrated Stripe SDK for payments and handled Dark Mode support.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Experience;