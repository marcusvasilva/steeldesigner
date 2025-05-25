import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center mb-6">
              <div className="w-[100px] h-[1px] bg-gray-300 mr-[10px]"></div>
              <p className="text-sm font-medium text-gray-500 uppercase">
                DESDE 2010
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none">
              STEEL DESIGNER
            </h1>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Projetos residenciais e comerciais com soluções modernas em Steel Frame, Fachadas, Drywall, Gesso e Acabamentos.
            </p>
            <div className="mb-8">
              <Link href="/contato" className="inline-block px-8 py-4 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors">
                Solicite um orçamento
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-[400px] md:h-[500px] mt-10">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
          alt="Projeto Steel Designer" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero; 