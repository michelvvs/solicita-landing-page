import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAction?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, initialAction = 'Solicitar Dossiê 360°' }) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [company, setCompany] = useState('');
  const [segment, setSegment] = useState('Saúde & Gases Hospitalares');
  const [editalNote, setEditalNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // safe fallback
    }

    // Format WhatsApp redirect message
    const formattedText = encodeURIComponent(
      `*Olá, Thiago Mattos e Equipe Solicita!*\n\n` +
      `Gostaria de atendimento sobre: *${initialAction}*\n` +
      `👤 *Nome:* ${name}\n` +
      `🏢 *Empresa:* ${company || 'Não informado'}\n` +
      `📱 *WhatsApp:* ${whatsapp}\n` +
      `🎯 *Segmento:* ${segment}\n` +
      (editalNote ? `📋 *Detalhes / Edital:* ${editalNote}\n\n` : '\n') +
      `Vim através do site da Solicita e aguardo o contato de vocês!`
    );

    const whatsappUrl = `https://wa.me/5521999999999?text=${formattedText}`;

    // Auto-open WhatsApp after 1.5s
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#151138] border border-brand-accent/40 shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary text-brand-highlight text-xs font-bold border border-brand-accent/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{initialAction}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Fale com Nossos Especialistas
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Preencha os dados abaixo para receber o atendimento personalizado ou a demonstração do Dossiê Premium 360°.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="space-y-1.5">
                <label className="block font-semibold text-slate-200">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f0d26] border border-white/10 focus:border-brand-accent focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block font-semibold text-slate-200">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(00) 90000-0000"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f0d26] border border-white/10 focus:border-brand-accent focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block font-semibold text-slate-200">
                    Nome da Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Tech Soluções Ltda"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f0d26] border border-white/10 focus:border-brand-accent focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block font-semibold text-slate-200">
                  Segmento de Atuação
                </label>
                <select
                  value={segment}
                  onChange={(e) => setSegment(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0f0d26] border border-white/10 focus:border-brand-accent focus:outline-none text-white text-xs sm:text-sm"
                >
                  <option value="Saúde & Gases Hospitalares">Saúde, Medicamentos & Gases Medicinais</option>
                  <option value="Engenharia, Obras & Manutenção">Engenharia, Obras & Manutenção Predial</option>
                  <option value="TI & Serviços Contínuos">Tecnologia da Informação & Serviços Contínuos</option>
                  <option value="Fornecimento Geral & Bens">Fornecimento Geral, Alimentos & Bens de Consumo</option>
                  <option value="Consultoria & Outros">Outro Segmento</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block font-semibold text-slate-200">
                  Link do Edital ou Breve Descrição (Opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Cole aqui o link do Compras.gov, número do pregão ou sua principal dúvida..."
                  value={editalNote}
                  onChange={(e) => setEditalNote(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0f0d26] border border-white/10 focus:border-brand-accent focus:outline-none text-white text-xs sm:text-sm placeholder-slate-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-cta-primary py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2.5 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 text-cyan-200" />
                  <span>Enviar e Abrir Conversa no WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Seus dados estão protegidos sob sigilo absoluto.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-8 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-glow">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                Solicitação Enviada com Sucesso!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Você está sendo redirecionado para o WhatsApp de atendimento da equipe <strong>Solicita</strong>.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-white/10 text-slate-200 text-xs font-semibold hover:bg-white/20 transition-all"
              >
                Fechar Janela
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
