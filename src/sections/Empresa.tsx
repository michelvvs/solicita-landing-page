import { motion } from 'motion/react';
import { Buildings, Handshake, Quotes, Scales } from '../components/icons';
import { DocsIllustration } from '../components/Illustrations';
import { Reveal, item, stagger } from '../components/motion';
import { IconChip, type Hue } from '../components/ui';
import { SectionHead } from '../components/SectionHead';
import { BeforeAfter } from '../components/BeforeAfter';

const FACTS = [
  { icon: Buildings, hue: 'violet' as Hue, t: '12 anos', d: 'em gases medicinais e saúde, em contratos hospitalares de alta complexidade pelo Brasil.' },
  { icon: Scales, hue: 'blue' as Hue, t: 'Duas leis', d: 'vividas na prática: a transição da Lei 8.666/93 para a Lei 14.133/2021.' },
  { icon: Handshake, hue: 'aqua' as Hue, t: 'Os dois lados do balcão', d: 'pregoeiros, fiscais de contrato, procuradores e auditores de controle interno.' },
];

export function Empresa() {
  return (
    <section className="py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHead
            index="01"
            label="A Solicita"
            title={
              <>
                Uma empresa criada por quem viveu a <span className="marker marker-violet">engrenagem</span> das compras públicas.
              </>
            }
          />
          <Reveal className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink/85">
            <p>
              A Solicita nasceu da prática do seu fundador, Thiago Mattos. Em quase duas décadas, ele acompanhou sessões
              públicas em pregões presenciais e eletrônicos, redigiu recursos decisivos e aprendeu como pensam pregoeiros,
              fiscais e auditores dos Tribunais de Contas, principalmente no exigente setor hospitalar e de gases medicinais.
            </p>
            <p>
              A conclusão foi simples. O maior obstáculo das empresas raramente é o produto ou a capacidade técnica. É a
              quantidade de informações, de armadilhas contratuais e de burocracia repetitiva que gera inabilitações injustas
              e prejuízo na execução.
            </p>
            <p>
              Dessa constatação veio a pergunta que guia a empresa: como transformar essa experiência em tecnologia acessível,
              para que qualquer empresa dispute licitações de igual para igual com grandes corporações? A resposta é o{' '}
              <strong className="font-semibold text-brand-primary">SOL</strong>, onde cada checagem nasce de uma necessidade
              vivida em pregão de verdade.
            </p>
          </Reveal>

          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 grid gap-4 sm:grid-cols-3">
            {FACTS.map((f) => (
              <motion.li key={f.t} variants={item} whileHover={{ y: -4 }} className="rounded-lg bg-white p-5 ring-1 ring-rule">
                <IconChip icon={f.icon} hue={f.hue} />
                <p className="mt-4 font-display text-[22px] leading-tight text-brand-dark">{f.t}</p>
                <p className="mt-2 text-[14px] leading-snug text-mute">{f.d}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <aside className="lg:col-span-5">
          <Reveal x={30} y={0} className="sticky top-28">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-dark via-brand-primary to-[#3b3fa8] p-8 text-white sm:p-10">
              <div aria-hidden className="mark-s pointer-events-none absolute -right-20 -top-16 h-[340px] w-[340px] text-white/[0.06]" />
              <DocsIllustration className="relative mx-auto w-full max-w-[360px]" />
              <Quotes size={34} weight="fill" className="relative mt-6 text-aqua" aria-hidden />
              <blockquote className="relative mt-2 font-display text-[25px] leading-[1.25] sm:text-[28px]">
                Tecnologia, sozinha, não resolve problemas. Ela precisa ser construída por quem conhece profundamente a
                realidade do mercado.
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

export function Desafio() {
  return (
    <section className="bg-gradient-to-b from-ice/70 to-lilac py-20 sm:py-28" aria-labelledby="desafio-titulo">
      <div className="wrap">
        <SectionHead
          index="02"
          label="O desafio"
          title={
            <span id="desafio-titulo">
              Onde as licitações costumam <span className="marker">se perder</span>.
            </span>
          }
          lead="Quase sempre é na leitura, no prazo e na rotina, não no preço. Alterne abaixo para ver o que muda com o SOL."
        />
        <div className="mt-10">
          <BeforeAfter />
        </div>
      </div>
    </section>
  );
}
