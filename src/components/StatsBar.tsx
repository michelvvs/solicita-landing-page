import React from 'react';
import { Award, Layers, ShieldCheck, Zap } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: '+20 Anos',
      label: 'Experiência no Campo Prático',
      desc: 'Atuação em pregões e contratos complexos de alta relevância.',
      color: 'text-amber-400',
      bgGlow: 'bg-amber-500/10'
    },
    {
      icon: Layers,
      value: '18 Dimensões',
      label: 'Auditoria Dossiê 360°',
      desc: 'Do Resumo Executivo aos Achados Críticos e Parecer Final.',
      color: 'text-brand-highlight',
      bgGlow: 'bg-brand-accent/10'
    },
    {
      icon: ShieldCheck,
      value: '100% Lei 14.133',
      label: 'Conformidade Jurídica',
      desc: 'Artigo por artigo, com súmulas do TCU e jurisprudência pacificada.',
      color: 'text-emerald-400',
      bgGlow: 'bg-emerald-500/10'
    },
    {
      icon: Zap,
      value: '10x Mais Ágil',
      label: 'Decisão Direta da Diretoria',
      desc: 'Elimine dias de leitura manual e identifique riscos em 5 minutos.',
      color: 'text-cyan-400',
      bgGlow: 'bg-cyan-500/10'
    },
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-[#17133d]/90 border border-brand-accent/30 shadow-2xl backdrop-blur-xl p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center space-y-2 ${
                  index > 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bgGlow} flex items-center justify-center ${stat.color} mb-1`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-white">
                  {stat.label}
                </span>
                <p className="text-xs text-slate-400 max-w-[200px] leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
