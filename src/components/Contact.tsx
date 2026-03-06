import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0d1117] text-white relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="text-blue-500 font-semibold tracking-[0.2em] uppercase text-sm mb-6">Contacto</div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
              ¿Tienes un <span className="text-blue-500">proyecto?</span>
            </h2>
            <p className="text-gray-400 text-xl mb-16 max-w-md font-light leading-relaxed">
              Cuéntanos qué necesitas y te enviaremos un presupuesto personalizado sin compromiso.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-125 group-hover:bg-blue-500/20 group-hover:text-blue-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">Teléfono</div>
                <div className="font-medium text-lg text-gray-200">660 144 754</div>
              </div>
              
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-125 group-hover:bg-blue-500/20 group-hover:text-blue-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">Email</div>
                <div className="font-medium text-lg text-gray-200">voltimur@outlook.es</div>
              </div>

              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-125 group-hover:bg-blue-500/20 group-hover:text-blue-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">Ubicación</div>
                <div className="font-medium text-lg text-gray-200">Murcia, España</div>
              </div>

              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-125 group-hover:bg-blue-500/20 group-hover:text-blue-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">Horario</div>
                <div className="font-medium text-lg text-gray-200">Lun-Vie: 8:00 - 18:00</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-[#161b22] border border-white/10 rounded-3xl p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle inner glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre" 
                    className="w-full bg-[#0d1117] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Teléfono</label>
                  <input 
                    type="tel" 
                    placeholder="+34 600 000 000" 
                    className="w-full bg-[#0d1117] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="w-full bg-[#0d1117] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Servicio</label>
                <div className="relative">
                  <select className="w-full bg-[#0d1117] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                    <option>Instalación Eléctrica</option>
                    <option>Telecomunicaciones</option>
                    <option>Sistemas de Seguridad</option>
                    <option>Energía Solar</option>
                    <option>Mantenimiento</option>
                    <option>Domótica</option>
                    <option>Puntos de Recarga</option>
                    <option>Otro</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Mensaje</label>
                <textarea 
                  rows={4}
                  placeholder="Describe tu proyecto..." 
                  className="w-full bg-[#0d1117] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-[#2b90ff] hover:bg-[#1a7bed] text-white rounded-xl font-medium text-lg transition-colors shadow-[0_0_20px_rgba(43,144,255,0.3)] hover:shadow-[0_0_30px_rgba(43,144,255,0.5)]"
              >
                Enviar Solicitud
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
