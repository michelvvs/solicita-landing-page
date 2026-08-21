import React from 'react';
import { ShieldCheck, Scale, Sparkles, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenModal: (actionType?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const [logoError, setLogoError] = React.useState(false);

  return (
    <footer className="relative bg-[#090717] border-t border-brand-accent/20 text-slate-400 text-xs pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center">
              {!logoError ? (
                <img
                  src="/logo-horizontal.png"
                  alt="Solicita - Soluções em Licitações"
                  className="h-10 sm:h-12 w-auto max-w-[240px] object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white tracking-tight">
                    SOLICITA
                  </span>
                  <span className="text-[10px] text-slate-300 uppercase tracking-wider">
                    Soluções em Licitações
                  </span>
                </div>
              )}
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Plataforma de inteligência e auditoria de editais em 18 dimensões. Construída a partir de quase 20 anos de experiência prática e calibrada na Lei nº 14.133/2021.
            </p>

            <div className="flex items-center gap-2 text-slate-300 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Conformidade estrita com a Lei 14.133/2021 & Súmulas TCU</span>
            </div>
          </div>

          {/* Col 2: Solutions Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Soluções & Produtos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#dossie" className="hover:text-brand-highlight transition-colors">
                  Dossiê Premium 360° (18 Dimensões)
                </a>
              </li>
              <li>
                <a href="#achados" className="hover:text-brand-highlight transition-colors">
                  Achados Críticos (🔴🟠🟡🟢)
                </a>
              </li>
              <li>
                <a href="#agentes-ia" className="hover:text-brand-highlight transition-colors">
                  Ecossistema de Agentes de IA
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-brand-highlight transition-colors">
                  Simulador Interativo de Riscos
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-brand-highlight transition-colors">
                  Dossiê Avulso & Assinaturas
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional & Direct Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Atendimento & Consultoria
            </h4>
            <p className="text-slate-400 text-xs">
              Atendimento estratégico personalizado liderado por Thiago Mattos para empresas de todo o território nacional.
            </p>
            <div className="space-y-2 pt-1">
              <button
                onClick={() => onOpenModal('Atendimento Direto Rodapé')}
                className="inline-flex items-center gap-2 text-brand-highlight hover:text-white font-bold"
              >
                <Phone className="w-4 h-4" />
                <span>Falar via WhatsApp Comercial</span>
              </button>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onOpenModal('Solicitar Dossiê')}
                className="w-full py-2.5 px-4 rounded-xl bg-brand-accent/20 hover:bg-brand-accent text-cyan-200 hover:text-white border border-brand-accent/40 font-bold transition-all text-xs text-center"
              >
                Solicitar Auditoria de Edital Agora
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Solicita - Soluções em Licitações. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Privacidade & Confidencialidade Garantidas</span>
            <span>•</span>
            <span>Nova Lei de Licitações (Lei 14.133/21)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
