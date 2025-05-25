import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const ArticlesSection = () => {
  const articles = [
    {
      id: 1,
      title: 'Vantagens do Steel Frame na construção moderna',
      date: '12 Abr, 2023',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      title: 'Como escolher o melhor tipo de drywall para cada ambiente',
      date: '28 Mar, 2023',
      image: 'https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      title: 'Tendências em acabamentos para 2023',
      date: '15 Fev, 2023',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection delay={0.1}>
          <div className="flex items-center mb-4">
            <div className="w-[100px] h-[1px] bg-gray-300 mr-[10px]"></div>
            <h2 className="text-sm font-medium">BLOG</h2>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-12">
              CONTEÚDO E INSPIRAÇÃO
            </h3>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <AnimatedSection key={article.id} delay={0.3 + index * 0.15}>
              <div className="mb-8">
                <motion.a 
                  href={`/blog/${article.id}`}
                  className="block"
                  whileHover={{ scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-48 md:h-64 mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-medium mb-2">{article.title}</h4>
                  <p className="text-sm text-gray-500 mb-4">{article.date}</p>
                </motion.a>
                <motion.a
                  href={`/blog/${article.id}`}
                  className="text-sm font-medium inline-flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Leia mais <span className="ml-2">→</span>
                </motion.a>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.8}>
          <div className="text-center mt-8">
            <a href="/blog" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
              Ver mais artigos <span className="ml-2">→</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ArticlesSection; 