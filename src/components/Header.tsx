import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowRight, List, X } from './icons';
import { NAV, TICKER } from '../data/content';
import { cn } from '../lib/cn';

function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="overflow-hidden bg-gradient-to-r from-fuchsia via-violet to-brand-accent py-2 text-white" aria-label="Destaques">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-[12.5px] font-semibold tracking-wide">
        {items.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-10">
            {t}
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sun" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={cn('transition-all duration-300', scrolled && '-mt-[34px]')}>
        <Ticker />
      </div>
      <div className={cn('relative border-b border-white/10 bg-[#17124a]/95 backdrop-blur-md transition-shadow', scrolled && 'shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]')}>
        <motion.div aria-hidden style={{ scaleX: progress }} className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-gradient-to-r from-sun via-fuchsia to-aqua" />
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-brand-dark">
          Ir para o conteúdo
        </a>
        <div className="wrap flex h-[68px] items-center justify-between gap-6">
          <a href="#topo" aria-label="Solicita — início" className="shrink-0">
            {/* a logo é azul-marinho: invertida para branco sobre o fundo escuro */}
            <img src="/logo-horizontal.png" alt="Solicita — Soluções em Licitações Públicas" className="h-10 w-auto brightness-0 invert" />
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-[14px] font-medium text-white/80 transition-colors hover:text-sun">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contato" className="btn-cta hidden !animate-none !px-5 !py-2.5 !text-[14px] sm:inline-flex">
              Quero uma solução sob medida <ArrowRight size={16} weight="bold" />
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-white lg:hidden"
            >
              {open ? <X size={22} /> : <List size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="menu-mobile" aria-label="Principal (mobile)" className="border-t border-white/10 bg-[#17124a] lg:hidden">
            <ul className="wrap flex flex-col py-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3.5 text-[16px] font-medium text-white">
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="py-4">
                <a href="#contato" onClick={() => setOpen(false)} className="btn-cta w-full">
                  Quero uma solução sob medida
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
