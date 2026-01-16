import { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
 useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    const navbar = document.querySelector('nav');
    if (navbar) {
        navbar.style.zIndex = 0;
    }
    const assistant = document.getElementById('aiAssitant');
    if (assistant) {
        assistant.style.zIndex = 0;
    }

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
      if (navbar) {
          navbar.style.zIndex = 50;
      }
      if (assistant) {
         assistant.style.zIndex = 100;
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-100  flex items-center justify-center p-4 bg-white/30 dark:bg-black/60  backdrop-blur-sm" onClick={onClose}>
        <div className="glass-panel z-100 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 relative" onClick={e => e.stopPropagation()}>
            <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                <i className="ph ph-x text-xl"></i>
            </button>
            
            <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl ${project.bg} ${project.color} flex items-center justify-center text-3xl`}>
                    <i className={`ph ${project.icon}`}></i>
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-display">{project.title}</h2>
                    <div className="flex gap-2 mt-2">
                         {project.stack.slice(0,3).map(tech => (
                             <span key={tech} className="text-xs font-bold px-2 py-1 rounded bg-slate-200 dark:bg-slate-700">{tech}</span>
                         ))}
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><i className="ph-fill ph-target text-brand"></i> Purpose</h3>
                    <p className="text-slate-900 dark:text-slate-300 leading-relaxed">{project.purpose}</p>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><i className="ph-fill ph-check-circle text-brand"></i> Key Features</h3>
                    <ul className="space-y-2">
                        {project.features.map((feat, index) => (
                            <li key={index} className="flex items-start gap-2 text-slate-900 dark:text-slate-300 text-sm">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0"></span>
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><i className="ph-fill ph-code-block text-brand"></i> Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map(tech => (
                            <span key={tech} className="px-3 py-1.5 rounded-lg border border-slate-900 dark:border-slate-100 dark:bg-slate-900 text-sm font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                    {project.title != 'Enterprise ERP System' && (
                        <div className="mt-4 flex gap-2">
                             <a 
                                href={project.code}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-sm hover:opacity-60 transition-opacity"
                            >
                                <i className="ph-fill ph-github-logo text-lg"></i>
                                View Source Code
                            </a>
                            {project.title === 'Automated Trading Bot' && (
                             <a 
                                href="https://discord.gg/3YTwF5Ar" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-sm hover:opacity-60 transition-opacity"
                            >
                                <i className="ph-fill ph-discord-logo text-lg"></i>
                                Visit Discord Channel
                            </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProjectModal;