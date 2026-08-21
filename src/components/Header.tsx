import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (actionType?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Dossiê 360°', href: '#dossie' },
    { label: 'Achados Críticos', href: '#achados' },
    { label: 'Agentes de IA', href: '#agentes-ia' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Autoridade & História', href: '#autoridade' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#120f2e]/95 backdrop-blur-md border-b border-brand-accent/20 py-2.5 shadow-xl'
          : 'bg-[#120f2e]/40 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center group shrink-0">
            {!logoError ? (
              <img
                src="/logo-horizontal.png"
                alt="Solicita - Soluções em Licitações"
                className="h-8 sm:h-10 md:h-11 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px] object-contain transition-transform group-hover:scale-105 duration-200"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  SOLICITA
                  <span className="text-xs px-1.5 py-0.5 rounded bg-brand-accent/20 text-brand-highlight border border-brand-accent/40 font-mono">
                    IA 360°
                  </span>
                </span>
                <span className="text-[10px] text-slate-300 font-medium tracking-wider uppercase">
                  Soluções em Licitações
                </span>
              </div>
            )}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xs 2xl:text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 lg:gap-3 shrink-0">
            <button
              onClick={() => onOpenModal('Falar com Especialista')}
              className="btn-cta-secondary px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Falar com Thiago</span>
            </button>

            <button
              onClick={() => onOpenModal('Solicitar Dossiê 360°')}
              className="btn-cta-primary px-4 py-2 text-xs sm:text-sm font-bold rounded-lg whitespace-nowrap inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Solicitar Dossiê 360°</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <button
              onClick={() => onOpenModal('Solicitar Dossiê 360°')}
              className="sm:hidden btn-cta-primary px-3 py-1.5 text-xs font-bold rounded-md"
            >
              Dossiê 360°
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#120f2e]/98 border-b border-brand-accent/30 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-brand-primary/40 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('Solicitar Dossiê 360°');
              }}
              className="w-full btn-cta-primary py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Solicitar Dossiê 360° de Edital</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('Falar com Especialista');
              }}
              className="w-full btn-cta-secondary py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
