import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Scale, 
  Sparkles, 
  Building2, 
  ShieldCheck, 
  FileCheck,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

interface AuthorityProps {
  onOpenModal: (actionType?: string) => void;
}

export const StoryAuthoritySection: React.FC<AuthorityProps> = ({ onOpenModal }) => {
  return (
    <section id="autoridade" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a081a] via-[#151138] to-[#0a081a]">
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-accent/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Thiago Mattos Profile & Trust Visual Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer decorative glow border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent via-brand-primary to-purple-600 rounded-3xl blur opacity-30 animate-pulse-subtle" />

              <div className="relative rounded-2xl bg-[#141033] border border-brand-accent/40 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
                
                {/* Profile Header */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary via-brand-accent to-purple-600 p-0.5 shadow-glow shrink-0 flex items-center justify-center">
                    <div className="w-full h-full bg-[#141033] rounded-[14px] flex items-center justify-center text-brand-highlight font-extrabold text-2xl">
                      TM
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">
                      Thiago Mattos
                    </h3>
                    <p className="text-xs text-brand-highlight font-semibold">
                      Especialista em Licitações Públicas & Fundador
                    </p>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Quase 20 Anos no Mercado Público
                    </span>
                  </div>
                </div>

                {/* Key Pillars */}
                <div className="space-y-3 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-[#1d1747] border border-white/5 flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">12 Anos em Gases Medicinais & Saúde</strong>
                      <p className="text-slate-300 text-[11px]">Atuação comercial e técnica em contratos hospitalares de alta complexidade em todo o Brasil.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#1d1747] border border-white/5 flex items-start gap-3">
                    <Scale className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">Transição Lei 8.666/93 → Lei 14.133/21</strong>
                      <p className="text-slate-300 text-[11px]">Visão prática de duas gerações da legislação brasileira de contratações públicas.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#1d1747] border border-white/5 flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">Vivência Multidimensional com Órgãos</strong>
                      <p className="text-slate-300 text-[11px]">Relacionamento direto com pregoeiros, fiscais de contrato, procuradores jurídicos e auditores de controle interno.</p>
                    </div>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-brand-primary/40 to-brand-accent/20 border border-brand-accent/30 text-xs text-slate-200 italic leading-relaxed">
                  "Tecnologia, sozinha, não resolve problemas. Ela precisa ser construída por quem conhece profundamente a realidade do mercado. Conhecimento só gera valor quando é compartilhado."
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Purpose */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/40 border border-brand-accent/30 text-brand-highlight text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>Experiência Real no Campo de Batalha</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Uma história construída vivendo a engrenagem das compras públicas todos os dias.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Minha história no universo das licitações não foi construída apenas estudando leis em salas de aula. Ela foi construída enfrentando desafios reais, acompanhando sessões públicas em pregões presenciais e eletrônicos, elaborando recursos decisivos e compreendendo, na prática, como pensam pregoeiros, fiscais e auditores dos Tribunais de Contas.
              </p>

              <p>
                Ao longo de quase duas décadas, participei ativamente de dezenas de certames de alta complexidade — especialmente no exigente setor hospitalar e de gases medicinais —, contribuindo para contratos que somam <strong className="text-white">centenas de milhares de reais em faturamento seguro</strong> para as empresas.
              </p>

              <p>
                Percebi que o maior obstáculo para as empresas não é a falta de produto ou capacidade técnica: é a <strong className="text-white">enorme quantidade de informações, armadilhas contratuais e burocracias repetitivas</strong> que geram inabilitações injustas ou prejuízos operacionais.
              </p>
            </div>

            {/* Why SolicitIA was born */}
            <div className="p-5 rounded-2xl bg-[#17133d] border border-brand-accent/30 space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                Como nasceu a SolicitIA & o Dossiê 360°?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Fiz a mim mesmo uma pergunta decisiva: <em>"Como transformar quase duas décadas de experiência prática em uma tecnologia acessível para que qualquer empresa possa disputar licitações de igual para igual com grandes corporações?"</em>
              </p>
              <p className="text-xs sm:text-sm text-cyan-200 font-medium">
                A resposta foi o desenvolvimento do <strong>Dossiê Premium 360°</strong> e dos <strong>Agentes de IA da SolicitIA</strong>. Cada linha e cada checagem do sistema nasce de uma necessidade real vivenciada em pregões verídicos.
              </p>
            </div>

            {/* Direct consultation CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenModal('Consultoria com Thiago Mattos')}
                className="w-full sm:w-auto btn-cta-primary px-7 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2.5"
              >
                <HeartHandshake className="w-4 h-4 text-cyan-200" />
                <span>Conversar Diretamente com Thiago Mattos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
