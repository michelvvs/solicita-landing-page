import { PLANNER_STAGES } from '../data/content';
import { cn } from '../lib/cn';

const FINDINGS = [
  {
    level: 'Crítico',
    color: 'bg-sev-critico',
    title: 'Atestado técnico exigido em 80% do quantitativo',
    ref: 'Edital, item 9.4 · Art. 67 da Lei 14.133/2021',
  },
  {
    level: 'Alto',
    color: 'bg-sev-alto',
    title: 'Contrato de 24 meses sem previsão de reajuste',
    ref: 'Minuta, cláusula 7ª · risco de perda de margem no 2º ano',
  },
  {
    level: 'Médio',
    color: 'bg-sev-medio',
    title: 'Vistoria técnica com data única',
    ref: 'Termo de Referência, item 12.2',
  },
];

/** Representação ilustrativa das duas ferramentas do SOL, desenhada em HTML. */
export function SolWindow({ className }: { className?: string }) {
  const current = 3; // GO / NO-GO
  return (
    <figure className={cn('relative', className)} aria-label="Ilustração da tela do SOL">
      {/* bloco azul deslocado atrás da janela */}
      <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-md bg-brand-dark" />
      <div className="relative overflow-hidden rounded-md border border-rule bg-sheet">
        {/* barra superior */}
        <div className="flex items-center justify-between border-b border-rule bg-paper px-4 py-2.5">
          <div className="flex items-center gap-2">
            <img src="/logo-square.png" alt="" className="h-5 w-5" />
            <span className="text-[13px] font-semibold text-brand-dark">SOL</span>
            <span className="text-[13px] text-mute">/ Dossiê 360°</span>
          </div>
          <span className="font-mono text-[11px] text-mute">exemplo ilustrativo</span>
        </div>

        {/* cabeçalho do dossiê */}
        <div className="flex items-start justify-between gap-4 border-b border-rule px-4 py-4 sm:px-5">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-mute">Pregão eletrônico</p>
            <p className="mt-0.5 text-[15px] font-semibold leading-snug text-ink">Locação de sistema de gases medicinais</p>
            <p className="mt-1.5 inline-block rounded bg-tint px-2 py-0.5 text-[12px] font-medium text-brand-dark">
              Participar com impugnação prévia
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="font-mono text-[11px] uppercase tracking-wider text-mute">Score</p>
            <p className="font-display text-[40px] leading-none text-brand-dark">
              8,8<span className="text-[16px] text-mute">/10</span>
            </p>
          </div>
        </div>

        {/* achados */}
        <div className="px-4 py-4 sm:px-5">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-mute">Achados críticos</p>
          <ul className="divide-y divide-rule">
            {FINDINGS.map((f) => (
              <li key={f.title} className="flex gap-3 py-2.5 first:pt-0 last:pb-0">
                <span className="mt-0.5 flex w-[58px] shrink-0 items-start gap-1.5 text-[11px] font-semibold text-ink">
                  <span aria-hidden className={cn('mt-[3px] h-2.5 w-2.5 shrink-0 rounded-[2px]', f.color)} />
                  {f.level}
                </span>
                <span>
                  <span className="block text-[13.5px] font-medium leading-snug text-ink">{f.title}</span>
                  <span className="block text-[12px] leading-snug text-mute">{f.ref}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* linha do planner */}
        <div className="border-t border-rule bg-paper px-4 py-4 sm:px-5">
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-mute">LicitaPlanner</p>
            <p className="font-mono text-[11px] text-mute">
              etapa {current} de {PLANNER_STAGES.length}
            </p>
          </div>
          <ol className="flex gap-1" aria-label="Etapas do LicitaPlanner">
            {PLANNER_STAGES.map((s) => (
              <li
                key={s.n}
                title={s.name}
                className={cn(
                  'h-1.5 flex-1 rounded-full',
                  s.n < current ? 'bg-brand-primary' : s.n === current ? 'bg-brand-accent' : 'bg-rule',
                )}
              />
            ))}
          </ol>
          <p className="mt-2 text-[12.5px] text-ink">
            <span className="font-semibold">{PLANNER_STAGES[current - 1].name}:</span> aguardando decisão do responsável
          </p>
        </div>
      </div>
    </figure>
  );
}
