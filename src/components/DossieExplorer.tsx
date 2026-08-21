import React, { useState } from 'react';
import { 
  DOSSIE_SECTIONS, 
  DOSSIE_CATEGORIES, 
  DossieSectionItem 
} from '../data/dossieSections';
import { 
  FileText, 
  Activity, 
  ListChecks, 
  Layers, 
  Scale, 
  FileSearch, 
  Wrench, 
  TrendingUp, 
  DollarSign, 
  Compass, 
  AlertTriangle, 
  HelpCircle, 
  CheckSquare, 
  Clock, 
  ShieldAlert, 
  Zap, 
  Award, 
  CheckCircle2,
  ChevronRight,
  Sparkles,
  BookOpen,
  Eye,
  Check
} from 'lucide-react';

interface DossieExplorerProps {
  onOpenModal: (actionType?: string) => void;
}

// Icon mapping helper
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'FileText': return FileText;
    case 'Activity': return Activity;
    case 'ListChecks': return ListChecks;
    case 'Layers': return Layers;
    case 'Scale': return Scale;
    case 'FileSearch': return FileSearch;
    case 'Wrench': return Wrench;
    case 'TrendingUp': return TrendingUp;
    case 'DollarSign': return DollarSign;
    case 'Compass': return Compass;
    case 'AlertTriangle': return AlertTriangle;
    case 'HelpCircle': return HelpCircle;
    case 'CheckSquare': return CheckSquare;
    case 'Clock': return Clock;
    case 'ShieldAlert': return ShieldAlert;
    case 'Zap': return Zap;
    case 'Award': return Award;
    case 'CheckCircle2': return CheckCircle2;
    default: return FileText;
  }
};

export const DossieExplorer: React.FC<DossieExplorerProps> = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [activeSection, setActiveSection] = useState<DossieSectionItem>(DOSSIE_SECTIONS[1]); // Default to Resumo Executivo

  const filteredSections = selectedCategory === 'todas'
    ? DOSSIE_SECTIONS
    : DOSSIE_SECTIONS.filter(s => s.category === selectedCategory);

  return (
    <section id="dossie" className="py-24 relative overflow-hidden bg-[#0d0a21]">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/40 border border-brand-accent/30 text-brand-highlight text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Estrutura Oficial de Auditoria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            O Dossiê Premium 360° de Licitação
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Uma auditoria técnica, jurídica, operacional e financeira estruturada como um parecer profissional de alto nível, sob a ótica simultânea de <strong className="text-white">7 especialistas seniores</strong>.
          </p>
        </div>

        {/* The 7 Roles Multi-Perspective Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#17133d] via-[#1f1a52] to-[#17133d] border border-brand-accent/30 shadow-xl">
          <div className="text-center md:text-left md:flex items-center justify-between gap-6">
            <div className="space-y-1 mb-4 md:mb-0">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-highlight flex items-center justify-center md:justify-start gap-1.5">
                <BookOpen className="w-4 h-4" />
                Princípio Metodológico SolicitIA
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Como o edital é analisado?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Lemos integralmente o Edital, TR, ETP, Planilhas, Cronogramas e Minuta Contratual sob as 7 lentes mais críticas de uma contratação pública:
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 max-w-lg">
              {[
                { title: 'Pregoeiro Experiente', color: 'border-blue-500/40 text-blue-300 bg-blue-500/10' },
                { title: 'Procurador Jurídico', color: 'border-purple-500/40 text-purple-300 bg-purple-500/10' },
                { title: 'Auditor do TCU/TCE', color: 'border-amber-500/40 text-amber-300 bg-amber-500/10' },
                { title: 'Controlador Interno', color: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10' },
                { title: 'Engenheiro Especialista', color: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10' },
                { title: 'Gestor Público', color: 'border-indigo-500/40 text-indigo-300 bg-indigo-500/10' },
                { title: 'Diretor Comercial', color: 'border-rose-500/40 text-rose-300 bg-rose-500/10' },
              ].map((role, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${role.color}`}
                >
                  {role.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="mt-12 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar">
          {DOSSIE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-sky-500/20 text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] border border-sky-400/60 scale-[1.02]'
                  : 'bg-[#151138] text-slate-300 hover:text-white hover:bg-[#1f1a52] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive 2-Column Explorer: Section List + Detailed Interactive Viewer */}
        <div className="mt-8 grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Scrollable List of Sections */}
          <div className="lg:col-span-5 space-y-3 max-h-[640px] overflow-y-auto pr-2 custom-scroll">
            {filteredSections.map((section) => {
              const Icon = getIcon(section.icon);
              const isSelected = activeSection.id === section.id;
              return (
                <div
                  key={section.id}
                  onClick={() => setActiveSection(section)}
                  className={`cursor-pointer p-4 rounded-xl transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#221c59] border-brand-accent shadow-glow text-white translate-x-1'
                      : 'bg-[#141033]/80 border-white/5 text-slate-300 hover:bg-[#1c164a] hover:border-brand-accent/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-brand-accent text-white'
                            : 'bg-white/5 text-brand-highlight'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono font-bold text-brand-highlight">
                            SEÇÃO {section.number}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white mt-0.5">
                          {section.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                          {section.shortDesc}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${isSelected ? 'text-brand-accent rotate-90 sm:rotate-0' : 'text-slate-500'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Section Deep Dive Card */}
          <div className="lg:col-span-7">
            <div className="sticky top-28 rounded-2xl bg-[#17133d] border border-brand-accent/40 p-6 sm:p-8 shadow-2xl space-y-6">
              
              {/* Header of the Active Section */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white shadow-glow">
                    {React.createElement(getIcon(activeSection.icon), { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-brand-highlight uppercase tracking-wider">
                      Dimensão {activeSection.number} de 18
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {activeSection.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => onOpenModal(`Contratar Dossiê - Seção ${activeSection.number}`)}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-brand-accent hover:bg-brand-highlight hover:text-brand-dark transition-all shadow"
                >
                  Solicitar Dossiê
                </button>
              </div>

              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Objetivo da Análise
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed bg-[#110e2b] p-4 rounded-xl border border-white/5">
                  {activeSection.fullDesc}
                </p>
              </div>

              {/* Key Questions Answered */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-highlight font-mono flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Perguntas Decisivas Respondidas Nesta Seção
                </h4>
                <div className="space-y-2">
                  {activeSection.keyQuestions.map((q, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-brand-accent/20 text-brand-highlight flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono flex items-center gap-2">
                  <CheckSquare className="w-4 h-4" />
                  Entregáveis & Quadros Gerados no Relatório
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {activeSection.deliverables.map((d, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[#120f2e] border border-white/5 flex items-center gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Law references if present */}
              {activeSection.lawReferences && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono flex items-center gap-2">
                    <Scale className="w-4 h-4" />
                    Artigos Especiais da Lei nº 14.133/2021 Auditados
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSection.lawReferences.map((law, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-purple-950/40 text-purple-300 text-xs border border-purple-500/30">
                        {law}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Mandatory Audit Rules Box */}
        <div className="mt-16 rounded-2xl bg-[#141033] border border-brand-accent/30 p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            Regras Obrigatórias e Inegociáveis da Metodologia Dossiê 360°
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6">
            Nenhum dossiê é emitido como mero resumo automatizado. Cada análise segue protocolos estritos de rigor profissional:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-200">
            <div className="p-4 rounded-xl bg-[#1b1642] border border-white/5 space-y-1.5">
              <strong className="text-white block font-semibold">1. Leitura Integral Obrigatória</strong>
              <p className="text-slate-400">Revisão completa do Edital, Termo de Referência, ETP, Planilhas, Cronogramas e Minuta Contratual antes de qualquer conclusão.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1b1642] border border-white/5 space-y-1.5">
              <strong className="text-white block font-semibold">2. Citação da Página e Cláusula</strong>
              <p className="text-slate-400">Cada exigência, irregularidade ou vício encontrado é obrigatoriamente referenciado com o item e página correspondente.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1b1642] border border-white/5 space-y-1.5">
              <strong className="text-white block font-semibold">3. Separação de Fato e Parecer</strong>
              <p className="text-slate-400">Diferenciação clara e inequívoca entre fatos expressos no edital e recomendações/estratégias técnicas da auditoria.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1b1642] border border-white/5 space-y-1.5">
              <strong className="text-white block font-semibold">4. Probabilidade de Êxito</strong>
              <p className="text-slate-400">Para cada vício passível de impugnação, indicamos a chance de êxito (Alta, Média, Baixa) e fundamentação em súmulas do TCU.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1b1642] border border-white/5 space-y-1.5">
              <strong className="text-white block font-semibold">5. Foco em Decisão Estratégica</strong>
              <p className="text-slate-400">Não produzimos relatórios burocráticos vazios. Entregamos respostas práticas: Vale a pena? Qual a margem? Como vencer?</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1b1642] border border-white/5 space-y-1.5">
              <strong className="text-white block font-semibold">6. Seção Achados Críticos</strong>
              <p className="text-slate-400">Destaque imediato dos 10 pontos mais vitais com classificação de risco em 4 cores (🔴, 🟠, 🟡, 🟢).</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
