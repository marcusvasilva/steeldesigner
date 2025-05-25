import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import AnimatedSection from '../../components/AnimatedSection';

// Dados de exemplo para projetos
const projectsData = [
  {
    id: 1,
    title: 'Residência Vila Nova',
    year: '2023',
    category: 'Residencial',
    client: 'Família Silva',
    location: 'São Paulo, SP',
    area: '280m²',
    services: ['Steel Frame', 'Drywall', 'Gesso', 'Acabamentos'],
    description: 'Projeto residencial completo em Steel Frame, com foco em sustentabilidade e eficiência energética. A construção utilizou técnicas modernas que garantiram rapidez na execução e excelente isolamento térmico e acústico.',
    challenge: 'O principal desafio foi adaptar o projeto original, concebido para construção convencional, para o sistema Steel Frame, mantendo todas as características arquitetônicas desejadas pelo cliente.',
    solution: 'Desenvolvemos um projeto detalhado de engenharia que permitiu a adaptação completa para o sistema Steel Frame, mantendo a estética original e ainda melhorando aspectos de conforto térmico e acústico.',
    mainImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
    relatedProjects: [2, 3, 4]
  },
  {
    id: 2,
    title: 'Edifício Comercial Paulista',
    year: '2022',
    category: 'Comercial',
    client: 'Grupo Empresarial XYZ',
    location: 'São Paulo, SP',
    area: '1200m²',
    services: ['Fachadas', 'Drywall', 'Gesso', 'Acabamentos'],
    description: 'Retrofit completo de edifício comercial na Avenida Paulista, com foco na modernização da fachada e reorganização dos espaços internos utilizando sistemas de construção a seco.',
    challenge: 'Realizar a reforma completa mantendo parte do edifício em funcionamento, com prazos reduzidos e mínimo impacto nas operações diárias.',
    solution: 'Utilizamos sistemas modulares pré-fabricados que permitiram uma instalação rápida e limpa, com trabalhos executados principalmente durante horários de menor movimento.',
    mainImage: 'https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
    relatedProjects: [5, 7, 8]
  },
  // Outros projetos seriam adicionados aqui
];

const ProjetoDetalhes = () => {
  const router = useRouter();
  const { id } = router.query;
  
  // Encontrar o projeto com base no ID da URL
  const project = projectsData.find(p => p.id === Number(id));
  
  // Se o projeto não for encontrado ou a página estiver em carregamento
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Carregando projeto...</p>
      </div>
    );
  }
  
  // Encontrar projetos relacionados
  const relatedProjects = projectsData.filter(p => project.relatedProjects.includes(p.id));

  return (
    <div>
      <Head>
        <title>{project.title} | Steel Designer</title>
        <meta name="description" content={`${project.title} - Projeto ${project.category} realizado pela Steel Designer em ${project.location}`} />
      </Head>

      <Header />
      
      <main>
        {/* Hero do projeto */}
        <section className="pt-8 pb-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection delay={0.1}>
              <div className="mb-4">
                <a href="/projetos" className="inline-flex items-center text-sm hover:underline">
                  ← Voltar para projetos
                </a>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-[100px] h-[1px] bg-gray-300 mr-[10px]"></div>
                <h2 className="text-sm font-medium">{project.category.toUpperCase()}</h2>
              </div>
              
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {project.title.toUpperCase()}
                </h1>
                <p className="text-gray-600 md:max-w-3xl text-lg">
                  {project.description}
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="relative h-[60vh] mb-12">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <AnimatedSection delay={0.4}>
                <div>
                  <h3 className="text-lg font-medium mb-2">Informações do Projeto</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Cliente</p>
                      <p>{project.client}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Localização</p>
                      <p>{project.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Ano</p>
                      <p>{project.year}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Área</p>
                      <p>{project.area}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.5} className="md:col-span-2">
                <div>
                  <h3 className="text-lg font-medium mb-2">Serviços Realizados</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.services.map((service, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">O Desafio</h4>
                      <p className="text-gray-600">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Nossa Solução</h4>
                      <p className="text-gray-600">{project.solution}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <AnimatedSection delay={0.6}>
              <div className="mb-16">
                <h3 className="text-xl font-medium mb-6">Galeria do Projeto</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.gallery.map((image, index) => (
                    <motion.div 
                      key={index}
                      className="relative h-64 md:h-80"
                      whileHover={{ scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Imagem ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.7}>
              <div>
                <h3 className="text-xl font-medium mb-6">Projetos Relacionados</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedProjects.map((relatedProject) => (
                    <motion.a 
                      key={relatedProject.id}
                      href={`/projetos/${relatedProject.id}`}
                      className="block"
                      whileHover={{ scale: 0.97 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-48 md:h-60 mb-3">
                        <img
                          src={relatedProject.mainImage}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-medium">{relatedProject.title}</h4>
                      <p className="text-sm text-gray-500">{relatedProject.year} • {relatedProject.category}</p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjetoDetalhes; 