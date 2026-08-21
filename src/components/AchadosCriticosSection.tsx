import React, { useState } from 'react';
import { ACHADOS_CRITICOS_SAMPLE, AchadoCritico } from '../data/dossieSections';
import { 
  AlertOctagon, 
  AlertTriangle, 
  Info, 
  CheckCircle, 
  Sparkles, 
  ArrowRight, 
  Scale, 
  FileText,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface AchadosCriticosProps {
  onOpenModal: (actionType?: string) => void;
}

export const AchadosCriticosSection: React.FC<AchadosCriticosProps> = ({ onOpenModal }) => {
  const [filterLevel, setFilterLevel] = useState<'todos' | 'critico' | 'alto' | 'medio' | 'baixo'>('todos');

  const filteredAchados = filterLevel === 'todos'
    ? ACHADOS_CRITICOS_SAMPLE
    : ACHADOS_CRITICOS_SAMPLE.filter(a => a.nivel === filterLevel);

  const getLevelBadge = (nivel: AchadoCritico['nivel']) => {
    switch (nivel) {
      case 'critico':
        return {
          icon: AlertOctagon,
          label: '🔴 Crítico',
          desc: 'Impede a participação ou causa inabilitação',
          style: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          badgeBg: 'bg-rose-500 text-white'
        };
      case 'alto':
        return {
          icon: AlertTriangle,
          label: '🟠 Alto',
          desc: 'Compromete a execução ou rentabilidade',
          style: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          badgeBg: 'bg-amber-500 text-slate-950'
        };
      case 'medio':
        return {
          icon: Info,
          label: '🟡 Médio',
          desc: 'Merece atenção e acompanhamento técnico',
          style: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
          badgeBg: 'bg-yellow-500 text-slate-950'
        };
      case 'baixo':
        return {
          icon: CheckCircle,
          label: '🟢 Baixo',
          desc: 'Boas práticas e observações operacionais',
          style: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          badgeBg: 'bg-emerald-500 text-white'
        };
    }
  };

  return (
    <section id="achados" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0d0a21] via-[#140f38] to-[#0d0a21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Diferencial Exclusivo SolicitIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            A Seção Exclusiva: <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">Achados Críticos</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Elimine relatórios de 100 páginas que ninguém lê. Em poucos minutos, diretores e gestores comerciais compreendem exatamente os fatores que decidem o certame.
          </p>
        </div>

        {/* 4 Levels Explanation Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              level: 'critico',
              title: '🔴 Crítico',
              subtitle: 'Impede a Participação',
              desc: 'Erros graves, exigências ilegais ou restrições que geram inabilitação sumária da proposta.',
              action: 'Exige Impugnação Imediata',
              border: 'border-rose-500/40 bg-rose-950/20'
            },
            {
              level: 'alto',
              title: '🟠 Alto',
              subtitle: 'Compromete o Lucro',
              desc: 'Preços defasados, prazos impraticáveis ou omissão de reajustes que geram prejuízo na execução.',
              action: 'Exige Readequação / Esclarecimento',
              border: 'border-amber-500/40 bg-amber-950/20'
            },
            {
              level: 'medio',
              title: '🟡 Médio',
              subtitle: 'Atenção e Monitoramento',
              desc: 'Vistorias, laudos ou detalhes contratuais que demandam alinhamento preventivo da equipe técnica.',
              action: 'Acompanhamento Operacional',
              border: 'border-yellow-500/40 bg-yellow-950/20'
            },
            {
              level: 'baixo',
              title: '🟢 Baixo',
              subtitle: 'Boas Práticas & Notas',
              desc: 'Pequenas divergências materiais ou orientações formais para um processo sem ruídos.',
              action: 'Ajuste Formal Simples',
              border: 'border-emerald-500/40 bg-emerald-950/20'
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border ${item.border} backdrop-blur-md space-y-2.5 transition-all duration-200 hover:scale-[1.02]`}
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-extrabold text-white">{item.title}</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-slate-300">
                  Nível {idx + 1}
                </span>
              </div>
              <h4 className="text-xs font-bold text-slate-200">{item.subtitle}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              <div className="pt-2 border-t border-white/10">
                <span className="text-[11px] font-semibold text-brand-highlight flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {item.action}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Filter Pills */}
        <div className="mt-12 flex items-center justify-center gap-2 flex-wrap">
          <span className="text-xs font-semibold text-slate-400 mr-2">Filtrar Achados:</span>
          {[
            { id: 'todos', label: 'Todos os Achados' },
            { id: 'critico', label: '🔴 Apenas Críticos' },
            { id: 'alto', label: '🟠 Apenas Altos' },
            { id: 'medio', label: '🟡 Apenas Médios' },
            { id: 'baixo', label: '🟢 Apenas Baixos' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilterLevel(btn.id as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterLevel === btn.id
                  ? 'bg-brand-accent text-white shadow-glow'
                  : 'bg-[#1b1642] text-slate-300 hover:bg-[#251f59]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Real Example Cards of Achados Críticos */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchados.map((achado) => {
            const badge = getLevelBadge(achado.nivel);
            const Icon = badge.icon;
            return (
              <div
                key={achado.id}
                className="rounded-2xl bg-[#17133d] border border-white/10 hover:border-brand-accent/40 p-6 flex flex-col justify-between space-y-4 shadow-xl transition-all hover:translate-y-[-2px]"
              >
                <div className="space-y-3">
                  {/* Top Badge and Origin Document */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold ${badge.badgeBg}`}>
                      <Icon className="w-3.5 h-3.5" />
                      {badge.label}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      {achado.docOrigem}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {achado.titulo}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed bg-[#110e2b] p-3 rounded-xl border border-white/5">
                    {achado.descricao}
                  </p>

                  {/* Impact */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-rose-300 uppercase tracking-wider block font-mono">
                      Impacto no Certame:
                    </span>
                    <p className="text-xs text-slate-300">
                      {achado.impacto}
                    </p>
                  </div>
                </div>

                {/* Bottom: Recommended Action & Law Basis */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="p-2.5 rounded-lg bg-brand-primary/40 border border-brand-accent/20">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-highlight block mb-0.5">
                      Ação Recomendada pela Auditoria
                    </span>
                    <p className="text-xs font-semibold text-white">
                      {achado.acaoRecomendada}
                    </p>
                  </div>

                  {achado.artigoLei && (
                    <div className="flex items-center gap-1.5 text-[11px] text-purple-300">
                      <Scale className="w-3.5 h-3.5 shrink-0" />
                      <span className="font-mono">{achado.artigoLei}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#17133d] via-[#1b1e52] to-[#11244e] border border-sky-500/30 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_35px_-5px_rgba(2,132,199,0.25)]">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Quer saber quais os Achados Críticos do seu próximo edital?
            </h3>
            <p className="text-xs sm:text-sm text-sky-100/80 max-w-xl">
              Envie o link ou PDF do certame e receba a auditoria com nota e os 10 pontos decisivos antes de formular seu preço.
            </p>
          </div>
          <button
            onClick={() => onOpenModal('Auditar Edital Agora')}
            className="btn-cta-primary whitespace-nowrap px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2"
          >
            <span>Auditar Meu Edital Agora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
