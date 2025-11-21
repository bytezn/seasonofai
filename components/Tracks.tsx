import React from 'react';
import { Terminal, Sparkles, Gift } from 'lucide-react';

const TrackCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-tech-blue/40 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center text-center hover:-translate-y-1 shadow-lg hover:shadow-tech-blue/10">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-deep-space to-slate-900 border border-white/10 flex items-center justify-center mb-6 text-tech-gold group-hover:text-tech-blue group-hover:scale-110 transition-all shadow-[0_0_25px_rgba(0,0,0,0.5)]">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 text-base leading-relaxed">{desc}</p>
    </div>
);

export const Tracks: React.FC = () => {
    return (
        <section id="cfs" className="bg-deep-space py-24 px-4 relative border-t border-white/5 overflow-hidden">
             {/* Decorative background elements */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-tech-blue/5 blur-[100px] pointer-events-none"></div>

             <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        What We're Looking For
                    </h2>
                    <p className="text-slate-300 max-w-3xl mx-auto text-xl font-light leading-relaxed">
                        We've simplified our tracks. We want a blend of technical precision and community spirit. 
                        Whether it's the strict <span className="text-tech-blue font-medium">Model Context Protocol</span> or 
                        broad <span className="text-tech-gold font-medium">Data & AI topics</span> that inspire.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    <TrackCard 
                        icon={<Terminal className="w-8 h-8" />}
                        title="Model Context Protocol"
                        desc="The strict technical side. Deep dives into the protocol, standardized interfaces, connecting AI models to data systems, and agentic workflows."
                    />
                    <TrackCard 
                        icon={<Sparkles className="w-8 h-8" />}
                        title="Festive Data & AI"
                        desc="General Data, AI, or Software Development topics. This is an open track for all technical sessions, demos, and insights."
                    />
                     <TrackCard 
                        icon={<Gift className="w-8 h-8" />}
                        title="Merry Christmas People"
                        desc="The community spirit. Soft skills, creative coding, fun side-projects, or inspiring stories that celebrate the people behind the code."
                    />
                </div>
             </div>
        </section>
    );
};