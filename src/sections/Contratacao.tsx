import { Check } from 'lucide-react';
import { SectionHead } from '../components/SectionHead';
import { OFFERS } from '../data/content';
import { cn } from '../lib/cn';

export function Contratacao({ onChoose }: { onChoose: (subject: string) => void }) {
  return (
    <section id="contratacao" className="py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          index="06"
          label="Contratação"
          title="Do edital único à operação contínua."
          lead="Comece por um edital ou leve o SOL para a rotina da equipe. Os valores abaixo são de referência."
        />

        <div className="mt-14 grid overflow-hidden rounded-md border border-rule bg-sheet lg:grid-cols-3">
          {OFFERS.map((o, i) => (
            <article
              key={o.name}
              className={cn(
                'relative flex flex-col p-7 sm:p-9',
                i > 0 && 'border-t border-rule lg:border-l lg:border-t-0',
                o.featured && 'bg-tint/60',
              )}
            >
              {o.featured && (
                <span className="absolute inset-x-0 top-0 h-1 bg-brand-dark" aria-hidden />
              )}
              <h3 className="text-[26px] leading-tight text-brand-dark">{o.name}</h3>
              <p className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-[44px] leading-none text-brand-dark">{o.price}</span>
              </p>
              <p className="mt-1 text-[13px] text-mute">{o.unit}</p>
              <p className="mt-5 text-[15px] leading-relaxed text-ink/80">{o.text}</p>
              <ul className="mt-6 flex-1 space-y-2.5 border-t border-rule pt-6">
                {o.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-[14.5px] leading-snug text-ink/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
                    {it}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => onChoose(o.name)}
                className={cn('mt-8 w-full', o.featured ? 'btn-primary' : 'btn-secondary')}
              >
                {o.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
