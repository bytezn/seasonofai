import React, { useMemo } from 'react';

export const TechSnowflake: React.FC = () => {
  // Generate nodes for the "circuit snowflake"
  const nodes = useMemo(() => {
    const items = [];
    const branches = 6;
    const layers = 5;

    for (let i = 0; i < branches; i++) {
      const angle = (i * 60) * (Math.PI / 180);
      for (let j = 1; j <= layers; j++) {
        const distance = j * 40;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        items.push({ x, y, r: j === layers ? 4 : 2, layer: j, branch: i });
      }
    }
    return items;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-30">
      <svg width="800" height="800" viewBox="-300 -300 600 600" className="animate-spin-slow">
        <defs>
          <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connecting Lines (Circuitry) */}
        {nodes.map((node, idx) => (
           <React.Fragment key={`line-${idx}`}>
             {/* Connect to center */}
             {node.layer === 1 && (
               <line x1={0} y1={0} x2={node.x} y2={node.y} stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1" />
             )}
             {/* Connect outwards */}
             {nodes.find(n => n.branch === node.branch && n.layer === node.layer + 1) && (
                <line 
                  x1={node.x} 
                  y1={node.y} 
                  x2={nodes.find(n => n.branch === node.branch && n.layer === node.layer + 1)!.x} 
                  y2={nodes.find(n => n.branch === node.branch && n.layer === node.layer + 1)!.y} 
                  stroke="rgba(0, 240, 255, 0.15)" 
                  strokeWidth="1" 
                />
             )}
             {/* Connect sideways (snowflake structure) */}
             {node.layer > 1 && (
               <>
                 <line 
                    x1={node.x} 
                    y1={node.y} 
                    x2={node.x * 0.8 + Math.cos(((node.branch * 60) + 30) * Math.PI/180) * 30} 
                    y2={node.y * 0.8 + Math.sin(((node.branch * 60) + 30) * Math.PI/180) * 30} 
                    stroke="rgba(255, 215, 0, 0.1)" 
                    strokeWidth="1" 
                 />
                 <line 
                    x1={node.x} 
                    y1={node.y} 
                    x2={node.x * 0.8 + Math.cos(((node.branch * 60) - 30) * Math.PI/180) * 30} 
                    y2={node.y * 0.8 + Math.sin(((node.branch * 60) - 30) * Math.PI/180) * 30} 
                    stroke="rgba(255, 215, 0, 0.1)" 
                    strokeWidth="1" 
                 />
               </>
             )}
           </React.Fragment>
        ))}

        {/* Nodes */}
        {nodes.map((node, idx) => (
          <circle 
            key={`node-${idx}`} 
            cx={node.x} 
            cy={node.y} 
            r={node.r} 
            fill={node.layer % 2 === 0 ? "#FFD700" : "#00F0FF"} 
            className="animate-pulse"
            style={{ animationDelay: `${idx * 0.05}s` }}
          />
        ))}
        
        {/* Central Core */}
        <circle cx="0" cy="0" r="15" fill="url(#glow)" className="animate-pulse-glow" />
        <circle cx="0" cy="0" r="40" stroke="#00F0FF" strokeWidth="0.5" fill="none" strokeDasharray="5,5" />
        <circle cx="0" cy="0" r="60" stroke="#FFD700" strokeWidth="0.2" fill="none" />
      </svg>
    </div>
  );
};