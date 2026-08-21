import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

interface WhatsAppFloatingProps {
  onOpenModal: (actionType?: string) => void;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({ onOpenModal }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="relative bg-[#17133d] border border-brand-accent/40 text-white p-3.5 rounded-2xl shadow-2xl max-w-xs animate-float">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white p-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-start gap-2.5 pr-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-white">
                Dúvida sobre um edital?
              </p>
              <p className="text-[11px] text-slate-300">
                Fale diretamente com nossa equipe técnica de licitações.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => onOpenModal('Atendimento Direto WhatsApp')}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white flex items-center justify-center shadow-glow hover:scale-110 active:scale-95 transition-all duration-200 group relative"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white" />
      </button>
    </div>
  );
};
