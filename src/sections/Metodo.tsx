import { motion } from 'motion/react';
import { ArrowRight, CalendarCheck, MagnifyingGlass, UsersThree } from '../components/icons';
import { Reveal, item, stagger } from '../components/motion';
import { HUES, IconChip, type Hue } from '../components/ui';
import { SectionHead } from '../components/SectionHead';
import { PRINCIPLES, REAL_EDITAIS } from '../data/content';
import { cn } from '../lib/cn';

const META: { icon: typeof MagnifyingGlass; hue: Hue }[] = [
  { icon: MagnifyingGlass, hue: 'violet' },
  { icon: CalendarCheck, hue: 'blue' },
  { icon: UsersThree, hue: 'aqua' },
];
const ROW_HUE: Hue[] = ['violet', 'blue', 'aqua', 'indigo', 'violet'];

export function Metodo() {
  return (
    <section className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          index="04"
          label="Método"
          title={
            <>
              Cada edital tem as suas regras. O SOL <span className="marker">aprende com todos</span>.
            </>
          }
          lead="O sistema foi desenhado a partir de editais reais, e cada um deles mudou alguma coisa no código."
        />

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -10% 0px' }} className="mt-14 grid gap-5 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <motion.article
              key={p.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-lg bg-white p-7 ring-1 ring-rule"
            >
              <span aria-hidden className={cn('absolute inset-x-0 top-0 h-1.5', HUES[META[i].hue].bar)} />
              <div className="flex items-center justify-between">
                <IconChip icon={META[i].icon} hue={META[i].hue} size="lg" />
                <span className={cn('font-display text-[44px] leading-none opacity-25', HUES[META[i].hue].text)}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-6 text-[24px] leading-tight text-brand-dark">{p.title}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-mute">{p.text}</p>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-20 rounded-xl bg-gradient-to-br from-lilac to-ice p-6 sm:p-10">
          <Reveal>
            <h3 className="text-[28px] text-brand-dark">O que editais reais já nos ensinaram</h3>
            <p className="mt-2 text-[14px] text-mute">Observado em cinco editais de 2026 durante o desenvolvimento do SOL.</p>
          </Reveal>
          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -10% 0px' }} className="mt-8 space-y-3">
            {REAL_EDITAIS.map((r, i) => (
              <motion.li
                key={r.found}
                variants={item}
                className="grid items-center gap-3 rounded-lg bg-white p-4 ring-1 ring-rule sm:grid-cols-[1.3fr_auto_1fr] sm:gap-5 sm:p-5"
              >
                <p className="flex items-start gap-3 text-[15px] leading-snug text-ink">
                  <span className={cn('mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-bold', HUES[ROW_HUE[i]].chip)}>{i + 1}</span>
                  {r.found}
                </p>
                <ArrowRight size={20} weight="bold" className="hidden text-brand-accent sm:block" aria-hidden />
                <p className="text-[15px] font-medium leading-snug text-brand-primary">{r.effect}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
