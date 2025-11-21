import React from 'react';
import { Hero } from './components/Hero';
import { Tracks } from './components/Tracks';
import { Linkedin } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="bg-deep-space min-h-screen font-sans selection:bg-tech-blue selection:text-deep-space">
      <Hero />
      <Tracks />
      
      <footer className="py-8 bg-black/40 border-t border-white/5 text-center px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm">
                © 2025 Data & AI Community Day Durban.
            </div>
            <div className="flex items-center gap-4">
                 <span className="text-slate-400 text-sm">Connect with us:</span>
                 <a href="https://www.linkedin.com/company/aimldatadurban/" target="_blank" rel="noreferrer" className="text-white hover:text-tech-blue transition-colors">
                    <Linkedin className="w-5 h-5" />
                 </a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;