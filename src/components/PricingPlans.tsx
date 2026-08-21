import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap, Phone, HeartHandshake } from 'lucide-react';

interface PricingProps {
  onOpenModal: (actionType?: string) => void;
}

export const PricingPlans: React.FC<PricingProps> = ({ onOpenModal }) => {
  const plans = [
    {
      id: 'dossie-avulso',
      name: 'Dossiê 360° Individual',
      badge: 'Sob Demanda',
      price: 'R$ 490',
      period: '/ por edital analisado',
      description: 'Ideal para empresas que vão disputar um certame prioritário e necessitam de uma auditoria cirúrgica antes de enviar a proposta.',
      features: [
        'Auditoria completa nas 18 dimensões oficiais',
        'Seção exclusiva "Achados Críticos" (Top 10 pontos em 4 cores)',
        'Score de Viabilidade Executiva (Nota 0 a 10)',
        'Checklist Documental com páginas e itens do edital',
        'Minuta prévia de Impugnação/Esclarecimento em caso de vício',
        'Entrega expressa em PDF profissional estruturado',
      ],
      ctaText: 'Solicitar Dossiê de 1 Edital',
      popular: false,
      border: 'border-white/10 bg-[#141033]',
    },
    {
      id: 'agentes-pro',
      name: 'SolicitIA Agentes Pro',
      badge: 'Mais Escolhido • Escala',
      price: 'R$ 980',
      period: '/ mês (ou sob demanda)',
      description: 'Acesso contínuo à plataforma de Inteligência Artificial para equipes comerciais auditarem múltiplos editais e gerarem documentos.',
      features: [
        'Acesso aos 5 Agentes de IA da SolicitIA',
        'Agente Auditor 360° de Editais ilimitado',
        'Agente Gerador de Impugnações e Recursos na Lei 14.133',
        'Agente de Habilitação & SICAF Compliance',
        'Agente Gerador de ETP, TR e Propostas Comerciais',
        'Agente de Estratégia de Lances & Preço de Segurança',
        'Suporte técnico prioritário',
      ],
      ctaText: 'Assinar Suíte de Agentes IA',
      popular: true,
      border: 'border-brand-accent bg-gradient-to-b from-[#1b1548] to-[#141033] shadow-glow',
    },
    {
      id: 'enterprise-consultoria',
      name: 'Consultoria Estratégica & Enterprise',
      badge: 'Exclusivo • Thiago Mattos',
      price: 'Sob Consulta',
      period: 'Projetos e Contratos Complexos',
      description: 'A combinação máxima: Inteligência Artificial + mentoria e acompanhamento estratégico direto de Thiago Mattos nos seus maiores certames.',
      features: [
        'Tudo do Plano Agentes Pro incluído',
        'Acompanhamento e validação humana direta de Thiago Mattos',
        'Análise de viabilidade para certames milionários e saúde hospitalar',
        'Estratégia tática de lances e negociação em tempo real',
        'Redação e condução de recursos complexos junto a TCE/TCU',
        'Treinamento e capacitação da sua equipe de licitação',
      ],
      ctaText: 'Agendar Consulta com Thiago Mattos',
      popular: false,
      border: 'border-purple-500/40 bg-[#141033]',
    },
  ];

  return (
    <section id="planos" className="py-24 relative overflow-hidden bg-mesh-dark">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-primary/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/40 border border-brand-accent/30 text-brand-highlight text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            <span>Investimento Estratégico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Escolha o Modelo Ideal para Sua Empresa
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Desde a auditoria pontual de um edital decisivo até o ecossistema completo de IA e consultoria de elite.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative border ${plan.border} backdrop-blur-xl transition-all duration-300 hover:translate-y-[-4px]`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 text-xs font-black shadow-[0_0_20px_rgba(14,165,233,0.5)] uppercase tracking-wider flex items-center gap-1.5 border border-white/40">
                  <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                  <span>Recomendado</span>
                </div>
              )}

              <div className="space-y-6">
                
                {/* Plan Header */}
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>{plan.name}</span>
                    {plan.popular && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/40">
                        Top Escolha
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    O Que Está Incluído:
                  </span>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom CTA Button */}
              <div className="pt-8 mt-6 border-t border-white/10">
                <button
                  onClick={() => onOpenModal(plan.name)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? 'btn-cta-primary'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/25'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Security & Warranty Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#141033] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Garantia de Sigilo e Rigor Técnico
              </h4>
              <p className="text-xs text-slate-400">
                Seus editais e dados de propostas comerciais são tratados sob estrita confidencialidade.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenModal('Dúvida sobre Planos')}
            className="text-xs text-brand-highlight hover:underline font-semibold whitespace-nowrap"
          >
            Falar com consultor comercial →
          </button>
        </div>

      </div>
    </section>
  );
};
