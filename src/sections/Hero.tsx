import { motion } from 'motion/react';
import { ArrowRight } from '../components/icons';
import { BrowserFrame } from '../components/ui';
import { CountUp, Reveal, item, stagger } from '../components/motion';
import { NUMBERS } from '../data/content';

const LINKS = [
  { label: 'SOL', href: '#sol' },
  { label: 'SoliCRM', href: '#solicrm' },
  { label: 'Precigasmed', href: '#precigasmed' },
  { label: 'Soluções sob medida', href: '#sob-medida' },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 sm:pt-32">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[820px] bg-gradient-to-b from-ice/80 via-paper to-paper" />
      <div aria-hidden className="dots absolute right-0 top-24 -z-10 h-72 w-96 text-brand-primary/15 [mask-image:linear-gradient(to_left,black,transparent)]" />

      <div className="wrap grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Reveal y={14}>
            <p className="eyebrow">Soluções em licitações públicas</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-[42px] leading-[1.04] text-brand-dark sm:text-[58px]">
              Tecnologia para licitações e <span className="marker">soluções sob medida</span>, por quem vive o mercado.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-mute">
              A Solicita transforma quase vinte anos de pregões e concorrências em sistemas com inteligência artificial, e constrói a solução que a sua empresa precisa quando nenhuma prateleira serve.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contato" className="btn-cta group">
              Quero uma solução sob medida <ArrowRight size={18} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#solucoes" className="btn-secondary">Conhecer nossas soluções</a>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mt-9 text-[13px] uppercase tracking-wider text-mute">Nossas soluções</p>
            <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-semibold text-brand-dark">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="border-b border-brand-accent/40 pb-0.5 transition-colors hover:border-brand-accent hover:text-brand-accent">{l.label}</a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* cascata de telas, alinhada e sem inclinação */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[1/0.95] w-full max-w-[580px] max-sm:aspect-auto">
            <div aria-hidden className="absolute bottom-0 right-0 hidden h-[72%] w-[70%] rounded-md bg-brand-dark sm:block" />
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }} className="absolute left-0 top-[2%] z-10 hidden w-[66%] sm:block">
              <BrowserFrame src="/produtos/precigasmed-proposta.jpg" alt="Precigasmed: proposta de precificação" url="Precigasmed" />
            </motion.div>
            <div className="absolute bottom-[-4%] right-[-3%] z-20 w-[76%] max-sm:static max-sm:w-full">
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
                <BrowserFrame src="/produtos/sol-dossie.jpg" alt="SOL: Dossiê 360° com score e achados críticos" url="sol.solicita.net" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap mt-24 sm:mt-28">
        <motion.dl variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 border-y border-rule lg:grid-cols-4">
          {NUMBERS.map((n, i) => (
            <motion.div key={n.label} variants={item} className={`px-1 py-7 sm:px-6 ${i % 2 === 1 ? 'border-l border-rule' : ''} ${i >= 2 ? 'border-t border-rule lg:border-t-0' : ''} ${i > 0 ? 'lg:border-l lg:border-rule' : ''} ${i === 0 ? 'lg:pl-0' : ''}`}>
              <dt className="flex items-baseline gap-2">
                <span className="font-display text-[48px] leading-none text-brand-dark sm:text-[56px]">
                  {n.static ? n.prefix : (<>{n.prefix}<CountUp to={n.to} /></>)}
                </span>
                {n.unit && <span className="text-[15px] font-semibold text-brand-accent">{n.unit}</span>}
              </dt>
              <dd className="mt-3 max-w-[240px] text-[14px] leading-snug text-mute">{n.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
