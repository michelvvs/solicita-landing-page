import { SectionHead } from '../components/SectionHead';
import { PRINCIPLES, REAL_EDITAIS } from '../data/content';

export function Metodo() {
  return (
    <section id="metodo" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          index="04"
          label="Método"
          title="Cada edital tem as suas regras. O SOL aprende com todos."
          lead="O sistema foi desenhado a partir de editais reais, e cada um deles mudou alguma coisa no código."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <article key={p.title} className="border-t-2 border-brand-dark pt-5">
              <p className="font-mono text-[12px] text-brand-accent">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 text-[24px] leading-tight text-brand-dark">{p.title}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-mute">{p.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-[26px] text-brand-dark">O que editais reais já nos ensinaram</h3>
          <p className="mt-2 text-[14px] text-mute">
            Observado em cinco editais de 2026 durante o desenvolvimento do SOL.
          </p>
          <div className="mt-6 overflow-hidden rounded-md border border-rule bg-sheet">
            <div className="hidden grid-cols-[1.4fr_1fr] bg-paper text-[12px] font-semibold uppercase tracking-wider text-mute sm:grid">
              <div className="px-5 py-3">O que o edital dizia</div>
              <div className="border-l border-rule px-5 py-3 text-brand-accent">O que o SOL passou a fazer</div>
            </div>
            {REAL_EDITAIS.map((r) => (
              <div key={r.found} className="grid border-t border-rule max-sm:[&:nth-child(2)]:border-t-0 sm:grid-cols-[1.4fr_1fr]">
                <p className="px-5 py-4 text-[15px] leading-snug text-ink">{r.found}</p>
                <p className="px-5 pb-4 text-[15px] leading-snug text-mute sm:border-l sm:border-rule sm:py-4">
                  {r.effect}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
