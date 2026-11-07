import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowRight, List, X } from './icons';
import { NAV } from '../data/content';
import { cn } from '../lib/cn';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 border-b bg-paper/95 backdrop-blur-sm transition-colors', scrolled || open ? 'border-rule' : 'border-transparent')}>
      <motion.div aria-hidden style={{ scaleX: progress }} className="absolute inset-x-0 top-0 h-[2px] origin-left bg-brand-accent" />
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-brand-dark focus:px-3 focus:py-2 focus:text-white">
        Ir para o conteúdo
      </a>
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <a href="#topo" aria-label="Solicita — início" className="shrink-0">
          <img src="/logo-horizontal.png" alt="Solicita — Soluções em Licitações Públicas" className="h-9 w-auto" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[14px] font-medium text-ink/80 transition-colors hover:text-brand-accent">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contato" className="btn-cta group hidden !px-5 !py-2.5 !text-[14px] sm:inline-flex">
            Solução sob medida <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-rule text-ink lg:hidden"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Principal (mobile)" className="border-t border-rule bg-paper lg:hidden">
          <ul className="wrap flex flex-col py-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block border-b border-rule/70 py-3.5 text-[16px] font-medium">
                  {n.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a href="#contato" onClick={() => setOpen(false)} className="btn-cta w-full">Solução sob medida</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
