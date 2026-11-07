// Conteúdo do site institucional da Solicita.
// Fontes: material da empresa, repos do SOL, SoliCRM e Precigasmed.
// Detalhes comerciais do SOL (planos, valores, agentes, passo a passo) ficam na landing do sistema.

/** Landing de vendas do SOL (detalhes, planos e valores). */
export const SOL_LANDING_URL = 'https://sol.landing.solicita.net';
/** Sistema SOL em si (login). */
export const SOL_APP_URL = 'https://sol.solicita.net';

/** TODO: substituir pelo número oficial de atendimento antes de publicar. */
export const WHATSAPP_NUMBER = '5521999999999';
export const waLink = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const NAV = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Missão e valores', href: '#valores' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Sob medida', href: '#sob-medida' },
  { label: 'Dúvidas', href: '#duvidas' },
];

export const NUMBERS = [
  { to: 20, prefix: '~', unit: 'anos', label: 'de pregões e concorrências públicas no currículo do fundador' },
  { to: 3, prefix: '', unit: 'sistemas', label: 'próprios: SOL, SoliCRM e Precigasmed' },
  { to: 12, prefix: '', unit: 'anos', label: 'em gases medicinais e saúde, em contratos hospitalares' },
  { to: 0, prefix: 'BR', unit: '', label: 'atendimento a empresas de todo o território nacional', static: true },
];

export const FACTS = [
  { t: '12 anos', d: 'em gases medicinais e saúde, em contratos hospitalares de alta complexidade pelo Brasil.' },
  { t: 'Duas leis', d: 'vividas na prática: a transição da Lei 8.666/93 para a Lei 14.133/2021.' },
  { t: 'Os dois lados do balcão', d: 'pregoeiros, fiscais de contrato, procuradores e auditores de controle interno.' },
];

export const MISSION = {
  mission: 'Permitir que empresas de qualquer porte disputem e executem contratos públicos de igual para igual com as grandes corporações, transformando experiência prática em tecnologia acessível.',
  vision: 'Ser a referência em soluções que tornam as compras públicas mais acessíveis, seguras e eficientes para quem fornece ao Estado.',
};

export const GOALS = [
  'Reduzir o risco de inabilitação, de prazo perdido e de contrato que dá prejuízo.',
  'Devolver às equipes o tempo que hoje se perde em leitura, planilha e retrabalho.',
  'Levar o conhecimento de quem viveu o pregão para dentro de sistemas simples de usar.',
  'Construir, junto com cada cliente, a solução que o processo dele realmente pede.',
];

export const VALUES = [
  { t: 'Experiência prática', d: 'Cada regra do sistema nasce de uma situação vivida em pregão de verdade, não de teoria.' },
  { t: 'Evidência e transparência', d: 'Toda conclusão cita a fonte: documento, item, página e artigo. Quem lê pode conferir.' },
  { t: 'Conhecimento compartilhado', d: 'Conhecimento só gera valor quando é compartilhado. Por isso ele vira ferramenta.' },
  { t: 'Confiança e sigilo', d: 'Documentos e estratégias dos clientes não são compartilhados nem usados para treinar modelos abertos.' },
  { t: 'A pessoa decide', d: 'A tecnologia prepara, verifica e alerta. A decisão continua com quem conhece o negócio.' },
];

export const PRODUCTS = [
  {
    key: 'sol',
    name: 'SOL',
    full: 'Sistema de Operações em Licitação',
    tag: 'Nosso principal sistema',
    text: 'Um agente licitatório com IA em todas as etapas: lê o edital, aponta os riscos com página e item, redige impugnações, confere a habilitação e acompanha cada prazo até a entrega do contrato.',
    points: ['Dossiê 360° em 18 dimensões', 'LicitaPlanner: 13 etapas, do edital à entrega', 'Agentes de IA para impugnar, habilitar e precificar'],
    img: '/produtos/sol-dossie.jpg',
    url: 'sol.solicita.net',
    cta: { label: 'Conhecer o SOL, planos e valores', href: SOL_LANDING_URL, external: true },
    hue: 'violet',
  },
  {
    key: 'solicrm',
    name: 'SoliCRM',
    full: 'CRM e marketing com IA',
    tag: 'Vendas e marketing',
    text: 'Pipeline de vendas, gestão de leads e planejamento de marketing em um só lugar, com IA para pontuar leads, sugerir a próxima ação e planejar conteúdo e campanhas.',
    points: ['Kanban de vendas com score de leads por IA', 'Calendário editorial e publicação no Instagram', 'Planejador de tráfego pago com CPL, CAC e ROAS'],
    img: '/produtos/solicrm-pipeline.jpg',
    url: 'SoliCRM',
    cta: { label: 'Quero conhecer o SoliCRM', subject: 'SoliCRM' },
    hue: 'fuchsia',
  },
  {
    key: 'precigasmed',
    name: 'Precigasmed',
    full: 'Precificação de sistemas de gases medicinais',
    tag: 'Saúde e gases medicinais',
    text: 'Substitui a planilha de precificação de locação de sistemas de gases medicinais. Você informa as premissas em 5 etapas e o sistema calcula custos, imposto, retorno do investimento e lucro.',
    points: ['Preço, margem e payback em tempo real', 'Carteira de contratos fechados e retorno', 'Módulo de licitações para montar editais (DFD, ETP, TR)'],
    img: '/produtos/precigasmed-proposta.jpg',
    url: 'Precigasmed',
    cta: { label: 'Quero conhecer o Precigasmed', subject: 'Precigasmed' },
    hue: 'aqua',
  },
] as const;

export const CUSTOM = {
  title: 'Não achou o que a sua empresa precisa? A gente constrói.',
  lead: 'Além dos nossos sistemas, desenvolvemos soluções sob medida para empresas que fornecem ao setor público e para quem tem um processo que ainda vive em planilha, e-mail e papel.',
  examples: [
    { t: 'Planilhas que viram sistema', d: 'Foi assim que nasceu o Precigasmed: uma planilha de precificação virou um sistema com várias empresas, perfis e histórico.' },
    { t: 'Agentes de IA no seu processo', d: 'Leitura de documentos, rascunho de peças, conferência de regras e alertas, treinados na realidade da sua operação.' },
    { t: 'Painéis e indicadores', d: 'Os números que a diretoria pede, atualizados sozinhos, no lugar de relatórios montados à mão.' },
    { t: 'Automação e integrações', d: 'Rotinas repetitivas, avisos por WhatsApp e e-mail, conexão entre os sistemas que a empresa já usa.' },
  ],
  steps: [
    { t: 'Conversa', d: 'Entendemos o seu processo e onde ele trava.' },
    { t: 'Desenho', d: 'Propomos o escopo, as telas e o caminho mais curto.' },
    { t: 'Construção', d: 'Entregamos em etapas, para você ver e opinar cedo.' },
    { t: 'Evolução', d: 'O sistema cresce com a empresa, com suporte de quem o construiu.' },
  ],
};

export const FAQ = [
  {
    q: 'O que a Solicita faz?',
    a: 'A Solicita é uma empresa de soluções em licitações públicas. Reunimos quase 20 anos de experiência prática em pregões e concorrências e a transformamos em sistemas: o SOL (agente licitatório com IA), o SoliCRM (CRM e marketing com IA) e o Precigasmed (precificação de gases medicinais). Também criamos soluções sob medida.',
  },
  {
    q: 'Vocês desenvolvem soluções sob medida para a minha empresa?',
    a: 'Sim. Se o seu processo ainda vive em planilha, e-mail ou papel, ou se você precisa de uma automação, um painel ou um agente de IA que entenda a sua operação, conte para a gente. Começamos por uma conversa para entender o problema e propor o menor caminho até a solução.',
  },
  {
    q: 'Como funciona um projeto sob medida?',
    a: 'Em quatro passos: conversa, desenho, construção e evolução. Entregamos em etapas, para você acompanhar e ajustar cedo, e seguimos ao seu lado depois que o sistema entra em uso.',
  },
  {
    q: 'Onde vejo os planos e valores do SOL?',
    a: 'Na página do SOL, que detalha o que o sistema faz, o passo a passo, as telas e os planos. Os valores e as condições dos demais produtos e dos projetos sob medida são combinados conforme cada caso.',
  },
  {
    q: 'Vocês atendem empresas de qualquer lugar do Brasil?',
    a: 'Sim. O atendimento é feito para empresas de todo o território nacional, por WhatsApp, chamada de vídeo e e-mail.',
  },
  {
    q: 'E o sigilo dos meus documentos e da minha estratégia?',
    a: 'Documentos, certidões, atestados e estratégias comerciais não são compartilhados e nunca são usados para treinar modelos abertos de inteligência artificial.',
  },
];
