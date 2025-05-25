import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import AnimatedSection from '../../components/AnimatedSection';

const BlogPage = () => {
  // Dados de exemplo para artigos
  const articles = [
    {
      id: 1,
      title: 'Vantagens do Steel Frame na construção moderna',
      excerpt: 'Descubra como o sistema construtivo Steel Frame está revolucionando o mercado da construção civil com suas vantagens de sustentabilidade, rapidez e eficiência.',
      date: '12 Abr, 2023',
      category: 'Steel Frame',
      author: 'Carlos Silva',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      title: 'Como escolher o melhor tipo de drywall para cada ambiente',
      excerpt: 'Um guia completo sobre os diferentes tipos de chapas de drywall disponíveis no mercado e como selecionar a opção ideal para cada espaço da sua casa ou escritório.',
      date: '28 Mar, 2023',
      category: 'Drywall',
      author: 'Ana Oliveira',
      image: 'https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      title: 'Tendências em acabamentos para 2023',
      excerpt: 'Conheça as principais tendências em acabamentos para construção civil neste ano, desde materiais sustentáveis até técnicas inovadoras que estão transformando o setor.',
      date: '15 Fev, 2023',
      category: 'Acabamentos',
      author: 'Roberto Mendes',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 4,
      title: 'Isolamento acústico com drywall: tudo o que você precisa saber',
      excerpt: 'Aprenda como o sistema drywall pode proporcionar excelente isolamento acústico e quais técnicas e materiais podem melhorar ainda mais o desempenho sonoro dos ambientes.',
      date: '05 Jan, 2023',
      category: 'Drywall',
      author: 'Mariana Costa',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 5,
      title: 'Fachadas ventiladas: benefícios e aplicações',
      excerpt: 'Entenda como as fachadas ventiladas podem melhorar o desempenho térmico e estético de edificações, trazendo economia de energia e valorização do imóvel.',
      date: '18 Dez, 2022',
      category: 'Fachadas',
      author: 'Paulo Rodrigues',
      image: 'https://images.unsplash.com/photo-1545486332-9e0999c535b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 6,
      title: 'Como o Steel Frame contribui para construções sustentáveis',
      excerpt: 'Análise detalhada sobre como o sistema construtivo Steel Frame se alinha às práticas de construção sustentável, reduzindo desperdícios e impacto ambiental.',
      date: '03 Nov, 2022',
      category: 'Steel Frame',
      author: 'Carlos Silva',
      image: 'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80',
    },
  ];

  // Categorias únicas para filtragem
  const categories = ['Todos', ...new Set(articles.map(article => article.category))];

  return (
    <div>
      <Head>
        <title>Blog | Steel Designer</title>
        <meta name="description" content="Artigos e conteúdos sobre Steel Frame, Fachadas, Drywall, Gesso e Acabamentos para construção civil." />
      </Head>

      <Header />
      
      <main>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection delay={0.1}>
              <div className="flex items-center mb-4">
                <div className="w-[100px] h-[1px] bg-gray-300 mr-[10px]"></div>
                <h2 className="text-sm font-medium">BLOG</h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  CONTEÚDO E INSPIRAÇÃO
                </h1>
                <p className="text-gray-600 md:max-w-3xl">
                  Compartilhamos conhecimento e experiência sobre o universo da construção a seco,
                  com dicas, tendências e informações técnicas para inspirar seus projetos.
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
              {articles.map((article, index) => (
                <AnimatedSection key={article.id} delay={0.2 + index * 0.1}>
                  <div className="mb-8">
                    <motion.a 
                      href={`/blog/${article.id}`}
                      className="block"
                      whileHover={{ scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-48 md:h-60 mb-4">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1">
                          {article.category}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                      <h3 className="text-xl font-medium mb-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                        <span className="text-sm">{article.author}</span>
                      </div>
                    </motion.a>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            <AnimatedSection delay={0.8}>
              <div className="flex justify-center mt-12">
                <button className="px-6 py-3 border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
                  Carregar mais artigos
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage; 