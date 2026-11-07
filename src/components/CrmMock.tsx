import { cn } from '../lib/cn';

const COLS = [
  { name: 'Novo lead', color: 'bg-aqua', cards: [{ t: 'Distribuidora Vale', v: 'R$ 18 mil', s: 72 }, { t: 'Clínica Horizonte', v: 'R$ 9 mil', s: 58 }] },
  { name: 'Em contato', color: 'bg-violet', cards: [{ t: 'Construtora Alfa', v: 'R$ 42 mil', s: 86 }] },
  { name: 'Proposta', color: 'bg-fuchsia', cards: [{ t: 'Med Gases Sul', v: 'R$ 31 mil', s: 91 }, { t: 'Tecno Serviços', v: 'R$ 14 mil', s: 64 }] },
  { name: 'Fechado', color: 'bg-sev-baixo', cards: [{ t: 'Rede Saúde Norte', v: 'R$ 55 mil', s: 95 }] },
];

/** Ilustração do kanban do SoliCRM, desenhada em HTML (não é uma captura de tela). */
export function CrmMock({ className }: { className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-lg border border-rule bg-white shadow-[0_24px_60px_-20px_rgba(41,35,92,0.45)]', className)} role="img" aria-label="Ilustração do kanban de vendas do SoliCRM">
      <div className="flex items-center gap-3 border-b border-rule bg-[#F1F0F7] px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <i className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#FFC857]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#4CC38A]" />
        </span>
        <span className="mx-auto rounded bg-white px-3 py-1 font-mono text-[11px] text-mute">SoliCRM · Pipeline</span>
        <span className="font-mono text-[10px] text-mute">ilustração</span>
      </div>
      <div className="grid grid-cols-2 gap-3 bg-[#F7F6FB] p-4 sm:grid-cols-4">
        {COLS.map((c) => (
          <div key={c.name} className="rounded-lg bg-white/70 p-2.5">
            <div className="mb-2 flex items-center gap-2">
              <span className={cn('h-2 w-2 rounded-full', c.color)} />
              <p className="text-[11.5px] font-semibold text-ink">{c.name}</p>
            </div>
            <div className="space-y-2">
              {c.cards.map((k) => (
                <div key={k.t} className="rounded-md border border-rule bg-white p-2.5 shadow-sm">
                  <p className="text-[12px] font-semibold leading-tight text-ink">{k.t}</p>
                  <p className="mt-0.5 text-[11px] text-mute">{k.v}</p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-rule">
                      <span className={cn('block h-full rounded-full', c.color)} style={{ width: `${k.s}%` }} />
                    </span>
                    <span className="font-mono text-[10px] text-mute">IA {k.s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
