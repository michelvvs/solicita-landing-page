import * as Accordion from '@radix-ui/react-accordion';
import { Plus } from '../components/icons';
import { SectionHead } from '../components/SectionHead';
import { FAQ } from '../data/content';

export function Faq() {
  return (
    <section className="bg-gradient-to-b from-paper to-ice/70 py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead index="07" label="Dúvidas" title={<>Perguntas <span className="marker">frequentes</span>.</>} />
          <p className="mt-6 text-[15px] text-mute">
            Não encontrou o que procurava?{' '}
            <a href="#contato" className="font-semibold text-brand-accent underline underline-offset-4">
              Fale com a equipe
            </a>
            .
          </p>
        </div>

        <Accordion.Root type="single" collapsible defaultValue="item-0" className="lg:col-span-8">
          {FAQ.map((f, i) => (
            <Accordion.Item key={f.q} value={`item-${i}`} className="mb-3 rounded-lg bg-white px-5 ring-1 ring-rule data-[state=open]:ring-violet/40">
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left">
                  <span className="font-display text-[21px] leading-snug text-brand-dark">{f.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-soft text-violet transition-all duration-200 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-violet group-data-[state=open]:text-white">
                    <Plus size={16} weight="bold" aria-hidden />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden">
                <p className="max-w-2xl pb-6 text-[16px] leading-relaxed text-ink/80">{f.a}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
