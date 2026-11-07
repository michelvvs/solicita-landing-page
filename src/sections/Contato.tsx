import { useEffect, useState } from 'react';
import { CheckCircle, PaperPlaneTilt } from '../components/icons';
import { TimelineIllustration } from '../components/Illustrations';
import { Reveal } from '../components/motion';
import { waLink } from '../data/content';

const SUBJECTS = [
  'Solução sob medida',
  'SOL: agente licitatório com IA',
  'SoliCRM',
  'Precigasmed',
  'Parcerias e outros assuntos',
];

const field = 'w-full rounded-lg border border-rule bg-white px-4 py-3 text-[15px] text-ink placeholder:text-mute/60 focus:border-brand-accent focus:outline-none';
const label = 'mb-1.5 block text-[13px] font-semibold text-ink';

export function Contato({ subject }: { subject: string }) {
  const [f, setF] = useState({ name: '', whatsapp: '', company: '', subject: SUBJECTS[0], note: '' });
  const [sent, setSent] = useState(false);

  // quando um produto é escolhido na seção de soluções, pré-seleciona o assunto
  useEffect(() => {
    if (subject) setF((v) => ({ ...v, subject }));
  }, [subject]);

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF((v) => ({ ...v, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      waLink(`Olá, equipe Solicita!\n\nAssunto: ${f.subject}\nNome: ${f.name}\nEmpresa: ${f.company || 'Não informada'}\nWhatsApp: ${f.whatsapp}\n${f.note ? `Sobre o que precisa: ${f.note}\n` : ''}\nVim pelo site da Solicita.`),
      '_blank',
      'noopener',
    );
    setSent(true);
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-[linear-gradient(135deg,#17124a_0%,#2d2e83_50%,#5b3fd0_100%)] py-24 text-white sm:py-32">
      <div aria-hidden className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-sun/80 to-ember/50 opacity-70" />
      <div aria-hidden className="mark-s pointer-events-none absolute -right-24 -top-16 h-[460px] w-[460px] text-white/[0.05]" />
      <div className="wrap relative grid items-start gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow flex items-center gap-3 !text-sky-300">
            <span>06</span>
            <span aria-hidden className="h-px w-8 bg-white/30" />
            <span>Contato</span>
          </p>
          <h2 className="mt-4 text-[36px] leading-[1.08] sm:text-[48px]">
            Vamos conversar sobre o que a sua empresa <span className="underline decoration-sun decoration-4 underline-offset-[6px]">precisa</span>.
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/85">
            Conhecer um dos nossos sistemas ou desenhar uma solução do zero: o primeiro passo é uma conversa. O atendimento continua pelo WhatsApp.
          </p>
          <ul className="mt-7 space-y-2 text-[14.5px] text-white/75">
            <li>Atendimento para empresas de todo o território nacional.</li>
            <li>Seus documentos e estratégias ficam sob sigilo.</li>
          </ul>
          <Reveal className="mt-10 hidden max-w-sm lg:block">
            <TimelineIllustration className="w-full" />
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          {sent ? (
            <div role="status" className="rounded-2xl bg-white p-8 text-ink sm:p-10">
              <CheckCircle size={44} weight="duotone" className="text-sev-baixo" aria-hidden />
              <h3 className="mt-4 text-[28px] text-brand-dark">Conversa aberta no WhatsApp</h3>
              <p className="mt-2 text-[15.5px] leading-relaxed text-mute">Enviamos os seus dados para a equipe. Se a janela não abriu, verifique o bloqueador de pop-ups e envie de novo.</p>
              <button type="button" onClick={() => setSent(false)} className="btn-secondary mt-6">Enviar outra mensagem</button>
            </div>
          ) : (
            <form onSubmit={submit} className="rounded-2xl bg-white p-6 text-ink shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] sm:p-9">
              <h3 className="font-display text-[26px] leading-tight text-brand-dark">Fale com a Solicita</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="assunto" className={label}>Assunto</label>
                  <select id="assunto" value={f.subject} onChange={set('subject')} className={field}>
                    {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="nome" className={label}>Nome *</label>
                  <input id="nome" required value={f.name} onChange={set('name')} placeholder="Seu nome" autoComplete="name" className={field} />
                </div>
                <div>
                  <label htmlFor="whats" className={label}>WhatsApp com DDD *</label>
                  <input id="whats" required type="tel" value={f.whatsapp} onChange={set('whatsapp')} placeholder="(00) 90000-0000" autoComplete="tel" className={field} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="empresa" className={label}>Empresa</label>
                  <input id="empresa" value={f.company} onChange={set('company')} placeholder="Nome da empresa" autoComplete="organization" className={field} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="nota" className={label}>Conte o que você precisa</label>
                  <textarea id="nota" rows={4} value={f.note} onChange={set('note')} placeholder="Ex.: hoje controlamos as propostas em planilha e queremos um sistema…" className={`${field} resize-none`} />
                </div>
              </div>
              <button type="submit" className="btn-cta mt-6 w-full">
                <PaperPlaneTilt size={20} weight="fill" aria-hidden /> Enviar pelo WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
