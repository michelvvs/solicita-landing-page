import React, { useState } from 'react';
import { SAMPLE_DOSSIES, SampleDossie } from '../data/sampleDossies';
import { 
  BrainCircuit, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertOctagon, 
  AlertTriangle, 
  DollarSign, 
  Scale, 
  ShieldCheck,
  Building,
  FileText,
  TrendingUp,
  Download
} from 'lucide-react';

interface EditalRiskSimulatorProps {
  onOpenModal: (actionType?: string) => void;
}

export const EditalRiskSimulator: React.FC<EditalRiskSimulatorProps> = ({ onOpenModal }) => {
  const [selectedDossie, setSelectedDossie] = useState<SampleDossie>(SAMPLE_DOSSIES[0]);

  return (
    <section id="simulador" className="py-24 relative overflow-hidden bg-mesh-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Simulador Interativo em Tempo Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Veja o Dossiê 360° em Ação no Seu Segmento
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Selecione uma modalidade e veja como o Dossiê calcula o Score de Viabilidade, diagnostica armadilhas contratuais e gera o parecer final.
          </p>
        </div>

        {/* Segment Selector Chips */}
        <div className="mt-12 flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 custom-scroll">
          {SAMPLE_DOSSIES.map((dossie) => (
            <button
              key={dossie.id}
              onClick={() => setSelectedDossie(dossie)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 border flex items-center gap-2 ${
                selectedDossie.id === dossie.id
                  ? 'bg-sky-500/20 text-white border-sky-400/60 shadow-[0_0_20px_rgba(14,165,233,0.3)] scale-[1.02]'
                  : 'bg-[#151138] text-slate-300 hover:text-white hover:bg-[#1f1a52] border-white/5'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>{dossie.categoryName}</span>
            </button>
          ))}
        </div>

        {/* Interactive Dossier Simulation Dashboard */}
        <div className="mt-8 rounded-3xl bg-[#141033] border border-brand-accent/40 shadow-2xl p-6 sm:p-8 lg:p-10 space-y-8 backdrop-blur-xl">
          
          {/* Top Row: General Data & Score Badge */}
          <div className="grid lg:grid-cols-12 gap-6 items-center pb-8 border-b border-white/10">
            
            {/* Edital Basic Information */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-brand-primary text-brand-highlight border border-brand-accent/30">
                  {selectedDossie.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {selectedDossie.modalidade}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {selectedDossie.editalNum} — {selectedDossie.orgao}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">Objeto:</strong> {selectedDossie.objeto}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs pt-1">
                <span className="text-slate-400">
                  Valor Estimado: <strong className="text-white font-mono text-sm">{selectedDossie.valorEstimado}</strong>
                </span>
                <span className="text-slate-400">
                  Chance Estimada de Vitória: <strong className="text-emerald-400 font-semibold">{selectedDossie.chanceVitoria}</strong>
                </span>
              </div>
            </div>

            {/* Score & Decision Pill */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4 p-5 rounded-2xl bg-[#1a1444] border border-brand-accent/30">
              <div className="text-center">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                  Score de Viabilidade Global
                </span>
                <div className="text-4xl font-extrabold text-white flex items-baseline justify-center gap-1">
                  <span className="text-brand-highlight">{selectedDossie.scoreViabilidade}</span>
                  <span className="text-sm text-slate-400 font-normal">/ 10</span>
                </div>
              </div>

              <div className="text-center w-full">
                <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Veredito do Dossiê:</span>
                <div className={`px-3 py-1.5 rounded-lg border text-xs font-bold ${selectedDossie.decisaoColor}`}>
                  {selectedDossie.decisao}
                </div>
              </div>
            </div>

          </div>

          {/* Middle Row: Achados Críticos Breakdown + 4-Pillar Highlights */}
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Achados Críticos Count & Sample */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  Mapeamento de Achados Críticos
                </h4>
                <span className="text-xs text-slate-400">Classificação Ponderada</span>
              </div>

              {/* Counter Badges */}
              <div className="grid grid-cols-4 gap-2">
                <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-center">
                  <span className="text-lg font-bold text-rose-400 block">{selectedDossie.achadosCriticosCount.critico}</span>
                  <span className="text-[10px] text-rose-200 uppercase font-mono">Críticos</span>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-center">
                  <span className="text-lg font-bold text-amber-400 block">{selectedDossie.achadosCriticosCount.alto}</span>
                  <span className="text-[10px] text-amber-200 uppercase font-mono">Altos</span>
                </div>
                <div className="p-2.5 rounded-xl bg-yellow-950/40 border border-yellow-500/30 text-center">
                  <span className="text-lg font-bold text-yellow-400 block">{selectedDossie.achadosCriticosCount.medio}</span>
                  <span className="text-[10px] text-yellow-200 uppercase font-mono">Médios</span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center">
                  <span className="text-lg font-bold text-emerald-400 block">{selectedDossie.achadosCriticosCount.baixo}</span>
                  <span className="text-[10px] text-emerald-200 uppercase font-mono">Baixos</span>
                </div>
              </div>

              {/* Sample Detected Findings */}
              <div className="space-y-2.5 pt-2">
                {selectedDossie.sampleAchados.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#0f0d26] border border-white/5 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${
                        item.tipo === 'critico' ? 'bg-rose-500 text-white' :
                        item.tipo === 'alto' ? 'bg-amber-500 text-slate-950' :
                        'bg-yellow-500 text-slate-950'
                      }`}>
                        {item.tipo}
                      </span>
                      <h5 className="text-xs font-bold text-white">{item.titulo}</h5>
                    </div>
                    <p className="text-xs text-slate-400 pl-2 border-l border-white/10">{item.impacto}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Multi-Dimensional Audits Highlights */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Destaques da Auditoria 360°
              </h4>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#1a1444] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                    <Scale className="w-3.5 h-3.5 text-purple-400" />
                    <span>Auditoria Jurídica (Lei 14.133/21)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{selectedDossie.destaques.juridico}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1a1444] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Auditoria Técnica & Normas</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{selectedDossie.destaques.tecnico}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1a1444] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Auditoria Comercial & Financeira</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{selectedDossie.destaques.financeiro}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1a1444] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                    <span>Estratégia de Disputa & Lances</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{selectedDossie.destaques.estrategia}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Resumo Conclusivo do Parecer + Call to action */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[11px] font-mono uppercase text-brand-highlight font-bold">
                Síntese do Parecer Final
              </span>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                {selectedDossie.resumoParecer}
              </p>
            </div>

            <button
              onClick={() => onOpenModal(`Auditar Edital de ${selectedDossie.categoryName}`)}
              className="whitespace-nowrap px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold btn-cta-primary flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Gerar Dossiê do Meu Edital</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
