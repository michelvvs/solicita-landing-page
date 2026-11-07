import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, animate, useInView, useReducedMotion, type HTMLMotionProps } from 'motion/react';
import { cn } from '../lib/cn';

/** Revela o conteúdo (fade + deslocamento) quando entra na tela. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  className,
  as = 'div',
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  as?: 'div' | 'li' | 'article' | 'section' | 'p';
} & Omit<HTMLMotionProps<'div'>, 'children'>) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** Container que escalona a entrada dos filhos `Item`. */
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
export const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

/** Número que "conta" até o valor ao aparecer. */
export function CountUp({ to, decimals = 0, className }: { to: number; decimals?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setVal(v) });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref} className={className}>
      {val.toFixed(decimals).replace('.', ',')}
    </span>
  );
}

/** Monta a seção só quando ela se aproxima da tela (lazy loading) e a anima na entrada. */
export function LazyMount({
  children,
  minHeight = 600,
  id,
}: {
  children: ReactNode;
  minHeight?: number;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: '700px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} id={id} style={show ? undefined : { minHeight }}>
      {show && children}
    </div>
  );
}

/** Imagem com carregamento preguiçoso e revelação suave (blur → nítida). */
export function LazyImage({ src, alt, className, width, height }: { src: string; alt: string; className?: string; width?: number; height?: number }) {
  const [ok, setOk] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onLoad={() => setOk(true)}
      className={cn('transition duration-700 ease-out', ok ? 'scale-100 opacity-100 blur-0' : 'scale-[1.02] opacity-0 blur-md', className)}
    />
  );
}
