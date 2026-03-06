import { useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import MagneticButton from './MagneticButton';

const line1 = ['Energía', 'que', 'transforma,'];
const line2 = ['instalaciones', 'que', 'perduran'];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(16,185,129,0.07), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d1117] pt-20 pb-32"
    >
      {/* Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: spotlight }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

        <motion.div
          animate={{ opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-emerald-600/25 rounded-full blur-[80px]"
          style={{ willChange: 'opacity' }}
        />
        <motion.div
          animate={{ opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-64 w-[800px] h-[800px] bg-amber-500/15 rounded-full blur-[80px]"
          style={{ willChange: 'opacity' }}
        />

        {/* Grid shimmer */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsLCAyNTUsIDAuMDUpIi8+PC9zdmc+')] opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        {/* Glowing line */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-40" preserveAspectRatio="none">
          <motion.path
            d="M -100,200 C 300,200 400,600 1000,600 C 1400,600 1600,200 2000,200"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0)" />
              <stop offset="50%" stopColor="rgba(16, 185, 129, 1)" />
              <stop offset="100%" stopColor="rgba(245, 158, 11, 0)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Circuit — bottom right */}
        <svg className="absolute bottom-0 right-0 w-80 h-80 opacity-[0.12] pointer-events-none" viewBox="0 0 320 320">
          <motion.path d="M 320,320 L 320,220 L 260,220 L 260,160 L 200,160 L 200,110 L 150,110" fill="none" stroke="#10b981" strokeWidth="1.5"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut", delay: 1 }} />
          <motion.path d="M 320,260 L 290,260 L 290,190 L 230,190 L 230,130 L 175,130" fill="none" stroke="#f59e0b" strokeWidth="1"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, ease: "easeInOut", delay: 1.4 }} />
          <motion.path d="M 320,200 L 270,200 L 270,150 L 220,150 L 220,100" fill="none" stroke="#10b981" strokeWidth="1"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: 1.8 }} />
          <motion.circle cx="260" cy="220" r="3.5" fill="#10b981" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2 }} />
          <motion.circle cx="200" cy="160" r="3.5" fill="#10b981" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.4 }} />
          <motion.circle cx="230" cy="190" r="2.5" fill="#f59e0b" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.2 }} />
          <motion.circle cx="270" cy="150" r="2.5" fill="#10b981" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.7 }} />
        </svg>

        {/* Circuit — top left */}
        <svg className="absolute top-20 left-0 w-64 h-64 opacity-[0.08] pointer-events-none" viewBox="0 0 260 260">
          <motion.path d="M 0,130 L 70,130 L 70,80 L 130,80 L 130,40 L 180,40" fill="none" stroke="#10b981" strokeWidth="1.5"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, ease: "easeInOut", delay: 0.6 }} />
          <motion.path d="M 0,170 L 50,170 L 50,110 L 100,110 L 100,65" fill="none" stroke="#10b981" strokeWidth="1"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: 0.9 }} />
          <motion.circle cx="70" cy="130" r="3" fill="#10b981" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} />
          <motion.circle cx="130" cy="80" r="3" fill="#10b981" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }} />
          <motion.circle cx="50" cy="170" r="2.5" fill="#10b981" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide mb-8"
        >
          Instaladores Certificados · Región de Murcia
        </motion.span>

        {/* Headline — word by word */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-8 leading-[1.1]">
          <span className="block">
            {line1.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.4 + i * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-400 animated-gradient">
            {line2.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.72 + i * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Un equipo con más de 15 años de experiencia en el sector, conectando hogares y empresas de Murcia con soluciones eléctricas y tecnológicas seguras, eficientes y certificadas.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <MagneticButton
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Presupuesto Gratis
          </MagneticButton>
          <MagneticButton
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-colors"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Servicios
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-500 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-[0.2em] font-medium">Descubrir</span>
        <ChevronDown size={18} className="opacity-70" />
      </motion.div>
    </section>
  );
}
