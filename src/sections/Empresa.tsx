import { SectionHead } from '../components/SectionHead';
import { LOSSES } from '../data/content';

const FACTS = [
  ['12 anos', 'em gases medicinais e saúde, em contratos hospitalares de alta complexidade pelo Brasil.'],
  ['Duas leis', 'vividas na prática: a transição da Lei 8.666/93 para a Lei 14.133/2021.'],
  ['Os dois lados', 'do balcão: pregoeiros, fiscais de contrato, procuradores e auditores de controle interno.'],
];

export function Empresa() {
  return (
    <>
      <section id="solicita" className="py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHead
              index="01"
              label="A Solicita"
              title="Uma empresa criada por quem viveu a engrenagem das compras públicas."
            />
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink/85">
              <p>
                A Solicita nasceu da prática do seu fundador, Thiago Mattos. Em quase duas décadas, ele acompanhou
                sessões públicas em pregões presenciais e eletrônicos, redigiu recursos decisivos e aprendeu como
                pensam pregoeiros, fiscais e auditores dos Tribunais de Contas, principalmente no exigente setor
                hospitalar e de gases medicinais.
              </p>
              <p>
                A conclusão foi simples. O maior obstáculo das empresas raramente é o produto ou a capacidade técnica.
                É a quantidade de informações, de armadilhas contratuais e de burocracia repetitiva que gera
                inabilitações injustas e prejuízo na execução.
              </p>
              <p>
                Dessa constatação veio a pergunta que guia a empresa: como transformar essa experiência em tecnologia
                acessível, para que qualquer empresa dispute licitações de igual para igual com grandes corporações? A
                resposta é o <strong className="font-semibold text-brand-dark">SOL</strong>, onde cada checagem nasce
                de uma necessidade vivida em pregão de verdade.
              </p>
            </div>

            <dl className="mt-10 divide-y divide-rule border-y border-rule">
              {FACTS.map(([t, d]) => (
                <div key={t} className="grid gap-1 py-4 sm:grid-cols-[150px_1fr] sm:gap-6">
                  <dt className="font-display text-[22px] text-brand-dark">{t}</dt>
                  <dd className="text-[15px] leading-relaxed text-mute">{d}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* painel azul com a marca */}
          <aside className="lg:col-span-5">
            <div className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-md bg-brand-dark p-8 text-white sm:p-10">
              <div
                aria-hidden
                className="mark-s pointer-events-none absolute -right-16 -top-12 h-[360px] w-[360px] text-white/[0.07]"
              />
              <p className="eyebrow relative !text-sky-300">Missão</p>
              <div className="relative">
                <blockquote className="font-display text-[28px] leading-[1.2] sm:text-[32px]">
                  “Tecnologia, sozinha, não resolve problemas. Ela precisa ser construída por quem conhece
                  profundamente a realidade do mercado.”
                </blockquote>
                <p className="mt-6 text-[14px] text-white/70">
                  <span className="font-semibold text-white">Thiago Mattos</span>
                  <br />
                  Fundador e especialista em licitações públicas
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* onde as licitações se perdem */}
      <section className="border-y border-rule bg-sheet py-20 sm:py-24" aria-labelledby="perdas-titulo">
        <div className="wrap">
          <SectionHead
            index="02"
            label="O desafio"
            title={<span id="perdas-titulo">Onde as licitações costumam se perder.</span>}
            lead="Quase sempre é na leitura, no prazo e na rotina, não no preço. É nesses pontos que o SOL atua."
          />
          <div className="mt-12 overflow-hidden rounded-md border border-rule">
            <div className="hidden grid-cols-[220px_1fr_1fr] bg-paper text-[12px] font-semibold uppercase tracking-wider text-mute sm:grid">
              <div className="px-5 py-3">Ponto crítico</div>
              <div className="border-l border-rule px-5 py-3">Na rotina manual</div>
              <div className="border-l border-rule px-5 py-3 text-brand-accent">Com o SOL</div>
            </div>
            {LOSSES.map((row) => (
              <div key={row.topic} className="grid border-t border-rule max-sm:[&:nth-child(2)]:border-t-0 sm:grid-cols-[220px_1fr_1fr]">
                <div className="px-5 pb-1 pt-4 font-semibold text-brand-dark sm:py-4">{row.topic}</div>
                <div className="px-5 py-1 text-[15px] leading-snug text-mute sm:border-l sm:border-rule sm:py-4">
                  <span className="mr-2 font-mono text-[11px] uppercase text-mute/70 sm:hidden">Manual</span>
                  {row.before}
                </div>
                <div className="px-5 pb-4 pt-1 text-[15px] leading-snug text-ink sm:border-l sm:border-rule sm:py-4">
                  <span className="mr-2 font-mono text-[11px] uppercase text-brand-accent sm:hidden">SOL</span>
                  {row.now}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
