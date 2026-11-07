import { Suspense, lazy, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { WhatsappLogo } from './components/icons';
import { Header } from './components/Header';
import { LazyMount } from './components/motion';
import { Hero } from './sections/Hero';
import { Numbers } from './sections/Numbers';

// Seções abaixo da dobra: o código só é baixado quando o usuário chega perto delas.
const Empresa = lazy(() => import('./sections/Empresa').then((m) => ({ default: m.Empresa })));
const Desafio = lazy(() => import('./sections/Empresa').then((m) => ({ default: m.Desafio })));
const Sol = lazy(() => import('./sections/Sol').then((m) => ({ default: m.Sol })));
const Metodo = lazy(() => import('./sections/Metodo').then((m) => ({ default: m.Metodo })));
const Agentes = lazy(() => import('./sections/Agentes').then((m) => ({ default: m.Agentes })));
const Contratacao = lazy(() => import('./sections/Contratacao').then((m) => ({ default: m.Contratacao })));
const Faq = lazy(() => import('./sections/Faq').then((m) => ({ default: m.Faq })));
const Contato = lazy(() => import('./sections/Contato').then((m) => ({ default: m.Contato })));
const Footer = lazy(() => import('./sections/Footer').then((m) => ({ default: m.Footer })));

export function App() {
  const [subject, setSubject] = useState('');

  const chooseOffer = (name: string) => {
    setSubject(name);
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main id="conteudo">
        <Hero />
        <Numbers />
        <Suspense fallback={null}>
          <LazyMount id="solicita" minHeight={900}><Empresa /></LazyMount>
          <LazyMount minHeight={700}><Desafio /></LazyMount>
          <LazyMount id="sol" minHeight={1400}><Sol /></LazyMount>
          <LazyMount id="metodo" minHeight={900}><Metodo /></LazyMount>
          <LazyMount id="agentes" minHeight={800}><Agentes /></LazyMount>
          <LazyMount id="contratacao" minHeight={800}><Contratacao onChoose={chooseOffer} /></LazyMount>
          <LazyMount id="duvidas" minHeight={700}><Faq /></LazyMount>
          <LazyMount id="contato" minHeight={700}><Contato subject={subject} /></LazyMount>
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
