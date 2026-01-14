import React from 'react';

const skillsData = [
    [
        { name: ".NET Core", icon: "ph-windows-logo", color: "text-purple-500", bg: "bg-purple-500/10" },
        { name: "C#", icon: "ph-code", color: "text-green-500", bg: "bg-green-500/10" },
        { name: "Python", icon: "ph-terminal-window", color: "text-yellow-500", bg: "bg-yellow-500/10" },
        { name: "SQL Server", icon: "ph-database", color: "text-red-500", bg: "bg-red-500/10" },
        { name: "PostgreSQL", icon: "ph-cylinder", color: "text-blue-400", bg: "bg-blue-400/10" },
        { name: "Docker", icon: "ph-cube", color: "text-blue-500", bg: "bg-blue-500/10" },
    ],
    [
        { name: "React.js", icon: "ph-atom", color: "text-cyan-400", bg: "bg-cyan-400/10" },
        { name: "React Native", icon: "ph-device-mobile", color: "text-purple-400", bg: "bg-purple-400/10" },
        { name: "TypeScript", icon: "ph-file-code", color: "text-blue-600", bg: "bg-blue-600/10" },
        { name: "Tailwind", icon: "ph-paint-brush", color: "text-teal-400", bg: "bg-teal-400/10" },
        { name: "Git", icon: "ph-git-branch", color: "text-orange-500", bg: "bg-orange-500/10" },
        { name: "Figma", icon: "ph-pen-nib", color: "text-pink-500", bg: "bg-pink-500/10" },
    ]
];

const SkillTag = ({ name, icon, color, bg }) => (
    <div className={`
        flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full 
        border border-white/10 bg-white/5 backdrop-blur-md
        hover:bg-white/10 hover:border-white/20 hover:scale-105 
        transition-all duration-300 cursor-default group
    `}>
        <div className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center`}>
            <i className={`ph-fill ${icon} ${color} text-lg`}></i>
        </div>
        <span className="text-slate-600 dark:text-slate-300 font-medium whitespace-nowrap group-hover:text-brand transition-colors">
            {name}
        </span>
    </div>
);

const SkillsCanvas = () => {
  return (
    <div className="glass-panel w-full h-[400px] flex flex-col justify-center gap-8 overflow-hidden bg-slate-100 dark:bg-slate-900/50 rounded-xl relative">
        
        <div className="relative flex overflow-hidden mask-gradient">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-100 to-transparent dark:from-[#0b1021] z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-100 to-transparent dark:from-[#0b1021] z-10"></div>

            <div className="flex animate-scroll gap-6 py-2 w-max">
                {[...skillsData[0], ...skillsData[0], ...skillsData[0]].map((skill, idx) => (
                    <SkillTag key={`row1-${idx}`} {...skill} />
                ))}
            </div>
        </div>

        <div className="relative flex overflow-hidden mask-gradient">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-100 to-transparent dark:from-[#0b1021] z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-100 to-transparent dark:from-[#0b1021] z-10"></div>

            <div className="flex animate-scroll-reverse gap-6 py-2 w-max">
                 {[...skillsData[1], ...skillsData[1], ...skillsData[1]].map((skill, idx) => (
                    <SkillTag key={`row2-${idx}`} {...skill} />
                ))}
            </div>
        </div>

    </div>
  );
};

export default SkillsCanvas;