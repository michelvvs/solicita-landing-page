import { motion } from 'motion/react';
import { ArrowRight, Buildings, Clock, Handshake, Robot, Sparkle, UsersThree } from '../components/icons';
import { CrmMock } from '../components/CrmMock';
import { BrowserFrame, IconChip, type Hue } from '../components/ui';
import { CountUp, Reveal, item, stagger } from '../components/motion';
import { NUMBERS } from '../data/content';

const CHIPS = [
  { label: 'SOL', sub: 'agente licitatório com IA', href: '#solucoes', color: 'bg-violet text-white' },
  { label: 'SoliCRM', sub: 'CRM e marketing com IA', href: '#solucoes', color: 'bg-fuchsia text-white' },
  { label: 'Precigasmed', sub: 'precificação de gases', href: '#solucoes', color: 'bg-aqua text-brand-dark' },
  { label: 'Sob medida', sub: 'a solução que você precisa', href: '#sob-medida', color: 'bg-sun text-brand-dark' },
];

const NUM_ICONS: { icon: typeof Clock; hue: Hue }[] = [
  { icon: Clock, hue: 'sun' },
  { icon: Robot, hue: 'violet' },
  { icon: Buildings, hue: 'blue' },
  { icon: UsersThree, hue: 'fuchsia' },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-[linear-gradient(135deg,#17124a_0%,#2d2e83_52%,#5b3fd0_100%)] pb-36 pt-[132px] text-white sm:pt-[148px]">
      <div aria-hidden className="absolute -right-24 top-16 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-sun/90 via-ember/70 to-fuchsia/60 opacity-90 blur-[2px] max-lg:opacity-30 lg:-right-10" />
      <div aria-hidden className="absolute -left-20 bottom-10 h-72 w-72 rotate-12 rounded-3xl bg-aqua/25" />
      <div aria-hidden className="dots absolute left-1/3 top-28 h-40 w-64 text-white/20" />
      <div aria-hidden className="mark-s pointer-events-none absolute left-[-60px] top-24 h-[420px] w-[420px] text-white/[0.05]" />

      <div className="wrap relative grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <Reveal y={14}>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-1.5 text-[12.5px] font-semibold text-white ring-1 ring-white/25">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sun opacity-80" /><span className="relative h-2 w-2 rounded-full bg-sun" /></span>
              Soluções em licitações públicas
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-[40px] leading-[1.04] sm:text-[58px]">
              Tecnologia para licitações e <span className="relative whitespace-nowrap"><span className="relative z-10">soluções sob medida</span><span aria-hidden className="absolute inset-x-0 bottom-1 z-0 h-[0.34em] bg-fuchsia/80" /></span>, por quem vive o mercado.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-white/85">
              A Solicita transforma quase vinte anos de pregões e concorrências em sistemas com inteligência artificial, e constrói a solução que a sua empresa precisa quando nenhuma prateleira serve.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contato" className="btn-cta group whitespace-nowrap">
              Quero uma solução sob medida <ArrowRight size={20} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#solucoes" className="btn-ghost-light">
              <Sparkle size={18} weight="fill" /> Conhecer nossas soluções
            </a>
          </Reveal>
          <Reveal delay={0.32}>
            <ul className="mt-9 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {CHIPS.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="group block rounded-xl bg-white/10 p-3 ring-1 ring-white/20 transition hover:-translate-y-1 hover:bg-white/15">
                    <span className={`inline-block rounded-md px-2 py-0.5 text-[12px] font-bold ${c.color}`}>{c.label}</span>
                    <span className="mt-1.5 block text-[11.5px] leading-tight text-white/70">{c.sub}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* pilha de produtos */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[1/0.86] w-full max-w-[600px]">
            <motion.div initial={{ opacity: 0, x: -40, rotate: -9 }} animate={{ opacity: 1, x: 0, rotate: -7 }} transition={{ duration: 0.9, delay: 0.4 }} className="absolute left-0 top-[18%] z-0 hidden w-[62%] sm:block">
              <BrowserFrame src="/produtos/precigasmed-proposta.jpg" alt="Precigasmed: proposta de precificação" url="Precigasmed" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40, rotate: 9 }} animate={{ opacity: 1, x: 0, rotate: 6 }} transition={{ duration: 0.9, delay: 0.55 }} className="absolute right-0 top-0 z-0 hidden w-[58%] sm:block">
              <CrmMock />
            </motion.div>
            <div className="absolute bottom-0 left-1/2 z-10 w-[88%] -translate-x-1/2 max-sm:static max-sm:w-full max-sm:translate-x-0">
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
                <BrowserFrame src="/produtos/sol-dossie.jpg" alt="SOL: Dossiê 360° com score e achados críticos" url="sol.solicita.net" />
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.6 }} className="absolute -bottom-7 right-2 z-20 hidden sm:block">
              <div className="animate-float flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-sun to-ember px-4 py-3 text-[#2a1200] shadow-[0_18px_40px_-14px_rgba(0,0,0,0.55)]">
                <Handshake size={24} weight="duotone" />
                <span className="text-[13px] font-bold leading-tight">Soluções<br />sob medida</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="wrap relative mt-24">
        <motion.dl variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {NUMBERS.map((n, i) => (
            <motion.div key={n.label} variants={item} className="rounded-xl bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur-sm">
              <IconChip icon={NUM_ICONS[i].icon} hue={NUM_ICONS[i].hue} size="sm" />
              <dt className="mt-3 flex items-baseline gap-1.5">
                <span className="font-display text-[44px] leading-none text-white">
                  {n.static ? n.prefix : (<>{n.prefix}<CountUp to={n.to} /></>)}
                </span>
                {n.unit && <span className={`text-[14px] font-semibold ${i === 0 ? 'text-sun' : 'text-aqua'}`}>{n.unit}</span>}
              </dt>
              <dd className="mt-2 text-[13px] leading-snug text-white/70">{n.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
