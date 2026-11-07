import { NAV, SOL_LANDING_URL } from '../data/content';

export function Footer() {
  return (
    <footer className="bg-[#120e3a] text-white/70">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src="/logo-horizontal.png" alt="Solicita — Soluções em Licitações Públicas" className="h-11 w-auto brightness-0 invert" />
          <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed">Quase duas décadas de experiência em licitações públicas, transformadas em sistemas com IA e em soluções sob medida.</p>
        </div>
        <nav aria-label="Rodapé" className="md:col-span-3">
          <p className="font-mono text-[12px] uppercase tracking-wider text-sun">Navegação</p>
          <ul className="mt-4 space-y-2.5 text-[14.5px]">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="font-mono text-[12px] uppercase tracking-wider text-sun">Soluções</p>
          <ul className="mt-4 space-y-2.5 text-[14.5px]">
            <li><a href={SOL_LANDING_URL} target="_blank" rel="noreferrer" className="hover:text-white">SOL, planos e valores</a></li>
            <li><a href="#solicrm" className="hover:text-white">SoliCRM</a></li>
            <li><a href="#precigasmed" className="hover:text-white">Precigasmed</a></li>
            <li><a href="#sob-medida" className="hover:text-white">Soluções sob medida</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col justify-between gap-2 py-6 text-[12.5px] text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Solicita — Soluções em Licitações Públicas. Todos os direitos reservados.</p>
          <p>Conformidade com a Lei 14.133/2021 e a jurisprudência do TCU.</p>
        </div>
      </div>
    </footer>
  );
}
