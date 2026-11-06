import { SectionHead } from '../components/SectionHead';
import { AGENTS } from '../data/content';

export function Agentes() {
  return (
    <section id="agentes" className="border-y border-rule bg-sheet py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead
            index="05"
            label="Agentes de IA"
            title="Um agente para cada etapa da licitação."
            lead="Agentes especializados trabalham dentro do SOL, cada um com regras de auditoria calibradas em pregões reais."
            className="lg:sticky lg:top-28"
          />
        </div>

        <ol className="divide-y divide-rule border-y border-rule lg:col-span-8">
          {AGENTS.map((a, i) => (
            <li key={a.name} className="grid gap-3 py-7 sm:grid-cols-[56px_1fr] sm:gap-6">
              <span className="font-display text-[34px] leading-none text-brand-accent">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-[24px] leading-tight text-brand-dark">{a.name}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-ink/80">{a.text}</p>
                <p className="mt-3 text-[13px] text-mute">
                  <span className="font-semibold text-ink">Entrega:</span> {a.output}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
