import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos M.",
    role: "Director de Operaciones",
    text: "El equipo de Voltimur hizo un trabajo excelente instalando los paneles solares en nuestra empresa. Muy profesionales y limpios en la ejecución.",
    rating: 5.0
  },
  {
    name: "Laura G.",
    role: "Gerente de Oficina",
    text: "Rápidos y eficientes. Nos solucionaron un problema grave en la red de datos de la oficina en tiempo récord. Totalmente recomendables.",
    rating: 4.9
  },
  {
    name: "Pedro S.",
    role: "Cliente Residencial",
    text: "Instalaron el cargador para mi coche eléctrico en casa. Todo perfecto, legalizado sin complicaciones y funcionando a la perfección.",
    rating: 5.0
  },
  {
    name: "Ana R.",
    role: "Propietaria",
    text: "La domótica que instalaron en mi casa ha cambiado por completo nuestra forma de vivir. Controlamos todo desde el móvil de forma sencilla.",
    rating: 4.8
  },
  {
    name: "Miguel T.",
    role: "Administrador de Fincas",
    text: "Llevan el mantenimiento eléctrico de varias de nuestras comunidades y la respuesta ante incidencias es siempre inmediata.",
    rating: 4.9
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 mb-6">
          Nuestros clientes confían en nosotros
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light">
          Nuestra misión es impulsar el progreso y mejorar la vida de nuestros clientes mediante soluciones superiores que superan las expectativas.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group py-4">
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="w-[380px] flex-shrink-0 bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-1 text-emerald-500 bg-emerald-50 px-2.5 py-1 rounded-full">
                  <span className="font-semibold text-emerald-700 text-sm mr-1">{t.rating}</span>
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">"{t.text}"</p>
              <div className="mt-auto">
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500 mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient masks for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
