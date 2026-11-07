import { Suspense, lazy, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { WhatsappLogo } from './components/icons';
import { Header } from './components/Header';
import { LazyMount } from './components/motion';
import { Hero } from './sections/Hero';

// Seções abaixo da dobra: o código só é baixado quando o usuário chega perto delas.
const Sobre = lazy(() => import('./sections/Sobre').then((m) => ({ default: m.Sobre })));
const Valores = lazy(() => import('./sections/Sobre').then((m) => ({ default: m.Valores })));
const Solucoes = lazy(() => import('./sections/Solucoes').then((m) => ({ default: m.Solucoes })));
const SobMedida = lazy(() => import('./sections/SobMedida').then((m) => ({ default: m.SobMedida })));
const Faq = lazy(() => import('./sections/Faq').then((m) => ({ default: m.Faq })));
const Contato = lazy(() => import('./sections/Contato').then((m) => ({ default: m.Contato })));
const Footer = lazy(() => import('./sections/Footer').then((m) => ({ default: m.Footer })));

export function App() {
  const [subject, setSubject] = useState('');

  const goContact = (s: string) => {
    setSubject(s);
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main id="conteudo">
        <Hero />
        <Suspense fallback={null}>
          <LazyMount id="sobre" minHeight={1000}><Sobre /></LazyMount>
          <LazyMount id="valores" minHeight={1200}><Valores /></LazyMount>
          <LazyMount id="solucoes" minHeight={2400}><Solucoes onChoose={goContact} /></LazyMount>
          <LazyMount id="sob-medida" minHeight={1300}><SobMedida onStart={() => goContact('Solução sob medida')} /></LazyMount>
          <LazyMount id="duvidas" minHeight={700}><Faq /></LazyMount>
          <LazyMount id="contato" minHeight={900}><Contato subject={subject} /></LazyMount>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <LazyMount minHeight={400}><Footer /></LazyMount>
      </Suspense>

      <a
        href="#contato"
        aria-label="Falar com a Solicita"
        className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet to-brand-accent text-white shadow-lg transition-transform hover:scale-110"
      >
        <WhatsappLogo size={26} weight="fill" aria-hidden />
      </a>
    </MotionConfig>
  );
}

export default App;
