import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PLANNER_STAGES, STAGE_INFO } from '../data/content';
import { cn } from '../lib/cn';

const PHASE_HUE: Record<string, { dot: string; text: string }> = {
  'Antes da sessão': { dot: 'bg-aqua', text: 'text-aqua' },
  Sessão: { dot: 'bg-brand-accent', text: 'text-sky-300' },
  'Depois da sessão': { dot: 'bg-violet', text: 'text-[#B7A6FF]' },
};

/** As 13 etapas do LicitaPlanner: avança sozinho, e dá para clicar em qualquer etapa. */
export function PlannerStepper() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setI((v) => (v + 1) % PLANNER_STAGES.length), 3600);
    return () => clearInterval(t);
  }, [auto]);

  const stage = PLANNER_STAGES[i];
  const hue = PHASE_HUE[stage.phase];

  return (
    <div className="rounded-lg bg-white/[0.06] p-6 ring-1 ring-white/15 sm:p-8" onMouseEnter={() => setAuto(false)} onMouseLeave={() => setAuto(true)}>
      <div className="flex items-center justify-between">
        <p className="font-mono text-[12px] uppercase tracking-wider text-aqua">As 13 etapas</p>
        <p className={cn('font-mono text-[12px]', hue.text)}>{stage.phase}</p>
      </div>

      {/* trilha */}
      <ol className="mt-6 flex items-center" aria-label="Etapas do LicitaPlanner">
        {PLANNER_STAGES.map((s, n) => (
          <li key={s.n} className="flex flex-1 items-center last:flex-none">
            <button
              type="button"
              onClick={() => { setI(n); setAuto(false); }}
              aria-label={`Etapa ${s.n}: ${s.name}`}
              aria-current={n === i}
              className="relative flex h-7 w-7 shrink-0 items-center justify-center"
            >
              <span
                className={cn(
                  'h-3 w-3 rounded-full transition-all duration-300',
                  n < i ? 'bg-white' : n === i ? cn('h-5 w-5 ring-4 ring-white/25', PHASE_HUE[s.phase].dot) : 'bg-white/25',
                )}
              />
            </button>
            {n < PLANNER_STAGES.length - 1 && (
              <span className="relative h-[2px] flex-1 bg-white/20">
                <motion.span className="absolute inset-y-0 left-0 bg-white" animate={{ width: n < i ? '100%' : '0%' }} transition={{ duration: 0.4 }} />
              </span>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-6 min-h-[132px] border-t border-white/15 pt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.n}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="flex items-baseline gap-3">
              <span className="font-display text-[44px] leading-none text-white">{String(stage.n).padStart(2, '0')}</span>
              <span className="font-display text-[26px] leading-tight text-white">{stage.name}</span>
            </p>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/75">{STAGE_INFO[stage.n]}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="mt-4 text-[13px] text-white/50">Clique em uma etapa para ver o que o sistema faz nela.</p>
    </div>
  );
}
