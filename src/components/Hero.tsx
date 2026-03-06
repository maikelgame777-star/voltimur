import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d1117] pt-20 pb-32">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        
        {/* Soft animated gradient orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-64 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px]"
        />
        
        {/* Grid shimmer */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsLCAyNTUsIDAuMDUpIi8+PC9zdmc+')] opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        {/* Glowing Line (GitHub style) */}
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
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 1)" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wide mb-8">
            Expertos en Instalaciones
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Conectamos tu mundo con <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
              energía y tecnología
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Soluciones eléctricas y de telecomunicaciones de alta calidad para hogares y empresas en Murcia. Seguridad, innovación y eficiencia garantizadas.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors shadow-[0_0_20px_rgba(37,99,228,0.4)] hover:shadow-[0_0_30px_rgba(37,99,228,0.6)]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Presupuesto
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-colors"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nuestros Servicios
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
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
