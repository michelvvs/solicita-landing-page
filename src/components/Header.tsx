import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV } from '../data/content';
import { cn } from '../lib/cn';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b bg-paper/95 backdrop-blur-sm transition-colors',
        scrolled || open ? 'border-rule' : 'border-transparent',
      )}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-brand-dark focus:px-3 focus:py-2 focus:text-white"
      >
        Ir para o conteúdo
      </a>
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <a href="#topo" aria-label="Solicita — início" className="shrink-0">
          <img src="/logo-horizontal.png" alt="Solicita — Soluções em Licitações Públicas" className="h-9 w-auto" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-[14px] font-medium text-ink/80 hover:text-brand-accent">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contato" className="btn-primary hidden !py-2.5 sm:inline-flex">
            Falar com a Solicita
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-rule lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Principal (mobile)" className="border-t border-rule bg-paper lg:hidden">
          <ul className="wrap flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-rule/70 py-3.5 text-[16px] font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a href="#contato" onClick={() => setOpen(false)} className="btn-primary w-full">
                Falar com a Solicita
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
