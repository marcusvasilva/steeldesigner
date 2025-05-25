import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ArticlesSection from '../components/ArticlesSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Steel Designer - Estrutura e Acabamento com Precisão</title>
        <meta name="description" content="Steel Designer é especializada em Steel Frame, Fachadas, Drywall, Gesso e Acabamentos para projetos residenciais e comerciais." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ArticlesSection />
        <ContactSection />
      </main>
    </div>
  );
} 