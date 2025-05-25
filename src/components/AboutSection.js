import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection delay={0.1}>
          <div className="flex items-center mb-8">
            <div className="w-[100px] h-[1px] bg-gray-300 mr-[10px]"></div>
            <h2 className="text-sm font-medium">SOBRE NÓS</h2>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <div className="mb-12 max-w-full">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-8 leading-tight">
              <span className="text-gray-500">SOMOS UM COLETIVO DE </span>
              <span className="text-black font-bold">ARQUITETOS, DESIGNER, ENGENHEIROS E PLANEJADORES </span>
              <span className="text-gray-500">TRABALHANDO JUNTOS PARA CONSTRUIR </span>
              <span className="text-black font-bold">UM FUTURO MELHOR</span>
            </h3>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <AnimatedSection delay={0.4}>
            <div className="text-center md:text-left">
              <motion.h3 
                className="text-3xl md:text-5xl font-bold mb-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                13+
              </motion.h3>
              <p className="text-sm text-gray-500">Anos de Experiência</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.5}>
            <div className="text-center md:text-left">
              <motion.h3 
                className="text-3xl md:text-5xl font-bold mb-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                1305
              </motion.h3>
              <p className="text-sm text-gray-500">Projetos Realizados</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6}>
            <div className="text-center md:text-left">
              <motion.h3 
                className="text-3xl md:text-5xl font-bold mb-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                90%
              </motion.h3>
              <p className="text-sm text-gray-500">Clientes Satisfeitos</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.7}>
            <div className="text-center md:text-left">
              <motion.h3 
                className="text-3xl md:text-5xl font-bold mb-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                86
              </motion.h3>
              <p className="text-sm text-gray-500">Prêmios</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 