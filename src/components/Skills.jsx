import React from 'react';
import SkillsCanvas from './SkillsCanvas';

const mobileSkills = [
    { name: ".NET Core", icon: "ph-windows-logo", color: "text-purple-500" },
    { name: "C#", icon: "ph-code", color: "text-green-500" },
    { name: "React", icon: "ph-atom", color: "text-cyan-400" },
    { name: "TypeScript", icon: "ph-file-code", color: "text-blue-600" },
    { name: "SQL", icon: "ph-database", color: "text-red-500" },
    { name: "Docker", icon: "ph-cube", color: "text-blue-500" },
    { name: "Python", icon: "ph-terminal-window", color: "text-yellow-500" },
    { name: "Tailwind", icon: "ph-paint-brush", color: "text-teal-400" },
    { name: "Git", icon: "ph-git-branch", color: "text-orange-500" },
    { name: "Flutter", icon: "ph-paper-plane-tilt", color: "text-cyan-500"}
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                
                {/* --- Left Side: Text Content --- */}
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

                {/* --- Right Side: Skills Display --- */}
                <div className="lg:w-2/3 w-full reveal delay-200">
                    
                    <div className="hidden md:block">
                        <SkillsCanvas />
                    </div>
                    <div className="md:hidden mt-8">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Core Technologies</h3>
                        <div className="flex flex-wrap gap-3">
                            {mobileSkills.map((skill, index) => (
                                <div key={index} className="glass-card px-4 py-2 rounded-full flex items-center gap-2 border border-slate-200 dark:border-white/10">
                                    <i className={`ph-fill ${skill.icon} ${skill.color}`}></i>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
  );
};

export default Skills;