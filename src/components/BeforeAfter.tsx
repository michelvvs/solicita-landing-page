import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Binoculars, Files, Gavel, Scales, ShieldCheck, KanbanIcon,
  type Icon,
} from './icons';
import { LOSSES } from '../data/content';
import { IconChip, type Hue } from './ui';
import { cn } from '../lib/cn';

const ICONS: { icon: Icon; hue: Hue }[] = [
  { icon: Binoculars, hue: 'violet' },
  { icon: Files, hue: 'indigo' },
  { icon: Gavel, hue: 'blue' },
  { icon: Scales, hue: 'aqua' },
  { icon: ShieldCheck, hue: 'violet' },
  { icon: KanbanIcon, hue: 'blue' },
];

/** Alterna toda a tabela entre "rotina manual" e "com o SOL". */
export function BeforeAfter() {
  const [sol, setSol] = useState(true);

  return (
    <div>
      <div role="tablist" aria-label="Comparar" className="relative inline-flex rounded-full bg-white p-1 ring-1 ring-rule">
        {[
          { v: false, label: 'Rotina manual' },
          { v: true, label: 'Com o SOL' },
        ].map((o) => (
          <button
            key={o.label}
            role="tab"
            aria-selected={sol === o.v}
            onClick={() => setSol(o.v)}
            className={cn('relative z-10 rounded-full px-5 py-2 text-[14px] font-semibold transition-colors', sol === o.v ? 'text-white' : 'text-mute hover:text-ink')}
          >
            {sol === o.v && (
              <motion.span
                layoutId="pill"
                className={cn('absolute inset-0 -z-10 rounded-full', o.v ? 'bg-gradient-to-r from-brand-primary to-brand-accent' : 'bg-mute')}
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            {o.label}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LOSSES.map((row, n) => {
          const { icon, hue } = ICONS[n];
          return (
            <motion.li
              key={row.topic}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -8% 0px' }}
              transition={{ duration: 0.55, delay: (n % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className={cn('rounded-lg border p-6 transition-colors duration-300', sol ? 'border-brand-accent/25 bg-white' : 'border-rule bg-white/60')}
            >
              <div className="flex items-center gap-3">
                <IconChip icon={icon} hue={sol ? hue : 'indigo'} />
                <h3 className="font-display text-[21px] leading-tight text-brand-dark">{row.topic}</h3>
              </div>
              <div className="mt-4 min-h-[66px]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={String(sol)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                    className={cn('text-[15.5px] leading-relaxed', sol ? 'text-ink' : 'text-mute')}
                  >
                    {sol ? row.now : row.before}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
