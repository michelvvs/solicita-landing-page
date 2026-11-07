import type { Icon } from '@phosphor-icons/react';
import { cn } from '../lib/cn';
import { LazyImage } from './motion';

export type Hue = 'violet' | 'indigo' | 'blue' | 'aqua' | 'fuchsia' | 'sun';

export const HUES: Record<Hue, { chip: string; text: string; bar: string; ring: string; soft: string }> = {
  violet: { chip: 'bg-violet-soft text-violet', text: 'text-violet', bar: 'bg-violet', ring: 'ring-violet/25', soft: 'bg-lilac' },
  indigo: { chip: 'bg-brand-primary/10 text-brand-primary', text: 'text-brand-primary', bar: 'bg-brand-primary', ring: 'ring-brand-primary/25', soft: 'bg-brand-primary/[0.06]' },
  blue: { chip: 'bg-ice text-brand-accent', text: 'text-brand-accent', bar: 'bg-brand-accent', ring: 'ring-brand-accent/25', soft: 'bg-ice' },
  aqua: { chip: 'bg-aqua-soft text-[#0e8aa3]', text: 'text-[#0e8aa3]', bar: 'bg-aqua', ring: 'ring-aqua/30', soft: 'bg-aqua-soft' },
  fuchsia: { chip: 'bg-fuchsia-soft text-fuchsia', text: 'text-fuchsia', bar: 'bg-fuchsia', ring: 'ring-fuchsia/25', soft: 'bg-fuchsia-soft' },
  sun: { chip: 'bg-[#FFF1D6] text-[#B86A00]', text: 'text-[#B86A00]', bar: 'bg-sun', ring: 'ring-sun/30', soft: 'bg-[#FFF6E3]' },
};

/** Ícone duotone em um chip colorido. */
export function IconChip({ icon: I, hue = 'violet', size = 'md', className }: { icon: Icon; hue?: Hue; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const dim = size === 'lg' ? 'h-14 w-14 rounded-xl' : size === 'sm' ? 'h-9 w-9 rounded-lg' : 'h-11 w-11 rounded-lg';
  const px = size === 'lg' ? 30 : size === 'sm' ? 19 : 24;
  return (
    <span className={cn('inline-flex shrink-0 items-center justify-center', dim, HUES[hue].chip, className)}>
      <I size={px} weight="duotone" aria-hidden />
    </span>
  );
}

/** Moldura de navegador para exibir telas do SOL. */
export function BrowserFrame({
  src,
  alt = '',
  children,
  url = 'sol.solicita.net',
  className,
  imgClassName,
  dark,
}: {
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  url?: string;
  className?: string;
  imgClassName?: string;
  dark?: boolean;
}) {
  return (
    <div className={cn('overflow-hidden rounded-lg border bg-white shadow-[0_24px_60px_-20px_rgba(41,35,92,0.45)]', dark ? 'border-white/15' : 'border-rule', className)}>
      <div className="flex items-center gap-3 border-b border-rule bg-[#F1F0F7] px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <i className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#FFC857]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#4CC38A]" />
        </span>
        <span className="mx-auto max-w-[260px] flex-1 truncate rounded bg-white px-3 py-1 text-center font-mono text-[11px] text-mute">{url}</span>
        <span className="w-10" aria-hidden />
      </div>
      {children ?? (src && <LazyImage src={src} alt={alt} className={cn('block w-full', imgClassName)} />)}
    </div>
  );
}
