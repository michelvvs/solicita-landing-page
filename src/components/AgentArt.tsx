import { motion } from 'motion/react';
import { ChartLineUp, FileMagnifyingGlass, Gavel, KanbanIcon, Scales, ShieldCheck, type Icon } from './icons';
import { cn } from '../lib/cn';

/** O "sol" do SOL: disco com raios girando devagar. Serve de avatar do agente. */
export function SunMark({ className, rays = true }: { className?: string; rays?: boolean }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <radialGradient id="sunfill" cx="40%" cy="35%" r="75%">
          <stop offset="0" stopColor="#FFE08A" />
          <stop offset=".55" stopColor="#FFB62E" />
          <stop offset="1" stopColor="#FF7A1A" />
        </radialGradient>
      </defs>
      {rays && (
        <g className="origin-center animate-spin-slow" style={{ transformOrigin: '60px 60px' }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <rect key={i} x="57.5" y="4" width="5" height={i % 2 ? 11 : 17} rx="2.5" fill="#FFB62E" transform={`rotate(${(i * 360) / 16} 60 60)`} opacity={i % 2 ? 0.55 : 0.95} />
          ))}
        </g>
      )}
      <circle cx="60" cy="60" r="31" fill="url(#sunfill)" />
      <path d="M46 56h28M46 64h20" stroke="#7A3A00" strokeOpacity=".55" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

const ORBIT: { icon: Icon; label: string; hue: string }[] = [
  { icon: FileMagnifyingGlass, label: 'Analisa', hue: 'bg-aqua text-brand-dark' },
  { icon: Gavel, label: 'Impugna', hue: 'bg-fuchsia text-white' },
  { icon: ShieldCheck, label: 'Habilita', hue: 'bg-violet text-white' },
  { icon: ChartLineUp, label: 'Precifica', hue: 'bg-sun text-brand-dark' },
  { icon: KanbanIcon, label: 'Acompanha', hue: 'bg-brand-accent text-white' },
  { icon: Scales, label: 'Recorre', hue: 'bg-white text-brand-primary' },
];

/** Agente no centro, tarefas orbitando: cada chip é uma coisa que a IA faz por você. */
export function AgentOrbit({ className }: { className?: string }) {
  return (
    <div className={cn('relative mx-auto aspect-square w-full max-w-[520px]', className)} role="img" aria-label="O agente de IA do SOL e as tarefas que ele executa">
      <div aria-hidden className="absolute inset-[12%] rounded-full border border-dashed border-white/25" />
      <div aria-hidden className="absolute inset-[28%] rounded-full border border-white/15" />
      <div className="absolute inset-[34%]">
        <SunMark className="h-full w-full drop-shadow-[0_0_40px_rgba(255,182,46,0.55)]" />
      </div>
      <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}>
        {ORBIT.map((o, i) => {
          const a = (i / ORBIT.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(a) * 41;
          const y = 50 + Math.sin(a) * 41;
          return (
            <div key={o.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="flex flex-col items-center gap-1.5">
                <span className={cn('flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg sm:h-16 sm:w-16', o.hue)}>
                  <o.icon size={30} weight="duotone" />
                </span>
                <span className="rounded-full bg-black/25 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">{o.label}</span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
