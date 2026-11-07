import { motion } from 'motion/react';
import { Clock, FileMagnifyingGlass, KanbanIcon, UsersThree } from '../components/icons';
import { CountUp, item, stagger } from '../components/motion';
import { HUES, IconChip, type Hue } from '../components/ui';
import { NUMBERS } from '../data/content';
import { cn } from '../lib/cn';

const META = [
  { icon: Clock, hue: 'violet' as Hue, to: 20, prefix: '~' },
  { icon: FileMagnifyingGlass, hue: 'indigo' as Hue, to: 18, prefix: '' },
  { icon: KanbanIcon, hue: 'blue' as Hue, to: 13, prefix: '' },
  { icon: UsersThree, hue: 'aqua' as Hue, to: 7, prefix: '' },
];

export function Numbers() {
  return (
    <section aria-label="A Solicita em números" className="relative z-10 -mt-16">
      <div className="wrap">
        <motion.dl
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4"
        >
          {NUMBERS.map((n, i) => {
            const m = META[i];
            return (
              <motion.div
                key={n.unit}
                variants={item}
                whileHover={{ y: -5 }}
                className={cn('relative overflow-hidden rounded-lg bg-white p-5 shadow-[0_14px_34px_-18px_rgba(41,35,92,0.45)] ring-1 ring-rule sm:p-6')}
              >
                <span aria-hidden className={cn('absolute inset-x-0 top-0 h-1', HUES[m.hue].bar)} />
                <IconChip icon={m.icon} hue={m.hue} size="sm" />
                <dt className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-[44px] leading-none text-brand-dark sm:text-[52px]">
                    {m.prefix}
                    <CountUp to={m.to} />
                  </span>
                  <span className={cn('text-[14px] font-semibold', HUES[m.hue].text)}>{n.unit}</span>
                </dt>
                <dd className="mt-3 text-[13.5px] leading-snug text-mute">{n.label}</dd>
              </motion.div>
            );
          })}
        </motion.dl>
      </div>
    </section>
  );
}
