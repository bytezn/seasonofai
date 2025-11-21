import React from 'react';
import { Calendar, MapPin, Mic2, ExternalLink, BrainCircuit } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';
import { TechSnowflake } from './TechSnowflake';
import { CountdownTimer } from './CountdownTimer';
import { ParticleBackground } from './ParticleBackground';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-deep-space text-white px-4 py-20">
      {/* Background Layers */}
      <ParticleBackground />
      <TechSnowflake />
      
      {/* Gradient Overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-transparent to-deep-space pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-deep-space/50 to-deep-space pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl w-full text-center space-y-8">
        
        {/* Header Pills */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-tech-blue text-sm font-medium tracking-wide">
            <Calendar className="w-4 h-4" />
            <span>{EVENT_DETAILS.date}</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-tech-gold text-sm font-medium tracking-wide">
            <MapPin className="w-4 h-4" />
            <span>{EVENT_DETAILS.location}</span>
          </div>
        </div>

        {/* Main Title Block */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-xl md:text-2xl font-light text-slate-300 tracking-[0.2em] uppercase">
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

        {/* Countdown Section */}
        <div className="py-4">
            <p className="text-sm uppercase tracking-widest text-christmas-red font-bold mb-2">Call for Speakers Closes In</p>
            <CountdownTimer />
        </div>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
          <a 
            href={EVENT_DETAILS.cfsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-tech-blue to-blue-600 text-black font-bold text-lg rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
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
            className="group px-8 py-4 bg-transparent border border-white/20 hover:border-tech-gold text-white font-semibold text-lg rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-3"
          >
            <span>View Event Details</span>
          </a>
        </div>
        
        <p className="text-slate-500 text-sm max-w-lg mx-auto pt-4">
            Deadline: November 30, 2025. Join us for the ultimate convergence of Holiday Cheer and Artificial Intelligence.
        </p>

      </div>
    </section>
  );
};