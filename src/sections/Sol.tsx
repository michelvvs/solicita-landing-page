import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'motion/react';
import {
  ArrowUpRight, Binoculars, CalendarCheck, FileMagnifyingGlass, Files, Gavel, KanbanIcon, ListChecks, UsersThree,
  type Icon,
} from '../components/icons';
import { PlannerStepper } from '../components/PlannerStepper';
import { ProductTour } from '../components/ProductTour';
import { Reveal, item, stagger } from '../components/motion';
import { SectionHead } from '../components/SectionHead';
import { BrowserFrame } from '../components/ui';
import { DOSSIE_GROUPS, SEVERITY, SOL_URL, SPECIALISTS } from '../data/content';
import { cn } from '../lib/cn';

const sevColor: Record<string, string> = {
  critico: 'bg-sev-critico',
  alto: 'bg-sev-alto',
  medio: 'bg-sev-medio',
  baixo: 'bg-sev-baixo',
};

const GROUP_HUE = ['text-aqua', 'text-[#9DB7FF]', 'text-[#7FD3E6]', 'text-[#B7A6FF]', 'text-sky-300'];

const DOSSIE_POINTS: { icon: Icon; t: string }[] = [
  { icon: Files, t: 'Leitura integral do edital e dos anexos: Termo de Referência, ETP, planilhas e minutas.' },
  { icon: UsersThree, t: 'Auditoria sob a ótica de sete especialistas, do pregoeiro ao diretor comercial.' },
  { icon: ListChecks, t: 'Score de 0 a 10 e parecer: participar, participar com impugnação ou não participar.' },
  { icon: Gavel, t: 'Minutas de impugnação e de pedido de esclarecimento prontas para protocolo.' },
];

const PLANNER_POINTS: { icon: Icon; t: string }[] = [
  { icon: FileMagnifyingGlass, t: 'O card nasce do Dossiê 360° e já traz os dados e prazos do edital.' },
  { icon: KanbanIcon, t: 'Avança sozinho quando a etapa cumpre as regras e o responsável valida. Ninguém arrasta card.' },
  { icon: CalendarCheck, t: 'Prazos em dias úteis, com feriados nacionais, estaduais e municipais.' },
  { icon: Binoculars, t: 'Lotes com trilha própria: ganhar um, recorrer em outro e não disputar um terceiro.' },
];

function Points({ items }: { items: { icon: Icon; t: string }[] }) {
  return (
    <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
      {items.map(({ icon: I, t }) => (
        <motion.li key={t} variants={item} className="flex gap-3.5 text-[16px] leading-snug text-white/85">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/10 text-aqua">
            <I size={20} weight="duotone" aria-hidden />
          </span>
          <span className="pt-1.5">{t}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export function Sol() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-[#2a2b88] to-[#17508f] py-24 text-white sm:py-32">
      <div aria-hidden className="mark-s pointer-events-none absolute -left-24 bottom-[-120px] h-[520px] w-[520px] text-white/[0.04]" />
      <div aria-hidden className="dots pointer-events-none absolute right-6 top-10 h-44 w-72 text-white/10" />

      <div className="wrap relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHead
            tone="dark"
            index="03"
            label="O sistema"
            title={
              <>
                SOL <span className="text-white/60">— Sistema de Operações em Licitação</span>
              </>
            }
            lead="Duas ferramentas no mesmo sistema. Os dados do edital são extraídos uma vez e servem às duas: primeiro você entende o certame, depois o acompanha até o fim."
          />
          <a href={SOL_URL} target="_blank" rel="noreferrer" className="btn-light group shrink-0 self-start lg:self-auto">
            Ver tudo o que o SOL faz <ArrowUpRight size={18} weight="bold" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* tour pelas telas reais */}
        <Reveal className="mt-16">
          <p className="mb-6 font-mono text-[12px] uppercase tracking-wider text-aqua">Veja o SOL por dentro</p>
          <ProductTour />
        </Reveal>

        <Tabs.Root defaultValue="dossie" className="mt-24">
          <Tabs.List aria-label="Ferramentas do SOL" className="flex gap-8 border-b border-white/20">
            {[
              ['dossie', 'Dossiê 360°', 'Análise do edital'],
              ['planner', 'LicitaPlanner', 'Acompanhamento'],
            ].map(([value, name, sub]) => (
              <Tabs.Trigger
                key={value}
                value={value}
                className={cn(
                  'group relative -mb-px border-b-2 border-transparent pb-4 text-left transition-colors',
                  'data-[state=active]:border-aqua data-[state=inactive]:text-white/55 hover:text-white',
                )}
              >
                <span className="block font-display text-[26px] leading-none sm:text-[30px]">{name}</span>
                <span className="mt-1.5 block font-mono text-[11px] uppercase tracking-wider opacity-70">{sub}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* DOSSIÊ */}
          <Tabs.Content value="dossie" className="pt-10 data-[state=active]:animate-[fadein_.5s_ease-out]">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <h3 className="text-[28px] leading-tight text-white">Entenda o edital antes de decidir.</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-white/70">
                  Em vez de um resumo, uma auditoria completa em 18 dimensões. Cada conclusão cita documento, item e página.
                </p>
                <div className="mt-7">
                  <Points items={DOSSIE_POINTS} />
                </div>

                <p className="mt-9 font-mono text-[12px] uppercase tracking-wider text-aqua">Achados críticos</p>
                <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3">
                  {SEVERITY.map((s) => (
                    <li key={s.key} className="flex gap-2.5 text-[13.5px] leading-snug">
                      <span aria-hidden className={cn('mt-1 h-3 w-3 shrink-0 rounded-[2px]', sevColor[s.key])} />
                      <span>
                        <span className="font-semibold text-white">{s.label}.</span> <span className="text-white/65">{s.desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-lg bg-white/[0.06] p-6 ring-1 ring-white/15 sm:p-8">
                  <p className="font-mono text-[12px] uppercase tracking-wider text-aqua">As 18 seções do dossiê</p>
                  <ol className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    {(() => {
                      let n = 0;
                      return DOSSIE_GROUPS.map((g, gi) => (
                        <li key={g.name}>
                          <p className={cn('text-[13px] font-semibold', GROUP_HUE[gi])}>{g.name}</p>
                          <ul className="mt-2 space-y-1.5">
                            {g.items.map((it) => {
                              n += 1;
                              return (
                                <li key={it} className="flex gap-2.5 text-[13.5px] leading-snug text-white/80">
                                  <span className="w-5 shrink-0 font-mono text-[11px] text-white/45">{String(n).padStart(2, '0')}</span>
                                  {it}
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      ));
                    })()}
                  </ol>
                  <div className="mt-7 border-t border-white/15 pt-5">
                    <p className="text-[12px] text-white/55">Óticas reproduzidas na análise</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {SPECIALISTS.map((s, i) => (
                        <li
                          key={s}
                          className={cn(
                            'rounded-full px-3 py-1 text-[12.5px] font-medium',
                            ['bg-violet/30 text-[#D6CCFF]', 'bg-brand-accent/30 text-[#BFE0FA]', 'bg-aqua/25 text-[#BDEEF7]'][i % 3],
                          )}
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Content>

          {/* PLANNER */}
          <Tabs.Content value="planner" className="pt-10 data-[state=active]:animate-[fadein_.5s_ease-out]">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <h3 className="text-[28px] leading-tight text-white">Acompanhe cada licitação até a entrega.</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-white/70">
                  Um quadro de 13 etapas em que o sistema faz o que não depende de você e pede a sua validação no que depende.
                </p>
                <div className="mt-7">
                  <Points items={PLANNER_POINTS} />
                </div>
              </div>
              <div className="lg:col-span-7">
                <PlannerStepper />
              </div>
            </div>

            {/* quadro inteiro, em movimento */}
            <div className="mt-12">
              <p className="mb-3 font-mono text-[12px] uppercase tracking-wider text-aqua">O quadro do LicitaPlanner</p>
              <BrowserFrame url="sol.solicita.net/planner" dark>
                <div className="overflow-hidden bg-white">
                  <img
                    src="/sol/sol-quadro-largo.jpg"
                    alt="Quadro do LicitaPlanner com as 13 colunas"
                    loading="lazy"
                    decoding="async"
                    className="block max-w-none animate-pan [--pan:-33%] hover:[animation-play-state:paused] max-md:h-[190px] max-md:[--pan:-70%] md:w-[150%]"
                  />
                </div>
              </BrowserFrame>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  );
}
