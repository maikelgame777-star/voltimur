export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-white/5 py-12 text-center text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-display font-bold text-xl text-white tracking-tight">
          Voltimur<span className="text-blue-500">.</span>
        </div>
        <p>© {new Date().getFullYear()} Voltimur. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
