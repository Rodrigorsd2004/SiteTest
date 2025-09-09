"use client";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-blue-600">Meu Portfólio</h1>
        <nav className="space-x-6">
          <a href="#projects" className="hover:text-blue-600 transition">Projetos</a>
          <a href="#services" className="hover:text-blue-600 transition">Serviços</a>
          <a href="#about" className="hover:text-blue-600 transition">Sobre</a>
          <a href="#testimonials" className="hover:text-blue-600 transition">Depoimentos</a>
          <a href="#clients" className="hover:text-blue-600 transition">Clientes</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contato</a>
        </nav>
      </div>
    </header>
  );
}
