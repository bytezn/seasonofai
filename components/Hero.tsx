import React from 'react';
import { Calendar, MapPin, Mic2, ExternalLink, BrainCircuit, AlertCircle } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';
import { TechSnowflake } from './TechSnowflake';
import { CountdownTimer } from './CountdownTimer';
import { ParticleBackground } from './ParticleBackground';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-deep-space text-white px-4 py-12 md:py-20">
      {/* Background Layers */}
      <ParticleBackground />
      <TechSnowflake />
      
      {/* Gradient Overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-transparent to-deep-space pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-deep-space/50 to-deep-space pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl w-full text-center space-y-8 flex flex-col items-center">
        
        {/* Header Pills */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tech-blue/10 border border-tech-blue/30 backdrop-blur-sm text-tech-blue text-sm font-bold tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <Calendar className="w-4 h-4" />
            <span>Event: {EVENT_DETAILS.date}</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-tech-gold text-sm font-medium tracking-wide">
            <MapPin className="w-4 h-4" />
            <span>{EVENT_DETAILS.location}</span>
          </div>
        </div>

        {/* Main Title Block */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-sm md:text-lg font-light text-slate-300 tracking-[0.3em] uppercase">
            Data & AI Community Day Durban
          </h2>
          
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-[0_0_35px_rgba(0,240,255,0.3)]">
              SEASON OF AI
            </h1>
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-8">
                <BrainCircuit className="w-8 h-8 md:w-12 md:h-12 text-tech-gold animate-pulse" />
            </div>
          </div>

          <div className="flex flex-col items-center">
             <div className="relative">
               <div className="absolute -inset-1 bg-gradient-to-r from-tech-blue via-tech-gold to-christmas-red rounded-lg blur opacity-30"></div>
               <h1 className="relative text-4xl md:text-6xl font-bold text-white px-4 py-2">
                  <span className="text-tech-blue">M</span>
                  <span className="text-white">C</span>
                  <span className="text-tech-gold">P</span>
               </h1>
             </div>
             <p className="text-lg md:text-xl text-slate-300 mt-2 italic">
               (Merry Christmas People)
             </p>
          </div>
        </div>

        {/* Countdown Section - Highlight Deadline */}
        <div className="w-full max-w-3xl mx-auto mt-6 p-6 md:p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm shadow-2xl">
            <div className="flex flex-col items-center mb-6">
                <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-christmas-red animate-pulse" />
                    <span className="text-christmas-red font-bold tracking-widest uppercase text-sm md:text-base">Speaker Submission Deadline</span>
                </div>
                <span className="text-3xl md:text-5xl font-mono font-bold text-white drop-shadow-[0_0_15px_rgba(212,36,38,0.6)]">
                    November 30
                </span>
            </div>
            <CountdownTimer />
            <p className="text-slate-400 text-xs uppercase tracking-widest mt-6">Time remaining to submit your session</p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8 w-full">
          <a 
            href={EVENT_DETAILS.cfsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto group relative px-8 py-4 bg-gradient-to-r from-tech-blue to-blue-600 text-black font-bold text-lg rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
            <Mic2 className="w-6 h-6" />
            <span>Submit Your Session</span>
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>

          <a 
            href={EVENT_DETAILS.eventLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto group px-8 py-4 bg-transparent border border-white/20 hover:border-tech-gold text-white font-semibold text-lg rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Calendar className="w-5 h-5" />
            <span>Event Details (Dec 13)</span>
          </a>
        </div>
        
      </div>
    </section>
  );
};