// Lightweight CSS-based abstract background - no WebGL for performance
const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Main gradient orb */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'pulse-slow 8s ease-in-out infinite',
        }}
      />
      
      {/* Secondary accent orb */}
      <div 
        className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)',
          filter: 'blur(40px)',
          animation: 'float 12s ease-in-out infinite',
        }}
      />
      
      {/* Tertiary orb */}
      <div 
        className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 60%)',
          filter: 'blur(50px)',
          animation: 'float 15s ease-in-out infinite reverse',
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.15; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
      `}</style>
    </div>
  );
};

export default Scene3D;
