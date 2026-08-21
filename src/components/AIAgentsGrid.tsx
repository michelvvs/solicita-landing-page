import React, { useState } from 'react';
import { AI_AGENTS, AIAgentItem } from '../data/aiAgents';
import { 
  ShieldCheck, 
  Scale, 
  FileCheck2, 
  FileSpreadsheet, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Cpu,
  CornerDownRight,
  Send
} from 'lucide-react';

interface AIAgentsGridProps {
  onOpenModal: (actionType?: string) => void;
}

const getAgentIcon = (iconName: string) => {
  switch (iconName) {
    case 'ShieldCheck': return ShieldCheck;
    case 'Scale': return Scale;
    case 'FileCheck2': return FileCheck2;
    case 'FileSpreadsheet': return FileSpreadsheet;
    case 'Zap': return Zap;
    default: return Cpu;
  }
};

export const AIAgentsGrid: React.FC<AIAgentsGridProps> = ({ onOpenModal }) => {
  const [activeAgent, setActiveAgent] = useState<AIAgentItem>(AI_AGENTS[0]);

  return (
    <section id="agentes-ia" className="py-24 relative overflow-hidden bg-[#0a081a]">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-primary/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-accent/15 border border-brand-accent/30 text-brand-highlight text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Ecossistema SolicitIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Agentes de IA Treinados na Prática das Licitações
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Não são bots genéricos. São agentes autônomos calibrados com as regras da Lei 14.133/2021 e a experiência real de quem participou de centenas de pregões.
          </p>
        </div>

        {/* Top Agent Selector Cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {AI_AGENTS.map((agent) => {
            const Icon = getAgentIcon(agent.iconName);
            const isSelected = activeAgent.id === agent.id;
            return (
              <button
                key={agent.id}
                onClick={() => setActiveAgent(agent)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#221b59] border-brand-accent shadow-glow text-white scale-[1.02]'
                    : 'bg-[#120f2e] border-white/5 text-slate-300 hover:bg-[#1a1542] hover:border-brand-accent/30'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? 'bg-brand-accent text-white' : 'bg-white/5 text-brand-highlight'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {agent.popular && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40">
                        Top Escolha
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {agent.name}
                  </h4>
                </div>
                <span className="text-[10px] font-medium text-brand-highlight mt-3 flex items-center gap-1">
                  {isSelected ? 'Em visualização' : 'Clique para ver'}
                  <CornerDownRight className="w-2.5 h-2.5" />
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Agent Spotlight Card */}
        <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#17133d] to-[#120f2e] border border-brand-accent/40 p-6 sm:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Description & Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-brand-primary text-cyan-200 border border-brand-accent/40">
                    {activeAgent.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Modelagem Cognitiva SolicitIA
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeAgent.name}
                </h3>
                <p className="text-sm font-medium text-brand-highlight">
                  {activeAgent.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed pt-1">
                  {activeAgent.description}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Capacidades em Tempo Real
                </h5>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {activeAgent.keyCapabilities.map((cap, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#0f0d26] border border-white/5 flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenModal(`Testar ${activeAgent.name}`)}
                  className="btn-cta-primary px-6 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>Ativar este Agente para Minha Empresa</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Col: I/O Workflow Terminal Mock */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#0c0920] border border-white/10 p-5 space-y-4 shadow-inner">
                
                {/* Mock Terminal Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span>pipeline_exec.solicitia</span>
                </div>

                {/* Input Stream */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block flex items-center gap-1">
                    <span className="text-cyan-400">📥</span> Entradas Recebidas (Uploads / Dados)
                  </span>
                  <div className="space-y-1.5">
                    {activeAgent.inputs.map((inp, idx) => (
                      <div key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-slate-300 font-mono flex items-center justify-between">
                        <span>{inp}</span>
                        <span className="text-[10px] text-emerald-400">Pronto</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Processing Indicator */}
                <div className="py-2 px-3 rounded-lg bg-brand-primary/30 border border-brand-accent/30 flex items-center gap-3 text-xs text-cyan-200">
                  <div className="w-2 h-2 rounded-full bg-brand-highlight animate-ping" />
                  <span className="font-mono text-[11px]">Motor de Auditoria Lei 14.133 Ativo</span>
                </div>

                {/* Output Stream */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block flex items-center gap-1">
                    <span className="text-emerald-400">📤</span> Saídas Estruturadas & Pareceres
                  </span>
                  <div className="space-y-1.5">
                    {activeAgent.outputs.map((out, idx) => (
                      <div key={idx} className="px-3 py-1.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300 font-mono flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
