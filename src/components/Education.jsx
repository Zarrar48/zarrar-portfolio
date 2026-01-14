const Education = () => {
  return (
    <section id="education" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
            <h2 className="reveal font-display text-3xl md:text-4xl font-bold mb-12 text-center">Education & Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="reveal glass-card p-6 rounded-2xl border-t-4 border-t-brand">
                    <div className="text-xs text-brand font-bold uppercase mb-2">2021 - 2025</div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">BS Computer Science</h3>
                    <p className="text-sm text-slate-500 mb-4">NUST, Islamabad</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Comprehensive study of algorithms, software engineering, and system architecture.</p>
                </div>

                <div className="reveal glass-card p-6 rounded-2xl border-t-4 border-t-purple-500">
                    <div className="text-xs text-purple-500 font-bold uppercase mb-2">Jan 2023 - Mar 2024</div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Web Development</h3>
                    <p className="text-sm text-slate-500 mb-4">BUH Tech, Sargodha</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Intensive bootcamp focused on modern web technologies and practical project building.</p>
                </div>

                <div className="reveal glass-card p-6 rounded-2xl border-t-4 border-t-green-500">
                    <div className="text-xs text-green-500 font-bold uppercase mb-2">Certification</div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Microsoft Office Specialist</h3>
                    <p className="text-sm text-slate-500 mb-4">Official Microsoft Cert</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Validated expertise in Microsoft Office suite and productivity tools.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Education;