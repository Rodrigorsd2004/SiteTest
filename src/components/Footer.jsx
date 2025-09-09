"use client";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
        <p className="mb-6">Email: meuemail@exemplo.com | Telefone: (00) 12345-6789</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
          <a href="#" className="hover:text-white transition">Twitter</a>
        </div>
        <p className="text-gray-400">&copy; 2025 Meu Portfólio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
