import { motion } from 'motion/react';
import { ArrowRight, Brain, ChartLineUp, Files, Lightning, PencilLine, type Icon } from '../components/icons';
import { Reveal, item, stagger } from '../components/motion';
import { CUSTOM } from '../data/content';
import { cn } from '../lib/cn';

const EX_ICONS: { icon: Icon; color: string }[] = [
  { icon: Files, color: 'bg-aqua text-brand-dark' },
  { icon: Brain, color: 'bg-fuchsia text-white' },
  { icon: ChartLineUp, color: 'bg-sun text-brand-dark' },
  { icon: Lightning, color: 'bg-violet text-white' },
];

export function SobMedida({ onStart }: { onStart: () => void }) {
  return (
    <section id="sob-medida" className="relative overflow-hidden bg-[linear-gradient(160deg,#17124a_0%,#2d2e83_58%,#3a2fa8_100%)] py-24 text-white sm:py-32">
      <div aria-hidden className="absolute -left-28 top-16 h-[380px] w-[380px] rounded-full bg-gradient-to-br from-sun/70 to-ember/40 opacity-60" />
      <div aria-hidden className="mark-s pointer-events-none absolute -right-24 top-10 h-[460px] w-[460px] text-white/[0.05]" />
      <div className="wrap relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow flex items-center gap-3 !text-sky-300">
            <span>04</span>
            <span aria-hidden className="h-px w-8 bg-white/30" />
            <span>Soluções sob medida</span>
          </p>
          <h2 className="mt-4 text-[36px] leading-[1.08] sm:text-[52px]">{CUSTOM.title}</h2>
          <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-white/85">{CUSTOM.lead}</p>
          <button type="button" onClick={onStart} className="btn-cta mt-8">
            <PencilLine size={20} weight="duotone" /> Contar o que a minha empresa precisa <ArrowRight size={18} weight="bold" />
          </button>
        </Reveal>

        <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -8% 0px' }} className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CUSTOM.examples.map((e, i) => (
            <motion.li key={e.t} variants={item} whileHover={{ y: -6 }} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
              <span className={cn('flex h-12 w-12 items-center justify-center rounded-xl', EX_ICONS[i].color)}>
                {(() => { const I = EX_ICONS[i].icon; return <I size={26} weight="duotone" />; })()}
              </span>
              <p className="mt-4 font-display text-[22px] leading-tight">{e.t}</p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-white/75">{e.d}</p>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-20">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-wider text-sun">Como funciona um projeto</p>
          </Reveal>
          <motion.ol variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 grid gap-4 md:grid-cols-4">
            {CUSTOM.steps.map((s, i) => (
              <motion.li key={s.t} variants={item} className="relative rounded-2xl bg-white p-6 text-ink">
                <span className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sun to-ember font-display text-[18px] font-semibold text-[#2a1200] shadow">{i + 1}</span>
                <p className="mt-3 font-display text-[24px] leading-tight text-brand-dark">{s.t}</p>
                <p className="mt-2 text-[14.5px] leading-snug text-mute">{s.d}</p>
                {i < CUSTOM.steps.length - 1 && <ArrowRight aria-hidden size={18} weight="bold" className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-sun md:block" />}
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
