import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import AnimatedSection from '../../components/AnimatedSection';

// Dados de exemplo para artigos
const articlesData = [
  {
    id: 1,
    title: 'Vantagens do Steel Frame na construção moderna',
    excerpt: 'Descubra como o sistema construtivo Steel Frame está revolucionando o mercado da construção civil com suas vantagens de sustentabilidade, rapidez e eficiência.',
    content: `
      <p>O sistema construtivo Steel Frame tem se destacado como uma das principais inovações no setor da construção civil nos últimos anos. Utilizando perfis de aço galvanizado formados a frio, este método oferece uma série de vantagens significativas em comparação com os métodos tradicionais de construção.</p>
      
      <h2>Rapidez na execução</h2>
      <p>Uma das principais vantagens do Steel Frame é a velocidade de construção. Por ser um sistema industrializado, com peças produzidas em fábrica e montadas no canteiro de obras, o tempo de execução pode ser reduzido em até 50% em comparação com construções convencionais. Isso significa menor tempo de obra, redução de custos com mão de obra e retorno mais rápido do investimento.</p>
      
      <h2>Sustentabilidade</h2>
      <p>O Steel Frame é considerado um sistema construtivo sustentável por diversos motivos:</p>
      <ul>
        <li>Redução significativa de resíduos no canteiro de obras</li>
        <li>O aço é 100% reciclável, podendo ser reaproveitado indefinidamente</li>
        <li>Menor consumo de água durante a construção</li>
        <li>Melhor desempenho térmico, reduzindo o consumo de energia para climatização</li>
      </ul>
      
      <h2>Precisão dimensional</h2>
      <p>A fabricação industrial dos perfis de aço garante alta precisão dimensional, o que facilita a montagem e reduz problemas comuns em obras convencionais, como desalinhamentos e imperfeições. Isso resulta em um acabamento final de maior qualidade e durabilidade.</p>
      
      <h2>Flexibilidade arquitetônica</h2>
      <p>Contrário ao que muitos pensam, o Steel Frame oferece grande liberdade para projetos arquitetônicos. É possível criar vãos maiores, fachadas diferenciadas e layouts flexíveis. Além disso, modificações futuras são mais simples de serem executadas, permitindo adaptações conforme as necessidades dos usuários ao longo do tempo.</p>
      
      <h2>Durabilidade e resistência</h2>
      <p>Estruturas em Steel Frame possuem excelente resistência a intempéries, abalos sísmicos e ventos fortes. O aço galvanizado utilizado no sistema é tratado contra corrosão, garantindo durabilidade superior a 50 anos com manutenção adequada.</p>
      
      <h2>Isolamento térmico e acústico</h2>
      <p>Quando combinado com os materiais adequados de fechamento e isolamento, o Steel Frame proporciona excelente conforto térmico e acústico. As paredes formam câmaras que podem ser preenchidas com materiais isolantes, criando ambientes mais confortáveis e economizando energia com climatização.</p>
      
      <h2>Conclusão</h2>
      <p>O Steel Frame representa uma evolução importante na construção civil, alinhando-se às demandas contemporâneas por sustentabilidade, eficiência e qualidade. À medida que o mercado brasileiro se familiariza com esta tecnologia, sua adoção tende a crescer, transformando o panorama da construção no país.</p>
    `,
    date: '12 Abr, 2023',
    readTime: '5 min',
    category: 'Steel Frame',
    tags: ['Construção', 'Sustentabilidade', 'Inovação', 'Tecnologia'],
    author: {
      name: 'Carlos Silva',
      role: 'Engenheiro Civil',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    mainImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    relatedArticles: [6, 2, 5]
  },
  {
    id: 2,
    title: 'Como escolher o melhor tipo de drywall para cada ambiente',
    excerpt: 'Um guia completo sobre os diferentes tipos de chapas de drywall disponíveis no mercado e como selecionar a opção ideal para cada espaço da sua casa ou escritório.',
    content: `
      <p>O drywall revolucionou a construção de paredes e forros internos, oferecendo uma solução mais rápida, limpa e versátil que os métodos tradicionais. No entanto, muitas pessoas não sabem que existem diferentes tipos de chapas de drywall, cada uma com características específicas para determinadas aplicações.</p>
      
      <h2>Chapas Standard (ST)</h2>
      <p>As chapas standard são as mais comuns e econômicas. Possuem núcleo de gesso e revestimento de papel cartão na cor cinza. São indicadas para ambientes secos como quartos, salas e escritórios, onde não há exposição constante à umidade.</p>
      <p>Vantagens:</p>
      <ul>
        <li>Menor custo</li>
        <li>Fácil instalação e acabamento</li>
        <li>Bom desempenho acústico básico</li>
      </ul>
      
      <h2>Chapas Resistentes à Umidade (RU)</h2>
      <p>Conhecidas popularmente como "drywall verde" devido à cor do seu cartão, estas chapas são tratadas com silicone e outros aditivos que repelem a água. São ideais para áreas úmidas como banheiros, cozinhas, lavanderias e áreas de serviço.</p>
      <p>Vantagens:</p>
      <ul>
        <li>Resistência à umidade e mofo</li>
        <li>Durabilidade em ambientes úmidos</li>
        <li>Menor manutenção ao longo do tempo</li>
      </ul>
      
      <h2>Chapas Resistentes ao Fogo (RF)</h2>
      <p>Identificadas pela cor rosa do cartão, estas chapas possuem fibras de vidro e outros aditivos em seu núcleo que aumentam sua resistência ao fogo. São recomendadas para áreas que exigem maior proteção contra incêndios, como cozinhas, áreas próximas a lareiras, escadas e rotas de fuga.</p>
      <p>Vantagens:</p>
      <ul>
        <li>Maior resistência à propagação de chamas</li>
        <li>Segurança adicional para a edificação</li>
        <li>Atendimento às normas de segurança contra incêndio</li>
      </ul>
      
      <h2>Chapas de Alta Resistência (AR)</h2>
      <p>Com cartão na cor azul, estas chapas possuem maior densidade e são reforçadas com fibras, oferecendo maior resistência a impactos e cargas. São indicadas para áreas de grande circulação, escolas, hospitais, e locais onde serão fixados objetos pesados nas paredes.</p>
      <p>Vantagens:</p>
      <ul>
        <li>Maior resistência mecânica</li>
        <li>Suporta melhor a fixação de objetos pesados</li>
        <li>Durabilidade superior em áreas de alto tráfego</li>
      </ul>
      
      <h2>Chapas Acústicas</h2>
      <p>Especialmente desenvolvidas para melhorar o isolamento acústico, estas chapas possuem maior densidade ou composição especial que reduz a transmissão de sons. São ideais para home theaters, estúdios, consultórios e ambientes que exigem maior privacidade sonora.</p>
      <p>Vantagens:</p>
      <ul>
        <li>Isolamento acústico superior</li>
        <li>Maior conforto sonoro nos ambientes</li>
        <li>Redução da transmissão de ruídos entre cômodos</li>
      </ul>
      
      <h2>Como escolher o tipo ideal</h2>
      <p>Para fazer a escolha certa, considere:</p>
      <ol>
        <li>A função do ambiente (área seca, úmida, de grande circulação)</li>
        <li>Necessidades específicas (isolamento acústico, resistência ao fogo)</li>
        <li>O que será fixado nas paredes (objetos leves ou pesados)</li>
        <li>Orçamento disponível</li>
      </ol>
      
      <p>Em muitos casos, é possível combinar diferentes tipos de chapas em um mesmo ambiente. Por exemplo, em um banheiro, pode-se usar chapas resistentes à umidade nas áreas próximas ao chuveiro e chapas standard nas demais áreas.</p>
      
      <h2>Conclusão</h2>
      <p>A escolha adequada do tipo de drywall para cada ambiente é fundamental para garantir a durabilidade, segurança e conforto da edificação. Consulte sempre um profissional especializado que poderá indicar a melhor solução para o seu projeto específico.</p>
    `,
    date: '28 Mar, 2023',
    readTime: '6 min',
    category: 'Drywall',
    tags: ['Construção', 'Interiores', 'Reforma'],
    author: {
      name: 'Ana Oliveira',
      role: 'Arquiteta',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    },
    mainImage: 'https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    relatedArticles: [4, 3, 1]
  },
  // Outros artigos seriam adicionados aqui
];

const ArtigoDetalhes = () => {
  const router = useRouter();
  const { id } = router.query;
  
  // Encontrar o artigo com base no ID da URL
  const article = articlesData.find(a => a.id === Number(id));
  
  // Se o artigo não for encontrado ou a página estiver em carregamento
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Carregando artigo...</p>
      </div>
    );
  }
  
  // Encontrar artigos relacionados
  const relatedArticles = articlesData.filter(a => article.relatedArticles?.includes(a.id)).slice(0, 3);

  return (
    <div>
      <Head>
        <title>{article.title} | Steel Designer</title>
        <meta name="description" content={article.excerpt} />
      </Head>

      <Header />
      
      <main>
        <section className="pt-8 pb-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection delay={0.1}>
              <div className="mb-4">
                <a href="/blog" className="inline-flex items-center text-sm hover:underline">
                  ← Voltar para o blog
                </a>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-[100px] h-[1px] bg-gray-300 mr-[10px]"></div>
                <h2 className="text-sm font-medium">{article.category.toUpperCase()}</h2>
              </div>
              
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {article.title}
                </h1>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <img 
                      src={article.author.image} 
                      alt={article.author.name}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-medium">{article.author.name}</p>
                      <p className="text-sm text-gray-500">{article.author.role}</p>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    {article.date} • {article.readTime} de leitura
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="relative h-[50vh] md:h-[60vh] mb-12">
                <img
                  src={article.mainImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-12 gap-12">
              <AnimatedSection delay={0.4} className="md:col-span-8">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }}></div>
                
                <div className="mt-8 pt-8 border-t">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={article.author.image} 
                        alt={article.author.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-medium text-lg">Escrito por {article.author.name}</p>
                        <p className="text-gray-500">{article.author.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="p-2 border rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </button>
                      <button className="p-2 border rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </button>
                      <button className="p-2 border rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.5} className="md:col-span-4">
                <div className="sticky top-8">
                  <h3 className="text-xl font-medium mb-6">Artigos Relacionados</h3>
                  <div className="space-y-6">
                    {relatedArticles.map((relatedArticle) => (
                      <motion.a 
                        key={relatedArticle.id}
                        href={`/blog/${relatedArticle.id}`}
                        className="flex gap-4 items-start"
                        whileHover={{ scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-20 h-20 flex-shrink-0">
                          <img
                            src={relatedArticle.mainImage}
                            alt={relatedArticle.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2">{relatedArticle.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">{relatedArticle.date}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                  
                  <div className="mt-12 p-6 bg-gray-50">
                    <h3 className="text-lg font-medium mb-4">Inscreva-se na Newsletter</h3>
                    <p className="text-sm text-gray-600 mb-4">Receba nossos artigos e novidades diretamente no seu email.</p>
                    <div className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Seu melhor e-mail" 
                        className="w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-black"
                      />
                      <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition-colors">
                        Inscrever-se
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArtigoDetalhes; 