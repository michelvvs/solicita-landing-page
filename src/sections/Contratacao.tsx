import { motion } from 'motion/react';
import { CheckCircle, FileMagnifyingGlass, Handshake, Lightning, type Icon } from '../components/icons';
import { item, stagger } from '../components/motion';
import { HUES, IconChip, type Hue } from '../components/ui';
import { SectionHead } from '../components/SectionHead';
import { OFFERS } from '../data/content';
import { cn } from '../lib/cn';

const META: { icon: Icon; hue: Hue }[] = [
  { icon: FileMagnifyingGlass, hue: 'aqua' },
  { icon: Lightning, hue: 'violet' },
  { icon: Handshake, hue: 'blue' },
];

export function Contratacao({ onChoose }: { onChoose: (subject: string) => void }) {
  return (
    <section className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          index="06"
          label="Contratação"
          title={
            <>
              Do edital único à <span className="marker">operação contínua</span>.
            </>
          }
          lead="Comece por um edital ou leve o SOL para a rotina da equipe. Os valores abaixo são de referência."
        />

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -8% 0px' }} className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {OFFERS.map((o, i) => {
            const { icon, hue } = META[i];
            return (
              <motion.article
                key={o.name}
                variants={item}
                whileHover={{ y: -8 }}
                className={cn(
                  'relative flex flex-col rounded-xl p-7 sm:p-9',
                  o.featured
                    ? 'bg-gradient-to-br from-brand-dark via-brand-primary to-[#3a38a8] text-white shadow-[0_30px_60px_-24px_rgba(45,46,131,0.7)] lg:-my-4'
                    : 'bg-white ring-1 ring-rule',
                )}
              >
                {o.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-aqua px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-dark">Para equipes</span>
                )}
                {o.featured ? (
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/15 text-aqua"><Lightning size={24} weight="duotone" /></span>
                ) : null}
                {!o.featured && <IconChip icon={icon} hue={hue} />}
                <h3 className={cn('mt-5 text-[26px] leading-tight', o.featured ? 'text-white' : 'text-brand-dark')}>{o.name}</h3>
                <p className={cn('mt-5 font-display text-[44px] leading-none', o.featured ? 'text-white' : 'text-brand-dark')}>{o.price}</p>
                <p className={cn('mt-1 text-[13px]', o.featured ? 'text-white/65' : 'text-mute')}>{o.unit}</p>
                <p className={cn('mt-5 text-[15px] leading-relaxed', o.featured ? 'text-white/80' : 'text-ink/80')}>{o.text}</p>
                <ul className={cn('mt-6 flex-1 space-y-2.5 border-t pt-6', o.featured ? 'border-white/20' : 'border-rule')}>
                  {o.items.map((it) => (
                    <li key={it} className={cn('flex gap-2.5 text-[14.5px] leading-snug', o.featured ? 'text-white/90' : 'text-ink/90')}>
                      <CheckCircle size={18} weight="fill" className={cn('mt-0.5 shrink-0', o.featured ? 'text-aqua' : HUES[hue].text)} aria-hidden />
                      {it}
                    </li>
                  ))}
                </ul>
                <button type="button" onClick={() => onChoose(o.name)} className={cn('mt-8 w-full', o.featured ? 'btn-light' : 'btn-secondary')}>
                  {o.cta}
                </button>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
