import { motion } from 'motion/react';

/** Ilustração: pilha de documentos sendo auditada (lupa, linhas destacadas e selo de verificação). */
export function DocsIllustration({ className }: { className?: string }) {
  const lines = [0, 1, 2, 3, 4, 5];
  return (
    <svg viewBox="0 0 420 380" className={className} role="img" aria-label="Documentos sendo analisados">
      {/* formas de fundo */}
      <circle cx="318" cy="92" r="74" fill="#17AFCB" opacity=".22" />
      <rect x="22" y="236" width="150" height="110" rx="14" fill="#6D4FE0" opacity=".18" />
      {/* folhas */}
      <g transform="rotate(-7 160 190)">
        <rect x="64" y="46" width="206" height="272" rx="10" fill="#ffffff" stroke="#DCDAE6" />
      </g>
      <g transform="rotate(4 190 190)">
        <rect x="88" y="34" width="206" height="272" rx="10" fill="#ffffff" stroke="#DCDAE6" />
      </g>
      <g>
        <rect x="112" y="26" width="206" height="276" rx="10" fill="#ffffff" stroke="#C9C6DB" />
        <rect x="132" y="48" width="86" height="10" rx="3" fill="#29235C" />
        <rect x="132" y="66" width="140" height="6" rx="3" fill="#DCDAE6" />
        {lines.map((i) => (
          <motion.rect
            key={i}
            x="132"
            y={96 + i * 24}
            height="8"
            rx="4"
            fill={i === 2 ? '#B42318' : i === 4 ? '#C2570C' : '#E4E2EE'}
            initial={{ width: 0 }}
            whileInView={{ width: [150, 120, 164, 100, 140, 120][i] }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 + i * 0.12, ease: 'easeOut' }}
          />
        ))}
        {/* destaques sobre achados */}
        <motion.rect
          x="126" y="88" width="178" height="48" rx="6" fill="none" stroke="#B42318" strokeWidth="2" strokeDasharray="6 4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.1 }}
        />
      </g>
      {/* lupa */}
      <motion.g
        animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <circle cx="288" cy="212" r="46" fill="#17AFCB" fillOpacity=".12" stroke="#29235C" strokeWidth="9" />
        <path d="M322 247 L368 293" stroke="#29235C" strokeWidth="14" strokeLinecap="round" />
        <path d="M268 214 l14 14 l26 -30" stroke="#17AFCB" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
      {/* score */}
      <g transform="translate(46 70)">
        <circle r="38" fill="#29235C" />
        <circle r="30" fill="none" stroke="#ffffff" strokeOpacity=".18" strokeWidth="7" />
        <motion.circle
          r="30" fill="none" stroke="#17AFCB" strokeWidth="7" strokeLinecap="round"
          strokeDasharray="188" initial={{ strokeDashoffset: 188 }} whileInView={{ strokeDashoffset: 188 * 0.3 }}
          viewport={{ once: true }} transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
          transform="rotate(-90)"
        />
        <text textAnchor="middle" y="6" fontSize="20" fontWeight="600" fill="#fff" fontFamily="Newsreader, serif">7,0</text>
      </g>
    </svg>
  );
}

/** Ilustração: linha do tempo de prazos, com calendário e relógio. */
export function TimelineIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 300" className={className} role="img" aria-label="Prazos e etapas da licitação">
      <rect x="20" y="30" width="170" height="130" rx="14" fill="#6D4FE0" opacity=".16" />
      <circle cx="350" cy="220" r="60" fill="#17AFCB" opacity=".2" />
      <path d="M40 200 H380" stroke="#C9C6DB" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
      {[60, 140, 220, 300, 372].map((x, i) => (
        <motion.g key={x} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 * i }}>
          <circle cx={x} cy="200" r="11" fill={i < 3 ? '#2d2e83' : '#fff'} stroke="#2d2e83" strokeWidth="3" />
          {i < 3 && <path d={`M${x - 4} 200 l3 3 l6 -7`} stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" />}
        </motion.g>
      ))}
      {/* calendário */}
      <g transform="translate(46 56)">
        <rect width="150" height="118" rx="10" fill="#fff" stroke="#C9C6DB" />
        <rect width="150" height="30" rx="10" fill="#29235C" />
        <rect y="20" width="150" height="10" fill="#29235C" />
        <text x="14" y="21" fontSize="13" fill="#fff" fontWeight="600" fontFamily="Public Sans, sans-serif">Sessão pública</text>
        {Array.from({ length: 15 }).map((_, i) => (
          <rect key={i} x={14 + (i % 5) * 26} y={44 + Math.floor(i / 5) * 22} width="18" height="14" rx="3" fill={i === 8 ? '#B42318' : i === 7 ? '#C2570C' : '#EDEBF4'} />
        ))}
      </g>
      {/* relógio */}
      <g transform="translate(262 58)">
        <circle cx="52" cy="52" r="52" fill="#fff" stroke="#C9C6DB" />
        <circle cx="52" cy="52" r="44" fill="none" stroke="#E4E2EE" strokeWidth="6" />
        <motion.circle
          cx="52" cy="52" r="44" fill="none" stroke="#6D4FE0" strokeWidth="6" strokeLinecap="round"
          strokeDasharray="276" initial={{ strokeDashoffset: 276 }} whileInView={{ strokeDashoffset: 276 * 0.35 }}
          viewport={{ once: true }} transition={{ duration: 1.4, ease: 'easeOut' }} transform="rotate(-90 52 52)"
        />
        <path d="M52 52 V28" stroke="#29235C" strokeWidth="4" strokeLinecap="round" />
        <path d="M52 52 L68 60" stroke="#29235C" strokeWidth="4" strokeLinecap="round" />
        <circle cx="52" cy="52" r="4" fill="#29235C" />
      </g>
    </svg>
  );
}
