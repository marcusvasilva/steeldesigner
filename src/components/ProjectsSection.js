import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Residência Vila Nova',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      title: 'Edifício Comercial Paulista',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      title: 'Casa de Praia Guarujá',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 4,
      title: 'Condomínio Reserva Verde',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection delay={0.1}>
          <div className="flex items-center mb-4">
            <div className="w-[100px] h-[1px] bg-gray-300 mr-[10px]"></div>
            <h2 className="text-sm font-medium">PROJETOS</h2>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-12">
              NOSSOS MELHORES TRABALHOS EM DESTAQUE
            </h3>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={0.2 + index * 0.15}>
              <div className="mb-8">
                <motion.a 
                  href={`/projetos/${project.id}`}
                  className="block"
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-64 md:h-80 mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-medium">{project.title}</h4>
                      <p className="text-sm text-gray-500">{project.year}</p>
                    </div>
                    <motion.div 
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.05)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>→</span>
                    </motion.div>
                  </div>
                </motion.a>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.8}>
          <div className="text-center mt-8">
            <a href="/projetos" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
              Ver mais projetos <span className="ml-2">→</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection; 