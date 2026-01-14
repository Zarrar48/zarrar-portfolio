const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-[80px] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -z-10"></div>

                <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-center text-slate-800 dark:text-white">Let's Work Together</h2>
                <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                    I'm currently available for remote full-stack development roles. Let's discuss how I can contribute to your team.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center text-2xl"><i className="ph-fill ph-envelope-simple"></i></div>
                        <div className="overflow-hidden">
                            <div className="text-xs text-slate-500 font-bold uppercase">Email</div>
                            <a href="mailto:zarrar768@gmail.com" className="text-slate-800 dark:text-white font-medium hover:text-brand truncate block">zarrar768@gmail.com</a>
                        </div>
                    </div>
                    <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center text-2xl"><i className="ph-fill ph-phone"></i></div>
                        <div>
                            <div className="text-xs text-slate-500 font-bold uppercase">Phone</div>
                            <a href="tel:+923250920503" className="text-slate-800 dark:text-white font-medium hover:text-brand">+92 325 092 0503</a>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <div className="inline-block glass-card px-6 py-3 rounded-full text-slate-600 dark:text-slate-400 text-sm">
                        <i className="ph-fill ph-map-pin text-brand mr-2"></i> Sargodha, Punjab 40100
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;