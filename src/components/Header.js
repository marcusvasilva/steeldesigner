import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-white py-4">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            STEEL DESIGNER
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-gray-600">
            Home
          </Link>
          <Link href="/projetos" className="text-sm font-medium hover:text-gray-600">
            Projetos
          </Link>
          <Link href="/servicos" className="text-sm font-medium hover:text-gray-600">
            Serviços
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-gray-600">
            Blog
          </Link>
          <Link href="/sobre" className="text-sm font-medium hover:text-gray-600">
            Sobre Nós
          </Link>
          <Link href="/contato" className="text-sm font-medium hover:text-gray-600">
            Contato
          </Link>
        </nav>
        
        <div className="hidden md:block">
          <Link href="/contato" className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800">
            Solicite um orçamento
          </Link>
        </div>
        
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 