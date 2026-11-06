import * as Tabs from '@radix-ui/react-tabs';
import { ArrowUpRight, Check } from 'lucide-react';
import { SectionHead } from '../components/SectionHead';
import { DOSSIE_GROUPS, PLANNER_STAGES, SEVERITY, SOL_URL, SPECIALISTS } from '../data/content';
import { cn } from '../lib/cn';

const sevColor: Record<string, string> = {
  critico: 'bg-sev-critico',
  alto: 'bg-sev-alto',
  medio: 'bg-sev-medio',
  baixo: 'bg-sev-baixo',
};

const DOSSIE_POINTS = [
  'Leitura integral do edital e dos anexos: Termo de Referência, ETP, planilhas e minutas.',
  'Auditoria sob a ótica de sete especialistas, do pregoeiro ao diretor comercial.',
  'Score de 0 a 10 e parecer: participar, participar com impugnação ou não participar.',
  'Minutas de impugnação e de pedido de esclarecimento prontas para protocolo.',
];

const PLANNER_POINTS = [
  'O card nasce do Dossiê 360° e já traz os dados e prazos do edital.',
  'Avança sozinho quando a etapa cumpre as regras e o responsável valida. Ninguém arrasta card.',
  'Prazos em dias úteis, com feriados nacionais, estaduais e municipais.',
  'Lotes com trilha própria: ganhar um, recorrer em outro e não disputar um terceiro.',
];

function Points({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-[16px] leading-snug text-white/85">
          <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-sky-300" aria-hidden />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Sol() {
  return (
    <section id="sol" className="relative overflow-hidden bg-brand-dark py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="mark-s pointer-events-none absolute -left-24 bottom-[-120px] h-[520px] w-[520px] text-white/[0.04]"
      />
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
          <a href={SOL_URL} target="_blank" rel="noreferrer" className="btn-light shrink-0 self-start lg:self-auto">
            Ver tudo o que o SOL faz <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <Tabs.Root defaultValue="dossie" className="mt-14">
          <Tabs.List aria-label="Ferramentas do SOL" className="flex gap-8 border-b border-white/20">
            {[
              ['dossie', 'Dossiê 360°', 'Análise do edital'],
              ['planner', 'LicitaPlanner', 'Acompanhamento'],
            ].map(([value, name, sub]) => (
              <Tabs.Trigger
                key={value}
                value={value}
                className={cn(
                  'group -mb-px border-b-2 border-transparent pb-4 text-left transition-colors',
                  'data-[state=active]:border-white data-[state=inactive]:text-white/55 hover:text-white',
                )}
              >
                <span className="block font-display text-[26px] leading-none sm:text-[30px]">{name}</span>
                <span className="mt-1.5 block font-mono text-[11px] uppercase tracking-wider opacity-70">{sub}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* DOSSIÊ */}
          <Tabs.Content value="dossie" className="pt-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <h3 className="text-[28px] leading-tight text-white">Entenda o edital antes de decidir.</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-white/70">
                  Em vez de um resumo, uma auditoria completa em 18 dimensões. Cada conclusão cita documento, item e
                  página.
                </p>
                <div className="mt-7">
                  <Points items={DOSSIE_POINTS} />
                </div>

                <p className="mt-9 font-mono text-[12px] uppercase tracking-wider text-sky-300">Achados críticos</p>
                <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3">
                  {SEVERITY.map((s) => (
                    <li key={s.key} className="flex gap-2.5 text-[13.5px] leading-snug">
                      <span aria-hidden className={cn('mt-1 h-3 w-3 shrink-0 rounded-[2px]', sevColor[s.key])} />
                      <span>
                        <span className="font-semibold text-white">{s.label}.</span>{' '}
                        <span className="text-white/65">{s.desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-md bg-white/[0.06] p-6 ring-1 ring-white/15 sm:p-8">
                  <p className="font-mono text-[12px] uppercase tracking-wider text-sky-300">As 18 seções do dossiê</p>
                  <ol className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    {(() => {
                      let n = 0;
                      return DOSSIE_GROUPS.map((g) => (
                        <li key={g.name}>
                          <p className="text-[13px] font-semibold text-white">{g.name}</p>
                          <ul className="mt-2 space-y-1.5">
                            {g.items.map((it) => {
                              n += 1;
                              return (
                                <li key={it} className="flex gap-2.5 text-[13.5px] leading-snug text-white/75">
                                  <span className="w-5 shrink-0 font-mono text-[11px] text-white/45">
                                    {String(n).padStart(2, '0')}
                                  </span>
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
                    <p className="mt-2 text-[14px] leading-relaxed text-white/85">{SPECIALISTS.join(' · ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Content>

          {/* PLANNER */}
          <Tabs.Content value="planner" className="pt-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <h3 className="text-[28px] leading-tight text-white">Acompanhe cada licitação até a entrega.</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-white/70">
                  Um quadro de 13 etapas em que o sistema faz o que não depende de você e pede a sua validação no que
                  depende.
                </p>
                <div className="mt-7">
                  <Points items={PLANNER_POINTS} />
                </div>
                <p className="mt-7 text-[14px] leading-relaxed text-white/60">
                  Em registro de preços, a entrega acompanha todas as solicitações da ata. O Panorama mostra taxa de
                  vitória, valor ganho e colocação por lote.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-md bg-white/[0.06] p-6 ring-1 ring-white/15 sm:p-8">
                  <p className="font-mono text-[12px] uppercase tracking-wider text-sky-300">As 13 etapas</p>
                  {['Antes da sessão', 'Sessão', 'Depois da sessão'].map((phase) => (
                    <div key={phase} className="mt-5 first:mt-4">
                      <p className="mb-2 text-[12px] text-white/55">{phase}</p>
                      <ol className="grid gap-2 sm:grid-cols-2">
                        {PLANNER_STAGES.filter((s) => s.phase === phase).map((s) => (
                          <li
                            key={s.n}
                            className="flex items-center gap-3 rounded border border-white/15 px-3 py-2.5 text-[14px] text-white/90"
                          >
                            <span className="font-mono text-[12px] text-sky-300">{String(s.n).padStart(2, '0')}</span>
                            {s.name}
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                  <p className="mt-6 border-t border-white/15 pt-4 text-[13px] text-white/60">
                    Em qualquer momento o card pode ser encerrado como cancelado: licitação revogada, anulada, deserta
                    ou fracassada.
                  </p>
                </div>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  );
}
