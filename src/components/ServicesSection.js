import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const servicesData = [
    { 
      id: 1, 
      name: 'Steel Frame', 
      description: 'Sistema construtivo que utiliza perfis de aço galvanizado para formar a estrutura de paredes, lajes e telhados. Oferece alta resistência, durabilidade e rapidez na execução, além de ser uma solução sustentável e versátil para projetos residenciais e comerciais.',
      image: '/images/steelframe.jpg',
    },
    { 
      id: 2, 
      name: 'Fachadas', 
      description: 'Soluções completas para fachadas com materiais modernos e duráveis. Trabalhamos com revestimentos diversos, incluindo ACM, vidro, cerâmica e sistemas de fachada ventilada, proporcionando estética, proteção e eficiência térmica para sua edificação.',
      image: '/images/fachada.jpeg',
    },
    { 
      id: 3, 
      name: 'Drywall', 
      description: 'Sistema de construção a seco que utiliza chapas de gesso para paredes, forros e revestimentos. Ideal para divisórias internas, oferecendo excelente isolamento acústico, térmico e resistência ao fogo. Permite acabamentos perfeitos e instalação rápida e limpa.',
      image: '/images/drywall.jpg',
    },
    { 
      id: 4, 
      name: 'Gesso', 
      description: 'Trabalhos em gesso para forros, sancas, molduras e elementos decorativos. Oferecemos soluções personalizadas que valorizam os ambientes com acabamentos refinados, permitindo a criação de designs exclusivos e efeitos de iluminação diferenciados.',
      image: '/images/gesso.png',
    },
    { 
      id: 5, 
      name: 'Acabamentos', 
      description: 'Serviços completos de acabamento interno e externo, incluindo pintura, revestimentos cerâmicos, porcelanatos, laminados e demais materiais. Garantimos precisão na execução e qualidade superior para o resultado final do seu projeto.',
      image: '/images/acabamento.jpg',
    },
  ];

  const [activeService, setActiveService] = useState(1); // Começando com Steel Frame ativo (id: 1)
  const [progress, setProgress] = useState(0); // Progresso do timer (0-100%)

  // Adicionar useEffect para criar o timer
  useEffect(() => {
    const totalTime = 10000; // 10 segundos
    const updateInterval = 100; // Atualizar a cada 100ms para animação suave
    let timer;
    let progressTimer;
    
    // Timer para trocar o serviço
    timer = setInterval(() => {
      // Avançar para o próximo serviço ou voltar para o primeiro
      setActiveService(current => {
        const nextId = current >= servicesData.length ? 1 : current + 1;
        return nextId;
      });
      // Resetar o progresso
      setProgress(0);
    }, totalTime);
    
    // Timer para atualizar o progresso
    progressTimer = setInterval(() => {
      setProgress(current => {
        if (current >= 100) return 0;
        return current + (updateInterval / totalTime * 100);
      });
    }, updateInterval);

    // Limpar os timers quando o componente for desmontado
    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [servicesData.length]);

  const handleServiceClick = (id) => {
    setActiveService(id);
    // Resetar o progresso ao clicar manualmente
    setProgress(0);
  };

  const activeServiceData = servicesData.find(service => service.id === activeService);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection delay={0.1}>
          <div className="flex items-center mb-4">
            <div className="w-[100px] h-[1px] bg-gray-300 mr-[10px]"></div>
            <h2 className="text-sm font-medium">NOSSOS SERVIÇOS</h2>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              SOLUÇÕES COMPLETAS EM CONSTRUÇÃO A SECO PARA PROJETOS RESIDENCIAIS E COMERCIAIS
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-6">
                  {activeServiceData.description}
                </p>
              </div>
              
              <motion.div 
                className="relative h-64 md:h-80"
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={activeServiceData.image}
                  alt={`Serviço de ${activeServiceData.name}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {servicesData.map((service, index) => (
              <motion.div 
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className={`p-4 border ${
                  service.id === activeService 
                    ? 'bg-black text-white' 
                    : 'bg-white hover:bg-gray-50'
                } cursor-pointer transition-colors duration-200 relative`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <h4 className="text-sm font-medium mb-6">{service.name}</h4>
                
                {service.id === activeService && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">{String(service.id).padStart(2, '0')}</span>
                      <span className="text-xs">→</span>
                    </div>
                    
                    {/* Timer visual dentro do card ativo */}
                    <div className="absolute bottom-0 left-0 h-1 bg-white" style={{ width: `${progress}%` }}></div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection; 