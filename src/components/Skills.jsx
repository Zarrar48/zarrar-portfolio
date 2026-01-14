import SkillsCanvas from './SkillsCanvas';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                
                <div className="lg:w-1/3 reveal">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Technical Arsenal</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        I leverage a diverse stack of modern technologies to build robust, scalable applications. From backend logic in C# to dynamic frontends in React.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-brand transition-colors cursor-default">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400"><i className="ph-bold ph-code"></i></div>
                            <div>
                                <div className="font-bold text-slate-800 dark:text-white">Frontend</div>
                                <div className="text-xs text-slate-500">React.js, React Native, TypeScript, Tailwind, HTML/CSS</div>
                            </div>
                        </div>
                        <div className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-purple-500 transition-colors cursor-default">
                            <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400"><i className="ph-bold ph-database"></i></div>
                            <div>
                                <div className="font-bold text-slate-800 dark:text-white">Backend</div>
                                <div className="text-xs text-slate-500">.NET Core, C#, ASP.NET, Node.js, Python, Java</div>
                            </div>
                        </div>
                        <div className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-green-500 transition-colors cursor-default">
                            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400"><i className="ph-bold ph-hard-drives"></i></div>
                            <div>
                                <div className="font-bold text-slate-800 dark:text-white">Database & Tools</div>
                                <div className="text-xs text-slate-500">SQL Server, Oracle, MySQL, Git, Jira, Docker</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-2/3 w-full reveal delay-200">
                        <SkillsCanvas />
                </div>

            </div>
        </div>
    </section>
  );
};

export default Skills;