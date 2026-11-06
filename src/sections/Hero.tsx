import { ArrowRight } from 'lucide-react';
import { SolWindow } from '../components/SolWindow';
import { NUMBERS } from '../data/content';

export function Hero() {
  return (
    <section id="topo" className="pt-28 sm:pt-32">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <p className="eyebrow">Soluções em licitações públicas</p>
          <h1 className="mt-5 text-[42px] leading-[1.05] text-brand-dark sm:text-[58px]">
            Disputar licitação pública com segurança é questão de método.
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-mute">
            A Solicita reúne quase vinte anos de pregões e concorrências em um sistema: o{' '}
            <strong className="font-semibold text-ink">SOL</strong>. Ele analisa o edital, aponta os riscos e acompanha
            cada etapa, da oportunidade até a entrega do objeto.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#sol" className="btn-primary">
              Conhecer o SOL <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contato" className="btn-secondary">
              Falar com a equipe
            </a>
          </div>
          <p className="mt-8 text-[13px] text-mute">
            Lei 14.133/2021 · Jurisprudência do TCU · Atendimento em todo o Brasil
          </p>
        </div>

        <div className="lg:col-span-6 lg:pl-8">
          <SolWindow className="mx-auto max-w-[520px] pb-4 pr-4 lg:mx-0" />
        </div>
      </div>

      {/* faixa de números */}
      <div className="wrap mt-20 sm:mt-24">
        <dl className="grid grid-cols-2 border-y border-rule lg:grid-cols-4">
          {NUMBERS.map((n, i) => (
            <div
              key={n.unit}
              className={`px-1 py-7 sm:px-6 ${i % 2 === 1 ? 'border-l border-rule' : ''} ${
                i >= 2 ? 'border-t border-rule lg:border-t-0' : ''
              } ${i > 0 ? 'lg:border-l lg:border-rule' : ''} ${i === 0 ? 'lg:pl-0' : ''}`}
            >
              <dt className="flex items-baseline gap-2">
                <span className="font-display text-[48px] leading-none text-brand-dark sm:text-[56px]">{n.value}</span>
                <span className="text-[15px] font-semibold text-brand-accent">{n.unit}</span>
              </dt>
              <dd className="mt-3 max-w-[240px] text-[14px] leading-snug text-mute">{n.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
