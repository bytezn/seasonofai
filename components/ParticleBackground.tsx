import React from 'react';

export const ParticleBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bokeh / Particles */}
        {[...Array(15)].map((_, i) => (
            <div
                key={i}
                className="absolute rounded-full bg-tech-blue/20 blur-xl animate-float"
                style={{
                    width: `${Math.random() * 100 + 50}px`,
                    height: `${Math.random() * 100 + 50}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    opacity: Math.random() * 0.3
                }}
            />
        ))}
         {[...Array(10)].map((_, i) => (
            <div
                key={`gold-${i}`}
                className="absolute rounded-full bg-tech-gold/10 blur-2xl animate-float"
                style={{
                    width: `${Math.random() * 80 + 20}px`,
                    height: `${Math.random() * 80 + 20}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 7}s`,
                    opacity: Math.random() * 0.2
                }}
            />
        ))}
    </div>
  )
}