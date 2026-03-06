import { motion } from 'motion/react';
import { Zap, Wifi, Shield, Sun, Wrench, Home, BatteryCharging } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: "Instalaciones Eléctricas",
    description: "Diseño e instalación de sistemas eléctricos residenciales, comerciales e industriales con certificación oficial."
  },
  {
    icon: Wifi,
    title: "Telecomunicaciones",
    description: "Redes de datos, fibra óptica, sistemas telefónicos y soluciones de conectividad empresarial."
  },
  {
    icon: Shield,
    title: "Sistemas de Seguridad",
    description: "CCTV, alarmas y control de accesos para proteger tu hogar o negocio."
  },
  {
    icon: Sun,
    title: "Energía Solar",
    description: "Instalación de paneles fotovoltaicos y sistemas de energía renovable."
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description: "Mantenimiento preventivo y correctivo para instalaciones existentes."
  },
  {
    icon: Home,
    title: "Domótica",
    description: "Automatización de edificios y hogares inteligentes."
  },
  {
    icon: BatteryCharging,
    title: "Puntos de Recarga",
    description: "Instalación y legalización de cargadores para vehículos eléctricos, con conexiones seguras y certificadas."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 md:w-2/3">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-gray-900">
            Soluciones integrales para cada necesidad
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            Ofrecemos un abanico completo de servicios tecnológicos y eléctricos, diseñados para optimizar el rendimiento y la seguridad de tus espacios.
          </p>
        </div>

        {/* Baseten style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200 border-dashed">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, backgroundColor: "#f8fafc" }}
              className="p-10 border-r border-b border-gray-200 border-dashed group transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base mt-auto">
                {service.description}
              </p>
            </motion.div>
          ))}
          {/* Empty cells to complete the grid visually */}
          <div className="hidden lg:block p-10 border-r border-b border-gray-200 border-dashed bg-gray-50/30"></div>
          <div className="hidden lg:block p-10 border-r border-b border-gray-200 border-dashed bg-gray-50/30"></div>
        </div>
      </div>
    </section>
  );
}
