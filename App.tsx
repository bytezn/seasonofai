import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Tracks } from './components/Tracks';
import { Linkedin } from 'lucide-react';

const App: React.FC = () => {
  const [isRecordMode, setIsRecordMode] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('mode') === 'record') {
      setIsRecordMode(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling during recording
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'h') setShowOverlay(prev => !prev);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // STUDIO / RECORDING MODE
  if (isRecordMode) {
    return (
      <div className="relative bg-deep-space h-screen w-screen overflow-hidden flex items-center justify-center">
        {/* Force Hero to take full available space without scrolling */}
        <div className="w-full h-full">
           <Hero />
        </div>

        {/* Helper Overlay */}
        {showOverlay && (
          <div className="fixed top-4 left-4 z-50 bg-black/80 text-white p-4 rounded-lg text-sm border border-white/20 backdrop-blur max-w-md shadow-2xl animate-fade-in-up">
            <p className="font-bold text-tech-gold mb-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
              Studio Mode Active
            </p>
            <ul className="space-y-2 text-slate-300 list-disc pl-4 text-xs leading-relaxed">
              <li>Resize your browser window to your desired video aspect ratio (e.g., Square for LinkedIn feed, or 16:9).</li>
              <li>Wait for the entrance animations to finish.</li>
              <li>Use your screen recorder (QuickTime, OBS, etc.) to capture 10-15 seconds.</li>
              <li>
                Press <span className="bg-white/20 px-1.5 py-0.5 rounded text-white font-mono border border-white/20">H</span> on your keyboard to hide this box.
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }

  // STANDARD APP VIEW
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