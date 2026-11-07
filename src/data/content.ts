// Conteúdo do site institucional da Solicita.
// Fontes: landing page anterior (Dossiê 360°) e documentação do SOL (repo dossie360).

/** Site que detalhará tudo o que o SOL faz. Hoje aponta para o protótipo publicado. */
export const SOL_URL = 'https://sol.solicita.net';

/** TODO: substituir pelo número oficial de atendimento antes de publicar. */
export const WHATSAPP_NUMBER = '5521999999999';

export const NAV = [
  { label: 'A Solicita', href: '#solicita' },
  { label: 'SOL', href: '#sol' },
  { label: 'Método', href: '#metodo' },
  { label: 'Agentes de IA', href: '#agentes' },
  { label: 'Contratação', href: '#contratacao' },
  { label: 'Dúvidas', href: '#duvidas' },
];

export const NUMBERS = [
  { value: '~20', unit: 'anos', label: 'de pregões e concorrências públicas no currículo do fundador' },
  { value: '18', unit: 'dimensões', label: 'de análise de cada edital no Dossiê 360°' },
  { value: '13', unit: 'etapas', label: 'acompanhadas pelo LicitaPlanner, do edital à entrega' },
  { value: '7', unit: 'especialistas', label: 'cujas óticas o Dossiê reproduz: do pregoeiro ao diretor comercial' },
];

export const LOSSES = [
  {
    topic: 'Triagem do edital',
    before: 'Dias de leitura manual, com foco no preço e nos itens.',
    now: 'Dossiê 360° com nota de 0 a 10 e parecer, em minutos.',
  },
  {
    topic: 'Divergências entre documentos',
    before: 'Contradições entre Termo de Referência, edital e minuta passam despercebidas.',
    now: 'Cruzamento dos documentos, com a página exata de cada conflito.',
  },
  {
    topic: 'Decisão de participar',
    before: 'Decisão por intuição, sem fundamento financeiro.',
    now: 'Achados críticos classificados por gravidade e decisão GO / NO-GO registrada.',
  },
  {
    topic: 'Impugnações e recursos',
    before: 'Peças feitas às pressas ou prazo perdido.',
    now: 'Minutas fundamentadas e prazos calculados conforme o próprio edital.',
  },
  {
    topic: 'Habilitação',
    before: 'Inabilitação por certidão vencida ou detalhe de SICAF.',
    now: 'Checklist documental com item e página do edital.',
  },
  {
    topic: 'Acompanhamento',
    before: 'Planilhas soltas e prazos na memória de alguém.',
    now: 'Cada licitação em um card que avança conforme as regras da etapa.',
  },
];

export const DOSSIE_GROUPS = [
  {
    name: 'Resumo e ficha técnica',
    items: ['Capa e identificação oficial', 'Resumo executivo e score de 0 a 10', 'Ficha técnica da licitação'],
  },
  {
    name: 'Auditoria do edital',
    items: ['Auditoria jurídica (Lei 14.133/2021)', 'Inconsistências e conflitos entre documentos'],
  },
  {
    name: 'Análise técnica e financeira',
    items: [
      'Análise profunda do objeto',
      'Análise técnica especializada',
      'Análise comercial e atratividade',
      'Análise financeira e custos prováveis',
    ],
  },
  {
    name: 'Riscos, checklists e impugnação',
    items: [
      'Oportunidades de impugnação',
      'Pedidos de esclarecimento preventivos',
      'Checklist documental e SICAF',
      'Checklist operacional por fases',
      'Mapa de riscos',
    ],
  },
  {
    name: 'Inteligência e parecer final',
    items: [
      'Inteligência competitiva e histórico',
      'Estratégia de disputa e lances',
      'Checklist pós-vitória e contratação',
      'Parecer conclusivo e recomendação',
    ],
  },
];

export const SEVERITY = [
  { key: 'critico', label: 'Crítico', desc: 'Impede a participação ou causa inabilitação.' },
  { key: 'alto', label: 'Alto', desc: 'Compromete a execução ou a rentabilidade.' },
  { key: 'medio', label: 'Médio', desc: 'Merece atenção e acompanhamento técnico.' },
  { key: 'baixo', label: 'Baixo', desc: 'Boas práticas e observações operacionais.' },
] as const;

export const SPECIALISTS = [
  'Pregoeiro',
  'Procurador jurídico',
  'Auditor TCU/TCE',
  'Controlador interno',
  'Engenheiro',
  'Gestor público',
  'Diretor comercial',
];

export const PLANNER_STAGES = [
  { n: 1, name: 'Oportunidades', phase: 'Antes da sessão' },
  { n: 2, name: 'Em análise', phase: 'Antes da sessão' },
  { n: 3, name: 'GO / NO-GO', phase: 'Antes da sessão' },
  { n: 4, name: 'Esclarecimento / Impugnação', phase: 'Antes da sessão' },
  { n: 5, name: 'Análise da resposta', phase: 'Antes da sessão' },
  { n: 6, name: 'Cadastro da proposta', phase: 'Antes da sessão' },
  { n: 7, name: 'Valor máximo e mínimo', phase: 'Antes da sessão' },
  { n: 8, name: 'Etapa de lances', phase: 'Sessão' },
  { n: 9, name: 'Recurso', phase: 'Depois da sessão' },
  { n: 10, name: 'Contrarrazão', phase: 'Depois da sessão' },
  { n: 11, name: 'Análise dos recursos', phase: 'Depois da sessão' },
  { n: 12, name: 'Análise do contrato', phase: 'Depois da sessão' },
  { n: 13, name: 'Entrega do objeto', phase: 'Depois da sessão' },
];

export const PRINCIPLES = [
  {
    title: 'Toda conclusão cita a fonte',
    text: 'Cada achado aponta o documento, o item e a página do edital, além do artigo de lei que o sustenta. O que não tem evidência não entra no parecer.',
  },
  {
    title: 'Cada edital tem as suas regras',
    text: 'Prazos de impugnação, canal de protocolo, tempo de proposta ajustada e percentual de inexequibilidade variam. O SOL usa os do edital e só recorre ao padrão quando o edital é omisso.',
  },
  {
    title: 'A decisão continua sendo de pessoas',
    text: 'O sistema prepara e verifica. Quem valida cada etapa é o responsável da empresa, e os planos com acompanhamento têm revisão humana da equipe Solicita.',
  },
];

export const REAL_EDITAIS = [
  { found: 'Impugnação em 5 dias úteis, por regra da Lei 13.303, e não os 3 dias da Lei 14.133.', effect: 'Prazo calculado pela regra do edital.' },
  { found: 'Inexequibilidade em 50% dos valores, e não os 75% que costumam ser padrão.', effect: 'Lance mínimo recomendado usa o percentual do edital.' },
  { found: 'Intenção de recurso em 15 minutos, e não em 10.', effect: 'Prazo recursal por edital, não fixo no sistema.' },
  { found: 'Proposta ajustada em 3 horas, e não em 2. Impugnação só pelo portal do pregão.', effect: 'Prazos e canais lidos do edital.' },
  { found: 'Orçamento sigiloso: o valor só aparece depois dos lances.', effect: 'Valor máximo e mínimo calculado depois da disputa.' },
];

export const AGENTS = [
  {
    name: 'Auditor 360° de editais',
    text: 'Lê o edital e todos os anexos e emite o Dossiê Premium 360°, com nota, achados críticos e checklist documental.',
    output: 'Dossiê, score de 0 a 10, matriz de achados',
  },
  {
    name: 'Impugnações e esclarecimentos',
    text: 'Transforma irregularidades e dúvidas em peças formais, com fundamento na Lei 14.133/2021 e em precedentes do TCU.',
    output: 'Impugnação, pedido de esclarecimento, recurso e contrarrazão',
  },
  {
    name: 'Habilitação e SICAF',
    text: 'Confere as exigências de habilitação contra os documentos e certidões da empresa, com validade, atestados e índices contábeis.',
    output: 'Relatório de aderência documental e alertas de vencimento',
  },
  {
    name: 'ETP, TR e propostas',
    text: 'Gera Estudos Técnicos Preliminares, Termos de Referência e propostas comerciais alinhados aos requisitos legais.',
    output: 'ETP, Termo de Referência, proposta readequada',
  },
  {
    name: 'Estratégia de disputa e preços',
    text: 'Calcula custos, margem e preço-piso de segurança conforme o modo de disputa, e alerta para risco de inexequibilidade.',
    output: 'Margem por faixa de preço e roteiro de lances',
  },
];

export const OFFERS = [
  {
    name: 'Dossiê 360° avulso',
    price: 'R$ 490',
    unit: 'por edital analisado',
    text: 'Para quem vai disputar um certame prioritário e quer a auditoria completa antes de enviar a proposta.',
    items: [
      'Auditoria nas 18 dimensões',
      'Top 10 achados críticos, em 4 níveis de gravidade',
      'Score de viabilidade de 0 a 10',
      'Checklist documental com item e página',
      'Minuta de impugnação ou esclarecimento, quando há vício',
      'Entrega em PDF',
    ],
    cta: 'Solicitar um Dossiê',
    featured: false,
  },
  {
    name: 'SOL Pro',
    price: 'R$ 980',
    unit: 'por mês',
    text: 'Para equipes comerciais que disputam várias licitações por mês e querem autonomia.',
    items: [
      'Dossiê 360° e LicitaPlanner',
      'Os cinco agentes de IA',
      'Impugnações, recursos e contrarrazões na Lei 14.133',
      'Habilitação e SICAF',
      'ETP, TR e propostas comerciais',
      'Suporte prioritário',
    ],
    cta: 'Assinar o SOL Pro',
    featured: true,
  },
  {
    name: 'Consultoria e Enterprise',
    price: 'Sob consulta',
    unit: 'projetos e contratos complexos',
    text: 'O SOL com acompanhamento direto de Thiago Mattos nos certames mais importantes da empresa.',
    items: [
      'Tudo do SOL Pro',
      'Validação humana pela equipe Solicita',
      'Viabilidade de certames de grande valor e saúde hospitalar',
      'Estratégia de lances e negociação',
      'Recursos complexos junto a TCE/TCU',
      'Capacitação da equipe de licitação',
    ],
    cta: 'Agendar conversa',
    featured: false,
  },
];

export const FAQ = [
  {
    q: 'O que é o SOL?',
    a: 'O SOL, Sistema de Operações em Licitação, é o sistema da Solicita. Reúne duas ferramentas: o Dossiê 360°, que analisa o edital em 18 dimensões, e o LicitaPlanner, que acompanha cada licitação em 13 etapas, da oportunidade à entrega do objeto. Um site próprio detalhará tudo o que o sistema faz.',
  },
  {
    q: 'O Dossiê 360° é um resumo automático do edital?',
    a: 'Não. É uma auditoria técnica, jurídica, financeira e estratégica sob a ótica de sete especialistas. Confronta edital, Termo de Referência e minuta contratual, classifica os achados por gravidade e entrega um parecer para a diretoria decidir.',
  },
  {
    q: 'O sistema está atualizado com a Lei 14.133/2021?',
    a: 'Sim. As regras foram construídas sobre a Lei nº 14.133/2021, instruções normativas federais, decretos regulamentadores e súmulas e jurisprudência do TCU e dos Tribunais de Contas Estaduais. Quando o edital segue outra norma, como a Lei 13.303, o SOL lê as regras do próprio edital.',
  },
  {
    q: 'Como a IA é impedida de inventar artigos e prazos?',
    a: 'Cada afirmação precisa citar a página, o item do edital e o artigo de lei. O que não tem evidência é descartado. As regras de auditoria foram calibradas por Thiago Mattos a partir de quase 20 anos de pregões reais.',
  },
  {
    q: 'Que arquivos e portais são aceitos?',
    a: 'PDFs digitais ou escaneados, Word, planilhas em Excel e arquivos ZIP de anexos, vindos de qualquer portal do Brasil, como Compras.gov.br, Licitações-e, BEC-SP, BLL Compras, Portal de Compras Públicas, BBMNet e portais próprios de prefeituras e estados.',
  },
  {
    q: 'Como ficam o sigilo e a confidencialidade dos meus documentos?',
    a: 'Documentos, certidões, atestados e estratégias comerciais não são compartilhados e nunca são usados para treinar modelos abertos de inteligência artificial.',
  },
  {
    q: 'Posso contratar para um edital só ou preciso de assinatura?',
    a: 'As duas formas existem: o Dossiê avulso, sob demanda, e o SOL Pro, mensal, para quem disputa muitas licitações. Há ainda a consultoria com acompanhamento direto da equipe Solicita.',
  },
];

export const STAGE_INFO: Record<number, string> = {
  1: 'Você valida os dados extraídos do edital: contratante, objeto, datas e valores.',
  2: 'O Dossiê 360° fica pronto e você valida a análise.',
  3: 'Decisão de participar. NO-GO encerra o card; sessão sem decisão vira "não participou".',
  4: 'Pedidos protocolados no prazo e no canal do edital, ou o registro de que não haverá pedidos.',
  5: 'Respostas do órgão anexadas e analisadas pela IA. Sem pedidos, a etapa é pulada.',
  6: 'Proposta registrada e lotes escolhidos. Prazo vencido sem proposta vira "não participou".',
  7: 'Piso e teto calculados com a inexequibilidade do edital. O card aguarda a data e a hora da sessão.',
  8: 'Valor final, colocação e concorrentes registrados. Cada lote segue a sua trilha.',
  9: 'Quem não venceu decide se recorre, com as razões. O 1º lugar pula a etapa.',
  10: 'Quem venceu informa se houve recurso e anexa recurso e contrarrazão.',
  11: 'Decisão do órgão anexada e analisada. Decisão desfavorável encerra como perdida.',
  12: 'Contrato anexado e comparado pela IA com a minuta, com a data de assinatura.',
  13: 'Entrega registrada e validada: o card encerra como ganho. Em ata de registro de preços, acompanha cada solicitação.',
};

export const TOUR = [
  { src: '/sol/sol-licitacoes.jpg', title: 'Todas as licitações num só lugar', text: 'Visão geral com o status do Dossiê, o score, o veredito e o andamento no LicitaPlanner de cada certame.' },
  { src: '/sol/sol-dossie.jpg', title: 'Score e parecer em destaque', text: 'Nota de 0 a 10, contagem de achados por gravidade e a recomendação validada por um especialista.' },
  { src: '/sol/sol-achados.jpg', title: 'Achados com documento, item e página', text: 'Cada achado traz o trecho literal do edital, o impacto no certame e a ação recomendada.' },
  { src: '/sol/sol-card.jpg', title: 'Um card para cada licitação', text: 'Prazos do edital, decisões, anexos e a etapa atual em um único lugar, com histórico de tudo o que aconteceu.' },
  { src: '/sol/sol-panorama.jpg', title: 'Panorama dos resultados', text: 'Taxa de vitória, valor ganho e colocação, inclusive por lote.' },
];
