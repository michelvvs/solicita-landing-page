import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, KanbanIcon, Warning } from '../components/icons';
import { BrowserFrame } from '../components/ui';
import { Reveal } from '../components/motion';

function ScoreCard() {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-white p-4 pr-6 shadow-[0_18px_40px_-14px_rgba(41,35,92,0.5)] ring-1 ring-rule">
      <svg viewBox="0 0 80 80" className="h-[72px] w-[72px] -rotate-90" aria-hidden>
        <circle cx="40" cy="40" r="32" fill="none" stroke="#E9E7F2" strokeWidth="9" />
        <motion.circle
          cx="40" cy="40" r="32" fill="none" stroke="url(#sc)" strokeWidth="9" strokeLinecap="round"
          strokeDasharray="201" initial={{ strokeDashoffset: 201 }} animate={{ strokeDashoffset: 201 * 0.3 }}
          transition={{ duration: 1.6, delay: 0.9, ease: 'easeOut' }}
        />
        <defs>
          <linearGradient id="sc" x1="0" x2="1">
            <stop offset="0" stopColor="#6D4FE0" />
            <stop offset="1" stopColor="#17AFCB" />
          </linearGradient>
        </defs>
      </svg>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-mute">Score do edital</p>
        <p className="font-display text-[34px] leading-none text-brand-dark">7,0<span className="text-[15px] text-mute"> / 10</span></p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* fundo: faixa análoga em diagonal + pontos */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[760px] bg-gradient-to-b from-lilac via-ice/60 to-paper" />
      <div aria-hidden className="dots absolute right-0 top-24 -z-10 h-72 w-96 text-brand-primary/15 [mask-image:linear-gradient(to_left,black,transparent)]" />

      <div className="wrap grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal y={16}>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-primary ring-1 ring-rule">
              <span className="h-2 w-2 rounded-full bg-aqua" /> Soluções em licitações públicas
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-[42px] leading-[1.04] text-brand-dark sm:text-[58px]">
              Disputar licitação pública com segurança é questão de <span className="marker">método</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-mute">
              A Solicita reúne quase vinte anos de pregões e concorrências em um sistema: o{' '}
              <strong className="font-semibold text-brand-primary">SOL</strong>. Ele analisa o edital, aponta os riscos e
              acompanha cada etapa, da oportunidade até a entrega do objeto.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#sol" className="btn-primary group">
              Conhecer o SOL <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} weight="bold" />
            </a>
            <a href="#contato" className="btn-secondary">
              Falar com a equipe
            </a>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-mute">
              {['Lei 14.133/2021', 'Jurisprudência do TCU', 'Todo o Brasil'].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <CheckCircle size={16} weight="fill" className="text-aqua" aria-hidden /> {t}
                </span>
              ))}
            </p>
          </Reveal>
        </div>

        {/* composição visual */}
        <div className="relative lg:col-span-7">
          <div aria-hidden className="absolute -left-4 top-10 -z-0 h-[78%] w-[62%] rotate-[-4deg] rounded-xl bg-violet/90" />
          <div aria-hidden className="absolute -right-6 bottom-0 -z-0 h-48 w-48 rounded-full bg-aqua/80" />
          <div aria-hidden className="absolute -bottom-6 left-24 -z-0 h-24 w-24 rounded-lg bg-brand-accent" />

          <motion.div initial={{ opacity: 0, y: 40, rotate: 1 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="relative z-10">
            <BrowserFrame src="/sol/sol-dossie.jpg" alt="Tela do Dossiê 360° no SOL, com score e achados críticos" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.7 }}
            className="absolute -left-4 bottom-10 z-20 sm:-left-10"
          >
            <div className="animate-float"><ScoreCard /></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.15, duration: 0.7 }}
            className="absolute -right-2 top-6 z-20 sm:-right-6"
          >
            <div className="animate-float-slow flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-[0_18px_40px_-14px_rgba(41,35,92,0.5)] ring-1 ring-rule">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-red-50 text-sev-critico"><Warning size={22} weight="duotone" /></span>
              <div>
                <p className="text-[13px] font-semibold text-ink">2 achados críticos</p>
                <p className="text-[12px] text-mute">Edital, item 10.4.2, p. 18</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.7 }}
            className="absolute -bottom-7 right-6 z-20 hidden sm:block"
          >
            <div className="animate-float flex items-center gap-3 rounded-lg bg-brand-dark px-4 py-3 text-white shadow-[0_18px_40px_-14px_rgba(41,35,92,0.7)]">
              <KanbanIcon size={22} weight="duotone" className="text-aqua" />
              <div>
                <p className="text-[13px] font-semibold">LicitaPlanner</p>
                <p className="text-[12px] text-white/70">Etapa 4 de 13 · Esclarecimento</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="h-24" />
    </section>
  );
}
