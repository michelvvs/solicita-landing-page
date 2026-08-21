import React, { useState } from 'react';
import { FAQ_DATA, FAQItem } from '../data/faqData';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle } from 'lucide-react';

interface FaqProps {
  onOpenModal: (actionType?: string) => void;
}

export const FaqSection: React.FC<FaqProps> = ({ onOpenModal }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#0d0a21]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/40 border border-brand-accent/30 text-brand-highlight text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes sobre o Dossiê & IA
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Entenda como a metodologia funciona na prática, prazos de entrega, validade jurídica e segurança de dados.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#141033] border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:bg-white/[0.02]"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-100">
                    {item.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-highlight shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p className="bg-[#0f0d28] p-4 rounded-xl border border-brand-accent/10">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-gradient-to-r from-brand-primary/30 to-brand-accent/20 border border-brand-accent/30 space-y-3">
          <h4 className="text-sm font-bold text-white">
            Tem alguma dúvida específica sobre o seu certame?
          </h4>
          <p className="text-xs text-slate-300">
            Nossa equipe de especialistas em licitações está pronta para avaliar seu caso sem compromisso.
          </p>
          <div>
            <button
              onClick={() => onOpenModal('Dúvida Específica FAQ')}
              className="btn-cta-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4 text-cyan-200" />
              <span>Chamar Especialista no WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
