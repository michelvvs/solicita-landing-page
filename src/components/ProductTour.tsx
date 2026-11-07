import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Pause, Play } from '@phosphor-icons/react';
import { TOUR } from '../data/content';
import { BrowserFrame } from './ui';
import { cn } from '../lib/cn';

const DURATION = 6000;

/** Tour automático pelas telas reais do SOL: troca sozinho, pausa ao passar o mouse. */
export function ProductTour() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hover, setHover] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!playing || hover) return;
    const t = setTimeout(() => {
      setI((v) => (v + 1) % TOUR.length);
      setTick((v) => v + 1);
    }, DURATION);
    return () => clearTimeout(t);
  }, [i, playing, hover]);

  const go = (n: number) => {
    setI(n);
    setTick((v) => v + 1);
  };

  const slide = TOUR[i];
  const running = playing && !hover;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10"
    >
      <div className="relative lg:col-span-8">
        <div aria-hidden className="absolute -inset-3 -z-0 rounded-xl bg-gradient-to-br from-violet/60 via-brand-accent/40 to-aqua/50 opacity-70 blur-xl" />
        <BrowserFrame src={TOUR[0].src} alt="" className="relative" imgClassName="invisible" dark />
        {/* troca animada entre as telas */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[42px] overflow-hidden rounded-b-lg">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={slide.src}
              src={slide.src}
              alt={slide.title}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="lg:col-span-4">
        <ol className="space-y-1.5">
          {TOUR.map((s, n) => (
            <li key={s.src}>
              <button
                type="button"
                onClick={() => go(n)}
                aria-current={n === i}
                className={cn(
                  'group relative w-full overflow-hidden rounded-md px-4 py-3 text-left transition-colors',
                  n === i ? 'bg-white/12 ring-1 ring-white/25' : 'hover:bg-white/[0.06]',
                )}
              >
                <span className="flex items-baseline gap-3">
                  <span className={cn('font-mono text-[12px]', n === i ? 'text-aqua' : 'text-white/40')}>{String(n + 1).padStart(2, '0')}</span>
                  <span className={cn('text-[15.5px] font-semibold leading-snug', n === i ? 'text-white' : 'text-white/65')}>{s.title}</span>
                </span>
                {n === i && (
                  <>
                    <p className="mt-2 pl-8 text-[13.5px] leading-relaxed text-white/70">{s.text}</p>
                    <span className="absolute inset-x-0 bottom-0 h-[3px] bg-white/10">
                      <span
                        key={tick}
                        className="block h-full origin-left bg-gradient-to-r from-violet via-brand-accent to-aqua"
                        style={{
                          animation: running ? `tour-progress ${DURATION}ms linear forwards` : 'none',
                          transform: running ? undefined : 'scaleX(0.0)',
                        }}
                      />
                    </span>
                  </>
                )}
              </button>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="mt-4 inline-flex items-center gap-2 rounded-md px-3 py-2 text-[13px] text-white/70 hover:bg-white/10 hover:text-white"
        >
          {playing ? <Pause size={16} weight="fill" /> : <Play size={16} weight="fill" />}
          {playing ? 'Pausar tour' : 'Retomar tour'}
        </button>
        <p className="mt-3 text-[12px] text-white/45">Telas do ambiente de demonstração do SOL, com dados fictícios.</p>
      </div>
    </div>
  );
}
