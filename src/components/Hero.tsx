import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  TrendingUp, 
  AlertTriangle, 
  FileSearch,
  Scale,
  BrainCircuit,
  Award
} from 'lucide-react';

interface HeroProps {
  onOpenModal: (actionType?: string) => void;
  onExploreSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal, onExploreSimulator }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-mesh-dark">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1d71b8]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#2d2e83]/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#29235C]/50 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-brand-accent/30 text-brand-highlight text-xs font-semibold backdrop-blur-md animate-pulse-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Metodologia 360° • Lei nº 14.133/2021 & Ecossistema SolicitIA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Audite editais em <span className="bg-gradient-to-r from-[#38bdf8] via-[#1d71b8] to-[#a855f7] bg-clip-text text-transparent">18 dimensões</span> e vença licitações com IA.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A união definitiva entre <strong className="text-white font-semibold">quase duas décadas de experiência prática</strong> nas maiores licitações do Brasil e <strong className="text-white font-semibold">Agentes de Inteligência Artificial</strong>. Descubra vícios ocultos, elimine riscos de inabilitação e receba o <span className="text-brand-highlight font-medium">Dossiê Premium 360°</span> com Score de 0 a 10 e Achados Críticos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenModal('Solicitar Dossiê 360°')}
                className="w-full sm:w-auto btn-cta-primary px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5 text-cyan-200" />
                <span>Solicitar Dossiê 360° Agora</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreSimulator}
                className="w-full sm:w-auto btn-cta-secondary px-7 py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2.5"
              >
                <BrainCircuit className="w-5 h-5 text-sky-400" />
                <span>Testar Simulador de Risco</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300">100% Lei 14.133/21</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-brand-highlight shrink-0" />
                <span className="text-xs text-slate-300">Jurisprudência TCU</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300">Visão de 7 Especialistas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300">Decisão em 5 Minutos</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Mockup Card of the Dossier */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent via-brand-primary to-purple-600 rounded-3xl blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-subtle" />

              {/* Dossier Mock Card */}
              <div className="relative rounded-2xl bg-[#141033]/95 border border-brand-accent/40 p-5 sm:p-6 shadow-2xl backdrop-blur-xl space-y-5">
                
                {/* Header of the mock card */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-highlight">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-highlight">
                          Dossiê Premium 360°
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Auditoria Concluída
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-[240px]">
                        PE nº 104/2026 • Saúde & Gases
                      </h4>
                    </div>
                  </div>

                  {/* Score Pill */}
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Score Geral</span>
                    <div className="text-xl font-extrabold text-emerald-400 flex items-baseline gap-0.5">
                      8.8<span className="text-xs text-slate-400 font-normal">/10</span>
                    </div>
                  </div>
                </div>

                {/* Simulated 7-Role Perspective Strip */}
                <div className="bg-[#1e1948]/70 rounded-xl p-3 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <BrainCircuit className="w-3.5 h-3.5 text-brand-highlight" />
                      Análise Sob a Ótica de 7 Especialistas:
                    </span>
                    <span className="text-emerald-400 font-mono font-medium">100% Coberto</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1 text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-brand-primary/40 text-slate-200 border border-white/5">Pregoeiro</span>
                    <span className="px-2 py-0.5 rounded bg-brand-primary/40 text-slate-200 border border-white/5">Procurador Jurídico</span>
                    <span className="px-2 py-0.5 rounded bg-brand-primary/40 text-slate-200 border border-white/5">Auditor TCU</span>
                    <span className="px-2 py-0.5 rounded bg-brand-primary/40 text-slate-200 border border-white/5">Engenheiro</span>
                    <span className="px-2 py-0.5 rounded bg-brand-primary/40 text-slate-200 border border-white/5">Dir. Comercial</span>
                  </div>
                </div>

                {/* Achados Críticos Section Preview */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                      Achados Críticos Prioritários (Top 3)
                    </span>
                    <span className="text-[10px] text-slate-400">Classificação Oficial</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    {/* Item 1: Critico */}
                    <div className="p-2.5 rounded-lg bg-rose-950/40 border border-rose-500/30 flex items-start gap-2.5">
                      <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-500 text-white">
                        🔴 CRÍTICO
                      </span>
                      <div className="space-y-0.5">
                        <p className="font-semibold text-rose-200">Atestado técnico de 80% do quantitativo</p>
                        <p className="text-[11px] text-slate-300">Violação do Art. 67 da Lei 14.133/21. Impugnação urgente.</p>
                      </div>
                    </div>

                    {/* Item 2: Alto */}
                    <div className="p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/30 flex items-start gap-2.5">
                      <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950">
                        🟠 ALTO
                      </span>
                      <div className="space-y-0.5">
                        <p className="font-semibold text-amber-200">Omissão de reajuste periódico em contrato 24m</p>
                        <p className="text-[11px] text-slate-300">Risco de perda da margem operacional no 2º ano.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Recommendation Banner */}
                <div className="rounded-xl bg-gradient-to-r from-brand-primary/80 to-brand-accent/80 p-3 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] text-cyan-200 block uppercase font-bold">Parecer Final Conclusivo</span>
                    <span className="text-xs font-bold text-white">Participar com Impugnação Prévia</span>
                  </div>
                  <button
                    onClick={() => onOpenModal('Ver Exemplo Completo')}
                    className="px-3 py-1.5 rounded-lg bg-white text-brand-dark text-xs font-bold hover:bg-slate-100 transition-colors shadow"
                  >
                    Abrir Dossiê
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
