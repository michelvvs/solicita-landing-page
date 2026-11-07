import { cn } from '../lib/cn';
import { Reveal } from './motion';

interface Props {
  index: string;
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
}

/** Cabeçalho editorial de seção: número + rótulo, título em serifa, texto de apoio. */
export function SectionHead({ index, label, title, lead, tone = 'light', className }: Props) {
  const dark = tone === 'dark';
  return (
    <Reveal as="section" className={cn('max-w-3xl', className)}>
      <p className={cn('eyebrow flex items-center gap-3', dark && 'text-sky-300')}>
        <span>{index}</span>
        <span aria-hidden className={cn('h-px w-8', dark ? 'bg-white/30' : 'bg-brand-accent/40')} />
        <span>{label}</span>
      </p>
      <h2 className={cn('mt-4 text-[34px] leading-[1.1] sm:text-[44px]', dark ? 'text-white' : 'text-brand-dark')}>
        {title}
      </h2>
      {lead && (
        <p className={cn('mt-5 text-[17px] leading-relaxed', dark ? 'text-white/75' : 'text-mute')}>{lead}</p>
      )}
    </Reveal>
  );
}
