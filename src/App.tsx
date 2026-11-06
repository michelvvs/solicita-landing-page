import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Empresa } from './sections/Empresa';
import { Sol } from './sections/Sol';
import { Metodo } from './sections/Metodo';
import { Agentes } from './sections/Agentes';
import { Contratacao } from './sections/Contratacao';
import { Faq } from './sections/Faq';
import { Contato } from './sections/Contato';
import { Footer } from './sections/Footer';

export function App() {
  const [subject, setSubject] = useState('');

  const chooseOffer = (name: string) => {
    setSubject(name);
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Empresa />
        <Sol />
        <Metodo />
        <Agentes />
        <Contratacao onChoose={chooseOffer} />
        <Faq />
        <Contato subject={subject} />
      </main>
      <Footer />

      <a
        href="#contato"
        aria-label="Falar com a Solicita"
        className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-white shadow-lg transition-colors hover:bg-brand-primary"
      >
        <MessageCircle className="h-6 w-6" aria-hidden />
      </a>
    </>
  );
}

export default App;
