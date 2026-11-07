import { motion } from 'motion/react';
import { ChartLineUp, FileMagnifyingGlass, FileText, Gavel, ShieldCheck, type Icon } from '../components/icons';
import { item, stagger } from '../components/motion';
import { HUES, IconChip, type Hue } from '../components/ui';
import { SectionHead } from '../components/SectionHead';
import { AGENTS } from '../data/content';
import { cn } from '../lib/cn';

const META: { icon: Icon; hue: Hue }[] = [
  { icon: FileMagnifyingGlass, hue: 'aqua' },
  { icon: Gavel, hue: 'violet' },
  { icon: ShieldCheck, hue: 'blue' },
  { icon: FileText, hue: 'indigo' },
  { icon: ChartLineUp, hue: 'violet' },
];

export function Agentes() {
  return (
    <section className="bg-gradient-to-b from-paper via-lilac to-paper py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          index="05"
          label="Agentes de IA"
          title={
            <>
              Um agente para cada <span className="marker marker-violet">etapa</span> da licitação.
            </>
          }
          lead="Agentes especializados trabalham dentro do SOL, cada um com regras de auditoria calibradas em pregões reais."
        />

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6"
        >
          {AGENTS.map((a, i) => {
            const { icon, hue } = META[i];
            const flagship = i === 0;
            return (
              <motion.li
                key={a.name}
                variants={item}
                whileHover={{ y: -6 }}
                className={cn(
                  'group relative flex flex-col overflow-hidden rounded-xl p-7 sm:p-8',
                  flagship
                    ? 'bg-gradient-to-br from-brand-dark via-brand-primary to-[#2a5bb0] text-white md:col-span-2 lg:col-span-4 lg:row-span-1'
                    : 'bg-white ring-1 ring-rule lg:col-span-2',
                )}
              >
                {flagship && <div aria-hidden className="mark-s pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-white/[0.07]" />}
                {!flagship && <span aria-hidden className={cn('absolute inset-y-0 left-0 w-1 transition-all duration-300 group-hover:w-2', HUES[hue].bar)} />}
                <div className="relative flex items-start justify-between">
                  {flagship ? (
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 text-aqua">
                      <FileMagnifyingGlass size={30} weight="duotone" />
                    </span>
                  ) : (
                    <IconChip icon={icon} hue={hue} size="lg" />
                  )}
                  <span className={cn('font-mono text-[12px]', flagship ? 'text-white/50' : 'text-mute')}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className={cn('relative mt-6 text-[25px] leading-tight', flagship ? 'text-white' : 'text-brand-dark')}>{a.name}</h3>
                <p className={cn('relative mt-3 flex-1 text-[15.5px] leading-relaxed', flagship ? 'text-white/80' : 'text-ink/75')}>{a.text}</p>
                <p className={cn('relative mt-5 rounded-md px-3 py-2 text-[13px]', flagship ? 'bg-white/10 text-white/85' : cn(HUES[hue].soft, 'text-ink/80'))}>
                  <span className="font-semibold">Entrega:</span> {a.output}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
