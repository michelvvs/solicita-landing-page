import { motion } from 'motion/react';
import { Buildings, Handshake, Heart, Quotes, Scales, Target, Eye, Brain, Lock, ShieldCheck, UsersThree, ListChecks } from '../components/icons';
import { DocsIllustration } from '../components/Illustrations';
import { Reveal, item, stagger } from '../components/motion';
import { HUES, IconChip, type Hue } from '../components/ui';
import { SectionHead } from '../components/SectionHead';
import { FACTS, GOALS, MISSION, VALUES } from '../data/content';
import { cn } from '../lib/cn';

const FACT_META: { icon: typeof Buildings; hue: Hue }[] = [
  { icon: Buildings, hue: 'violet' },
  { icon: Scales, hue: 'blue' },
  { icon: Handshake, hue: 'aqua' },
];

const VALUE_META: { icon: typeof Brain; hue: Hue }[] = [
  { icon: Brain, hue: 'violet' },
  { icon: Eye, hue: 'aqua' },
  { icon: UsersThree, hue: 'fuchsia' },
  { icon: Lock, hue: 'blue' },
  { icon: ShieldCheck, hue: 'sun' },
];

export function Sobre() {
  return (
    <section className="py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHead
            index="01"
            label="Sobre a Solicita"
            title={
              <>
                Uma empresa criada por quem viveu a <span className="marker marker-violet">engrenagem</span> das compras públicas.
              </>
            }
          />
          <Reveal className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink/85">
            <p>
              A Solicita nasceu da prática do seu fundador, Thiago Mattos. Em quase duas décadas, ele acompanhou sessões públicas em pregões presenciais e eletrônicos, redigiu recursos decisivos e aprendeu como pensam pregoeiros, fiscais e auditores dos Tribunais de Contas, principalmente no exigente setor hospitalar e de gases medicinais.
            </p>
            <p>
              A conclusão foi simples. O maior obstáculo das empresas raramente é o produto ou a capacidade técnica. É a quantidade de informações, de armadilhas contratuais e de burocracia repetitiva que gera inabilitações injustas e prejuízo na execução.
            </p>
            <p>
              Daí veio a pergunta que guia a empresa: como transformar essa experiência em tecnologia acessível? A resposta virou sistemas, e a mesma lógica serve para qualquer processo que a sua empresa ainda faça no braço.
            </p>
          </Reveal>

          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 grid gap-4 sm:grid-cols-3">
            {FACTS.map((f, i) => (
              <motion.li key={f.t} variants={item} whileHover={{ y: -4 }} className="rounded-lg bg-white p-5 ring-1 ring-rule">
                <IconChip icon={FACT_META[i].icon} hue={FACT_META[i].hue} />
                <p className="mt-4 font-display text-[22px] leading-tight text-brand-dark">{f.t}</p>
                <p className="mt-2 text-[14px] leading-snug text-mute">{f.d}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <aside className="lg:col-span-5">
          <Reveal x={30} y={0} className="sticky top-32">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-dark via-brand-primary to-[#3b3fa8] p-8 text-white sm:p-10">
              <div aria-hidden className="mark-s pointer-events-none absolute -right-20 -top-16 h-[340px] w-[340px] text-white/[0.06]" />
              <DocsIllustration className="relative mx-auto w-full max-w-[340px]" />
              <Quotes size={34} weight="fill" className="relative mt-6 text-sun" aria-hidden />
              <blockquote className="relative mt-2 font-display text-[25px] leading-[1.25] sm:text-[28px]">
                Tecnologia, sozinha, não resolve problemas. Ela precisa ser construída por quem conhece profundamente a realidade do mercado.
              </blockquote>
              <p className="relative mt-5 text-[14px] text-white/70">
                <span className="font-semibold text-white">Thiago Mattos</span> · Fundador
              </p>
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}

export function Valores() {
  return (
    <section id="valores" className="bg-gradient-to-b from-paper via-lilac to-ice/70 py-24 sm:py-32">
      <div className="wrap">
        <SectionHead
          index="02"
          label="Missão, visão e valores"
          title={
            <>
              O que nos <span className="marker">move</span> e como trabalhamos.
            </>
          }
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-dark via-brand-primary to-[#4a37c0] p-8 text-white sm:p-10">
              <div aria-hidden className="mark-s pointer-events-none absolute -right-14 -top-10 h-56 w-56 text-white/[0.07]" />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-sun"><Target size={28} weight="duotone" /></span>
              <p className="mt-5 font-mono text-[12px] uppercase tracking-wider text-sun">Missão</p>
              <p className="mt-2 font-display text-[26px] leading-snug sm:text-[30px]">{MISSION.mission}</p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="h-full rounded-2xl bg-white p-8 ring-1 ring-rule sm:p-10">
              <IconChip icon={Eye} hue="fuchsia" size="lg" />
              <p className="mt-5 font-mono text-[12px] uppercase tracking-wider text-fuchsia">Visão</p>
              <p className="mt-2 font-display text-[26px] leading-snug text-brand-dark sm:text-[30px]">{MISSION.vision}</p>
            </article>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-brand-accent"><ListChecks size={16} weight="bold" /> Nossos objetivos</p>
              <ol className="mt-5 space-y-4">
                {GOALS.map((g, i) => (
                  <li key={g} className="flex gap-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sun to-ember font-display text-[15px] font-semibold text-[#2a1200]">{i + 1}</span>
                    <span className="text-[15.5px] leading-snug text-ink/85">{g}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <p className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-brand-accent"><Heart size={16} weight="bold" /> Nossos valores</p>
            <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -8% 0px' }} className="mt-5 grid gap-4 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <motion.li key={v.t} variants={item} whileHover={{ y: -5 }} className={cn('relative overflow-hidden rounded-xl bg-white p-6 ring-1 ring-rule', i === VALUES.length - 1 && 'sm:col-span-2')}>
                  <span aria-hidden className={cn('absolute inset-y-0 left-0 w-1', HUES[VALUE_META[i].hue].bar)} />
                  <div className="flex items-start gap-4">
                    <IconChip icon={VALUE_META[i].icon} hue={VALUE_META[i].hue} />
                    <div>
                      <h3 className="font-display text-[22px] leading-tight text-brand-dark">{v.t}</h3>
                      <p className="mt-1.5 text-[14.5px] leading-snug text-mute">{v.d}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
