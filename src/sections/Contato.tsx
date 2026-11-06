import { useEffect, useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/content';

const SUBJECTS = [
  'Conhecer o SOL',
  'Dossiê 360° avulso',
  'SOL Pro',
  'Consultoria e Enterprise',
  'Outro assunto',
];

const SEGMENTS = [
  'Saúde, medicamentos e gases medicinais',
  'Engenharia, obras e manutenção predial',
  'Tecnologia da informação e serviços contínuos',
  'Fornecimento geral, alimentos e bens de consumo',
  'Outro segmento',
];

const field =
  'w-full rounded-md border border-rule bg-white px-4 py-3 text-[15px] text-ink placeholder:text-mute/60 focus:border-brand-accent focus:outline-none';
const label = 'mb-1.5 block text-[13px] font-semibold text-ink';

export function Contato({ subject }: { subject: string }) {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    company: '',
    segment: SEGMENTS[0],
    subject: SUBJECTS[0],
    note: '',
  });
  const [sent, setSent] = useState(false);

  // quando uma oferta é escolhida na seção de contratação, pré-seleciona o assunto
  useEffect(() => {
    if (subject) setForm((f) => ({ ...f, subject }));
  }, [subject]);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá, equipe Solicita!\n\nAssunto: ${form.subject}\n` +
      `Nome: ${form.name}\nEmpresa: ${form.company || 'Não informada'}\n` +
      `WhatsApp: ${form.whatsapp}\nSegmento: ${form.segment}\n` +
      (form.note ? `Detalhes: ${form.note}\n` : '') +
      `\nVim pelo site da Solicita.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    setSent(true);
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-brand-dark py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="mark-s pointer-events-none absolute -right-28 -top-20 h-[460px] w-[460px] text-white/[0.05]"
      />
      <div className="wrap relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow flex items-center gap-3 !text-sky-300">
            <span>08</span>
            <span aria-hidden className="h-px w-8 bg-white/30" />
            <span>Contato</span>
          </p>
          <h2 className="mt-4 text-[36px] leading-[1.1] text-white sm:text-[46px]">
            Conte qual é o seu próximo edital.
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/75">
            Fale com a equipe da Solicita para conhecer o SOL, pedir um Dossiê 360° ou conversar sobre um certame
            específico. O atendimento continua pelo WhatsApp.
          </p>
          <ul className="mt-8 space-y-2 text-[14.5px] text-white/70">
            <li>Atendimento para empresas de todo o território nacional.</li>
            <li>Seus documentos e estratégias ficam sob sigilo.</li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          {sent ? (
            <div role="status" className="rounded-md bg-white p-8 text-ink sm:p-10">
              <CheckCircle2 className="h-9 w-9 text-sev-baixo" aria-hidden />
              <h3 className="mt-4 text-[28px] text-brand-dark">Mensagem preparada</h3>
              <p className="mt-2 max-w-md text-[15.5px] leading-relaxed text-mute">
                Abrimos o WhatsApp com os seus dados. Se a janela não abriu, verifique o bloqueador de pop-ups e envie
                novamente.
              </p>
              <button type="button" onClick={() => setSent(false)} className="btn-secondary mt-6">
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="rounded-md bg-white p-6 text-ink sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="assunto" className={label}>Assunto</label>
                  <select id="assunto" value={form.subject} onChange={set('subject')} className={field}>
                    {SUBJECTS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                    {!SUBJECTS.includes(form.subject) && <option>{form.subject}</option>}
                  </select>
                </div>
                <div>
                  <label htmlFor="nome" className={label}>Nome completo *</label>
                  <input id="nome" required value={form.name} onChange={set('name')} placeholder="Seu nome" className={field} autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="whats" className={label}>WhatsApp com DDD *</label>
                  <input id="whats" required type="tel" value={form.whatsapp} onChange={set('whatsapp')} placeholder="(00) 90000-0000" className={field} autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="empresa" className={label}>Empresa</label>
                  <input id="empresa" value={form.company} onChange={set('company')} placeholder="Nome da empresa" className={field} autoComplete="organization" />
                </div>
                <div>
                  <label htmlFor="segmento" className={label}>Segmento</label>
                  <select id="segmento" value={form.segment} onChange={set('segment')} className={field}>
                    {SEGMENTS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="nota" className={label}>Link do edital ou descrição (opcional)</label>
                  <textarea id="nota" rows={3} value={form.note} onChange={set('note')} placeholder="Cole o link do edital, o número do pregão ou a sua dúvida" className={`${field} resize-none`} />
                </div>
              </div>
              <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
                <Send className="h-4 w-4" aria-hidden /> Enviar pelo WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
