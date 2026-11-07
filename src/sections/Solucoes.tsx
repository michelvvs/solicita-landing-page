import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle, PaperPlaneTilt } from '../components/icons';
import { Reveal } from '../components/motion';
import { SectionHead } from '../components/SectionHead';
import { BrowserFrame, HUES } from '../components/ui';
import { PRODUCTS, waLink } from '../data/content';
import { cn } from '../lib/cn';

const BG: Record<string, string> = {
  violet: 'from-violet/60 via-brand-accent/40 to-aqua/40',
  fuchsia: 'from-fuchsia/35 via-violet/30 to-brand-accent/30',
  aqua: 'from-aqua/60 via-brand-accent/40 to-violet/40',
};

export function Solucoes({ onChoose }: { onChoose: (subject: string) => void }) {
  return (
    <section id="solucoes" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          index="03"
          label="Nossas soluções"
          title={
            <>
              Sistemas que nascem do <span className="marker">campo</span>, não do papel.
            </>
          }
          lead="O SOL é o nosso principal sistema. Ao lado dele, mais duas soluções próprias, uma para vender e outra para precificar."
        />

        <div className="mt-20 space-y-28">
          {PRODUCTS.map((p, i) => {
            const hue = HUES[p.hue as keyof typeof HUES];
            const flip = i % 2 === 1;
            return (
              <article key={p.key} id={p.key} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <Reveal x={flip ? 30 : -30} y={0} className={cn('lg:col-span-7', flip && 'lg:order-2')}>
                  <div className="relative">
                    <div aria-hidden className={cn('absolute -inset-3 rounded-2xl bg-gradient-to-br opacity-80 blur-xl', BG[p.hue])} />
                    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="relative">
                      <BrowserFrame src={p.img} alt={`${p.name}: tela do sistema`} url={p.url} />
                    </motion.div>
                  </div>
                </Reveal>

                <Reveal x={flip ? -30 : 30} y={0} className={cn('lg:col-span-5', flip && 'lg:order-1')}>
                  <p className={cn('inline-block rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-wider', hue.chip)}>{p.tag}</p>
                  <h3 className="mt-4 font-display text-[44px] leading-none text-brand-dark">{p.name}</h3>
                  <p className="mt-1.5 text-[15px] font-semibold text-mute">{p.full}</p>
                  <p className="mt-5 text-[16.5px] leading-relaxed text-ink/85">{p.text}</p>
                  <ul className="mt-6 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-[15px] leading-snug text-ink/90">
                        <CheckCircle size={20} weight="fill" className={cn('mt-0.5 shrink-0', hue.text)} aria-hidden /> {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    {'href' in p.cta ? (
                      <a href={p.cta.href} target="_blank" rel="noreferrer" className="btn-cta group">
                        {p.cta.label} <ArrowUpRight size={18} weight="bold" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <a
                        href={waLink(`Olá! Quero conhecer o ${p.name}.`)}
                        onClick={(e) => { e.preventDefault(); onChoose(p.name); }}
                        className="btn-primary"
                      >
                        <PaperPlaneTilt size={18} weight="fill" /> {p.cta.label}
                      </a>
                    )}
                  </div>
                  {p.key === 'sol' && <p className="mt-3 text-[13px] text-mute">Passo a passo, telas, planos e valores na página do SOL.</p>}
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
