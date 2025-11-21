import React, { useState, useEffect } from 'react';
import { EVENT_DETAILS } from '../constants';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(EVENT_DETAILS.cfsDeadline) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-8">
      {(Object.entries(timeLeft) as [string, number][]).map(([interval, value]) => (
        <div key={interval} className="flex flex-col items-center">
          <div className="relative">
             {/* Glassmorphism Card */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-tech-blue font-mono">
                  {value < 10 ? `0${value}` : value}
                </span>
            </div>
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-tech-gold"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-tech-gold"></div>
          </div>
          <span className="mt-2 text-xs uppercase tracking-widest text-slate-400">{interval}</span>
        </div>
      ))}
    </div>
  );
};