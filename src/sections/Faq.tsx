import * as Accordion from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';
import { SectionHead } from '../components/SectionHead';
import { FAQ } from '../data/content';

export function Faq() {
  return (
    <section id="duvidas" className="border-t border-rule bg-sheet py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead index="07" label="Dúvidas" title="Perguntas frequentes." />
          <p className="mt-6 text-[15px] text-mute">
            Não encontrou o que procurava?{' '}
            <a href="#contato" className="font-semibold text-brand-accent underline underline-offset-4">
              Fale com a equipe
            </a>
            .
          </p>
        </div>

        <Accordion.Root type="single" collapsible defaultValue="item-0" className="border-t border-rule lg:col-span-8">
          {FAQ.map((f, i) => (
            <Accordion.Item key={f.q} value={`item-${i}`} className="border-b border-rule">
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left">
                  <span className="font-display text-[21px] leading-snug text-brand-dark">{f.q}</span>
                  <Plus
                    aria-hidden
                    className="h-5 w-5 shrink-0 text-brand-accent transition-transform duration-200 group-data-[state=open]:rotate-45"
                  />
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
