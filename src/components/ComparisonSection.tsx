import React from 'react';
import { XCircle, CheckCircle2, Zap, Scale, Sparkles } from 'lucide-react';

interface ComparisonProps {
  onOpenModal: (actionType?: string) => void;
}

export const ComparisonSection: React.FC<ComparisonProps> = ({ onOpenModal }) => {
  const comparisonRows = [
    {
      feature: 'Tempo de Análise & Triagem',
      traditional: '2 a 4 dias de leitura manual pesada de centenas de páginas em PDF.',
      solicita: 'Dossiê 360° e Score de 0 a 10 entregues em minutos para a diretoria.',
    },
    {
      feature: 'Profundidade da Auditoria',
      traditional: 'Foco quase exclusivo no preço e itens, ignorando minutas e anexos.',
      solicita: '18 dimensões exaustivas sob a ótica de 7 especialistas (TCU, Jurídico, Engenharia, etc.).',
    },
    {
      feature: 'Detecção de Conflitos e Inconsistências',
      traditional: 'Divergências entre Termo de Referência e Contrato passam despercebidas.',
      solicita: 'Cruzamento automatizado apontando a página exata da contradição.',
    },
    {
      feature: 'Avaliação de Risco Executivo',
      traditional: 'Decisão intuitiva ("no feeling") ou sem fundamentação financeira.',
      solicita: 'Matriz exclusiva de Achados Críticos (🔴 Crítico, 🟠 Alto, 🟡 Médio, 🟢 Baixo).',
    },
    {
      feature: 'Reação Jurídica & Impugnações',
      traditional: 'Peças redigidas às pressas ou perda do prazo legal por falta de tempo.',
      solicita: 'Geração de peças fundamentadas na Lei 14.133/2021 e jurisprudência TCU prontas para protocolo.',
    },
    {
      feature: 'Habilitação & Checklist Documental',
      traditional: 'Risco frequente de inabilitação por certidão vencida ou detalhe de SICAF.',
      solicita: 'Checklist completo com referência de item/página e validação de índices contábeis.',
    },
  ];

  return (
    <section id="comparativo" className="py-24 relative overflow-hidden bg-[#0d0a21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/40 border border-brand-accent/30 text-brand-highlight text-xs font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>Comparativo Direto de Eficiência</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Análise Tradicional vs. <span className="bg-gradient-to-r from-[#38bdf8] via-[#1d71b8] to-[#a855f7] bg-clip-text text-transparent">Ecossistema Solicita</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Veja a diferença entre depender da sorte em processos burocráticos e ter o poder da auditoria inteligente ao seu lado.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="mt-14 overflow-x-auto">
          <div className="min-w-[720px] rounded-3xl bg-[#141033] border border-brand-accent/40 shadow-2xl overflow-hidden">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-[#1b1548] p-5 text-sm font-bold border-b border-white/10 text-white">
              <div className="col-span-4 flex items-center gap-2">
                <span>Dimensão Avaliada</span>
              </div>
              <div className="col-span-4 text-slate-300 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>Processo Manual Tradicional</span>
              </div>
              <div className="col-span-4 text-brand-highlight flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="font-extrabold">Dossiê 360° + SolicitIA</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/5 text-xs sm:text-sm">
              {comparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 p-5 items-center hover:bg-white/[0.02] transition-colors"
                >
                  <div className="col-span-4 font-bold text-white pr-4">
                    {row.feature}
                  </div>
                  <div className="col-span-4 text-slate-400 pr-4 flex items-start gap-2">
                    <span className="text-rose-400 shrink-0 mt-0.5">✕</span>
                    <span>{row.traditional}</span>
                  </div>
                  <div className="col-span-4 text-slate-100 font-medium flex items-start gap-2 bg-brand-primary/20 p-2.5 rounded-xl border border-brand-accent/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{row.solicita}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenModal('Migrar para o Dossiê 360°')}
            className="btn-cta-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold"
          >
            <Zap className="w-5 h-5 text-cyan-200" />
            <span>Elevar o Nível das Minhas Licitações Agora</span>
          </button>
        </div>

      </div>
    </section>
  );
};
