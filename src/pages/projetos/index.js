import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import AnimatedSection from '../../components/AnimatedSection';

const ProjetosPage = () => {
  // Dados de exemplo para projetos
  const projects = [
    {
      id: 1,
      title: 'Residência Vila Nova',
      year: '2023',
      category: 'Residencial',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      title: 'Edifício Comercial Paulista',
      year: '2022',
      category: 'Comercial',
      image: 'https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      title: 'Casa de Praia Guarujá',
      year: '2023',
      category: 'Residencial',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 4,
      title: 'Condomínio Reserva Verde',
      year: '2022',
      category: 'Residencial',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      id: 5,
      title: 'Centro Empresarial Berrini',
      year: '2023',
      category: 'Comercial',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    },
    {
      id: 6,
      title: 'Residência Jardins',
      year: '2022',
      category: 'Residencial',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80',
    },
    {
      id: 7,
      title: 'Hotel Beira Mar',
      year: '2023',
      category: 'Hotelaria',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
    },
    {
      id: 8,
      title: 'Clínica Saúde Total',
      year: '2022',
      category: 'Saúde',
      image: 'https://images.unsplash.com/photo-1629196853993-115ad32bf40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  // Categorias únicas para filtragem
  const categories = ['Todos', ...new Set(projects.map(project => project.category))];

  return (
    <div>
      <Head>
        <title>Projetos | Steel Designer</title>
        <meta name="description" content="Conheça os projetos realizados pela Steel Designer em Steel Frame, Fachadas, Drywall, Gesso e Acabamentos." />
      </Head>

      <Header />
      
      <main>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection delay={0.1}>
              <div className="flex items-center mb-4">
                <div className="w-[100px] h-[1px] bg-gray-300 mr-[10px]"></div>
                <h2 className="text-sm font-medium">NOSSOS PROJETOS</h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  PORTFÓLIO COMPLETO
                </h1>
                <p className="text-gray-600 md:max-w-3xl">
                  Conheça nossa trajetória através de projetos que combinam inovação, qualidade e funcionalidade. 
                  Cada trabalho reflete nosso compromisso com a excelência e atenção aos detalhes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-4 mb-12">
                {categories.map((category, index) => (
                  <button 
                    key={index}
                    className={`px-4 py-2 border ${
                      index === 0 ? 'bg-black text-white' : 'bg-white hover:bg-gray-50'
                    } transition-colors duration-200`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <AnimatedSection key={project.id} delay={0.2 + index * 0.1}>
                  <div className="mb-8">
                    <motion.a 
                      href={`/projetos/${project.id}`}
                      className="block"
                      whileHover={{ scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-64 md:h-72 mb-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-medium">{project.title}</h3>
                          <p className="text-sm text-gray-500">{project.year} • {project.category}</p>
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjetosPage; 