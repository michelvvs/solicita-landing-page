export interface DossieSectionItem {
  id: number;
  slug: string;
  number: string;
  title: string;
  category: 'executivo' | 'auditoria' | 'tecnica_financeira' | 'riscos_checklists' | 'estrategia';
  shortDesc: string;
  fullDesc: string;
  keyQuestions: string[];
  deliverables: string[];
  lawReferences?: string[];
  icon: string;
}

export const DOSSIE_CATEGORIES = [
  { id: 'todas', label: 'Todas as 18 Seções' },
  { id: 'executivo', label: '1. Resumo & Ficha Técnica' },
  { id: 'auditoria', label: '2. Auditoria Jurídica & Edital' },
  { id: 'tecnica_financeira', label: '3. Análise Técnica & Financeira' },
  { id: 'riscos_checklists', label: '4. Riscos, Checklists & Impugnação' },
  { id: 'estrategia', label: '5. Inteligência & Parecer Final' },
];

export const DOSSIE_SECTIONS: DossieSectionItem[] = [
  {
    id: 1,
    slug: 'capa',
    number: '01',
    title: 'Capa e Identificação Oficial',
    category: 'executivo',
    shortDesc: 'Dados completos do certame, órgão licitante, modalidade e identificação formal do parecer.',
    fullDesc: 'Identificação formal estruturada do processo licitatório, número do edital, processo administrativo, data/horário da sessão, responsável pela análise e valor total estimado.',
    keyQuestions: [
      'Qual o órgão promotor e número do edital?',
      'Qual o processo administrativo e modalidade adotada?',
      'Qual a data oficial da sessão pública e valor de referência?'
    ],
    deliverables: [
      'Cabeçalho institucional padronizado',
      'Metadados do certame e links para o sistema oficial (ex: Compras.gov.br)'
    ],
    icon: 'FileText'
  },
  {
    id: 2,
    slug: 'resumo-executivo',
    number: '02',
    title: 'Resumo Executivo & Score 0 a 10',
    category: 'executivo',
    shortDesc: 'Decisão executiva rápida: Vale a pena participar? Grau de risco, complexidade e nota global.',
    fullDesc: 'Síntese de alto nível para tomada de decisão ágil da diretoria. Apresenta o veredito direto se a empresa deve ou não entrar na disputa, probabilidade de vitória, necessidade de impugnações e nota ponderada de viabilidade (0 a 10).',
    keyQuestions: [
      'Vale a pena participar deste certame?',
      'Qual o grau de risco e de complexidade do objeto?',
      'Qual a chance estimada de vitória e nota geral (0 a 10)?',
      'Há necessidade de impugnação ou esclarecimento prévio?'
    ],
    deliverables: [
      'Card executivo com Score Geral (0 a 10)',
      'Termômetro de Risco x Oportunidade',
      'Diretrizes estratégicas imediatas para o Diretor Comercial'
    ],
    icon: 'Activity'
  },
  {
    id: 3,
    slug: 'ficha-tecnica',
    number: '03',
    title: 'Ficha Técnica da Licitação',
    category: 'executivo',
    shortDesc: 'Extração cirúrgica de todos os parâmetros operacionais, prazos, plataforma e canais de contato.',
    fullDesc: 'Quadro unificado contendo o modo de disputa (aberto, aberto/fechado), regime de execução, vigência contratual, portal eletrônico, contatos do pregoeiro/agente de contratação e prazos críticos.',
    keyQuestions: [
      'Qual o critério de julgamento (menor preço, maior desconto)?',
      'Qual o modo de disputa e intervalo entre lances?',
      'Quais os canais oficiais de comunicação e responsável pela contratação?'
    ],
    deliverables: [
      'Tabela resumida de parâmetros da disputa',
      'Cronograma com datas-limite para pedidos de esclarecimento e impugnação'
    ],
    icon: 'ListChecks'
  },
  {
    id: 4,
    slug: 'analise-objeto',
    number: '04',
    title: 'Análise Profunda do Objeto',
    category: 'tecnica_financeira',
    shortDesc: 'Detalhamento do escopo, obrigações recíprocas, complexidade de entrega e normas aplicáveis.',
    fullDesc: 'Decomposição detalhada do objeto licitado: o que será efetivamente entregue ou prestado, obrigações da contratada versus obrigações do órgão público, equipamentos exigidos e complexidade de execução.',
    keyQuestions: [
      'Quais são os limites exatos do escopo contratual?',
      'Quais equipamentos, instalações e insumos são exigidos?',
      'Existem obrigações acessórias com impacto de custo oculto?'
    ],
    deliverables: [
      'Matriz de Escopo e Obrigações Contratada vs. Órgão',
      'Mapeamento de normas técnicas obrigatórias (ABNT, ISO, ANVISA)'
    ],
    icon: 'Layers'
  },
  {
    id: 5,
    slug: 'auditoria-juridica',
    number: '05',
    title: 'Auditoria Jurídica (Lei 14.133/2021)',
    category: 'auditoria',
    shortDesc: 'Conformidade legal estrita com os artigos da Nova Lei de Licitações e jurisprudência TCU/TCE.',
    fullDesc: 'Auditoria profunda da legalidade do edital à luz da Lei nº 14.133/2021. Verificação especial de princípios (Art. 5º), objetivos (Art. 11), planejamento/ETP (Art. 18), TR (Art. 40), margem de preferência (Art. 47), desclassificação (Art. 59), habilitação (Art. 62 a 70), SRP (Art. 82), minutas contratuais (Art. 92) e recursos/impugnação (Art. 165).',
    keyQuestions: [
      'O edital respeita as regras e limites de exigências da Lei 14.133/2021?',
      'Há cláusulas restritivas ou ilegais passíveis de anulação?',
      'As exigências de qualificação técnica e econômico-financeira são proporcionais?'
    ],
    deliverables: [
      'Relatório de conformidade artigo por artigo',
      'Fundamentação legal com jurisprudência consolidada do TCU',
      'Identificação de cláusulas com vício de legalidade'
    ],
    lawReferences: [
      'Art. 5º (Princípios fundamentais)',
      'Art. 11 (Objetivos da licitação)',
      'Art. 18 (Fase preparatória & ETP)',
      'Art. 40 (Termo de Referência)',
      'Art. 59 (Critérios de desclassificação)',
      'Art. 62 ao 70 (Habilitação documental jurídica, fiscal, técnica e econômico-financeira)',
      'Art. 82 (Sistema de Registro de Preços)',
      'Art. 92 (Cláusulas necessárias do contrato)',
      'Art. 165 (Impugnações e recursos)'
    ],
    icon: 'Scale'
  },
  {
    id: 6,
    slug: 'auditoria-edital',
    number: '06',
    title: 'Auditoria de Inconsistências & Conflitos',
    category: 'auditoria',
    shortDesc: 'Cruzamento integral entre Edital, TR, ETP, Planilhas, Cronograma, Ata e Minuta de Contrato.',
    fullDesc: 'Varredura automática e cruzada de todos os arquivos do certame para identificar divergências entre o edital e o termo de referência, erros matemáticos em planilhas estimativas, conflitos de datas, quantitativos incompatíveis e cláusulas contraditórias que geram insegurança.',
    keyQuestions: [
      'Há divergências de especificação entre o TR e o Edital principal?',
      'As planilhas de custos contêm erros de fórmula ou quantitativos divergentes?',
      'Os prazos da minuta do contrato coincidem com os do Termo de Referência?'
    ],
    deliverables: [
      'Tabela de Conflitos e Inconsistências Documentais',
      'Apontamento exato da página, item e documento em contradição',
      'Minuta pronta para questionamento oficial'
    ],
    icon: 'FileSearch'
  },
  {
    id: 7,
    slug: 'analise-tecnica',
    number: '07',
    title: 'Análise Técnica Especializada',
    category: 'tecnica_financeira',
    shortDesc: 'Validação de normas ABNT, RDC ANVISA, CREA/CAU, CAT, ART, atestados e licenças operacionais.',
    fullDesc: 'Avaliação técnica criteriosa sobre viabilidade de atendimento de normas técnicas, exigências de atestados de capacidade técnica (CAT), registros em conselhos de classe (CREA/CFT/CRQ), licenças sanitárias ou ambientais, requisitos de logística, instalação e manutenção.',
    keyQuestions: [
      'A empresa atende a 100% dos requisitos técnicos sem risco de desclassificação?',
      'Os atestados exigidos respeitam o limite legal de até 50% das parcelas de maior relevância?',
      'Há exigência de certificações ou laudos com prazos incompatíveis?'
    ],
    deliverables: [
      'Checklist de aderência técnica das especificações',
      'Quadro de exigências regulatórias (ANVISA, CREA, ART, INMETRO)'
    ],
    icon: 'Wrench'
  },
  {
    id: 8,
    slug: 'analise-comercial',
    number: '08',
    title: 'Análise Comercial & Atratividade',
    category: 'tecnica_financeira',
    shortDesc: 'Viabilidade de mercado, adequação do preço de referência e identificação de riscos comerciais ocultos.',
    fullDesc: 'Diagnóstico da viabilidade comercial: comparação entre o valor estimado do órgão e os preços reais de mercado, análise de margem praticável, riscos ocultos de custos logísticos ou reajustes e probabilidade de prejuízo operacional.',
    keyQuestions: [
      'O valor de referência do edital é compatível com os custos atuais de mercado?',
      'Existe margem bruta e líquida suficiente para absorver flutuações de insumos?',
      'O contrato possui risco de gerar prejuízo por exigências desbalanceadas?'
    ],
    deliverables: [
      'Veredito de atratividade comercial (Excelente, Moderada, Baixa, Inviável)',
      'Identificação de armadilhas de preço de referência defasado'
    ],
    icon: 'TrendingUp'
  },
  {
    id: 9,
    slug: 'analise-financeira',
    number: '09',
    title: 'Análise Financeira & Custos Prováveis',
    category: 'tecnica_financeira',
    shortDesc: 'Estruturação de tributos, frete, equipe, capital de giro necessário e margem líquida estimada.',
    fullDesc: 'Mapeamento financeiro estruturado: custos diretos de produto/serviço, frete, tributação incidente (Simples, Lucro Presumido, Lucro Real), encargos trabalhistas, necessidade de capital de giro e prazo médio de pagamento do órgão público.',
    keyQuestions: [
      'Qual o capital de giro necessário para sustentar a execução até os primeiros pagamentos?',
      'Qual o impacto dos tributos, fretes e manutenção na margem final?',
      'Qual o ponto de equilíbrio financeiro (breakeven) da proposta?'
    ],
    deliverables: [
      'Simulação de composição de custos e margem',
      'Cálculo de exposição de caixa e capital de giro'
    ],
    icon: 'DollarSign'
  },
  {
    id: 10,
    slug: 'inteligencia-competitiva',
    number: '10',
    title: 'Inteligência Competitiva & Histórico',
    category: 'estrategia',
    shortDesc: 'Mapeamento de concorrentes frequentes, histórico do órgão licitante e grau de agressividade.',
    fullDesc: 'Levantamento de padrões de disputa: quais concorrentes costumam disputar e vencer contratos similares no órgão, taxa média de desconto praticada na região e nível de rigor do pregoeiro/agente de contratação.',
    keyQuestions: [
      'Quais os principais concorrentes com histórico no órgão?',
      'Qual o histórico de descontos e comportamento de lances em certames anteriores?',
      'O órgão costuma cumprir prazos de empenho e pagamento?'
    ],
    deliverables: [
      'Painel de concorrentes prováveis e histórico de lances',
      'Grau de concorrência estimado (Baixo, Médio, Agressivo)'
    ],
    icon: 'Compass'
  },
  {
    id: 11,
    slug: 'oportunidades-impugnacao',
    number: '11',
    title: 'Oportunidades de Impugnação Estratégica',
    category: 'riscos_checklists',
    shortDesc: 'Mapeamento de cláusulas ilegais com fundamento legal, probabilidade de êxito e minuta sugerida.',
    fullDesc: 'Identificação de todas as falhas legais do edital passíveis de impugnação, classificadas por chance de êxito (Alta, Média, Baixa) com fundamentação jurídica detalhada na Lei 14.133/2021 e jurisprudência dos Tribunais de Contas.',
    keyQuestions: [
      'Quais exigências ilegais podem ser derrubadas via impugnação?',
      'A impugnação deve ser protocolada com pedido de suspensão da sessão?',
      'Qual a probabilidade de êxito de cada pedido?'
    ],
    deliverables: [
      'Tabela de Oportunidades de Impugnação com grau de relevância',
      'Argumentação jurídica pronta para protocolo',
      'Recomendação tática (impugnar de imediato ou questionar na fase de lances)'
    ],
    icon: 'AlertTriangle'
  },
  {
    id: 12,
    slug: 'pedidos-esclarecimento',
    number: '12',
    title: 'Pedidos de Esclarecimento Preventivos',
    category: 'riscos_checklists',
    shortDesc: 'Minutas de questionamentos técnicos para amarrar a interpretação do órgão antes da sessão.',
    fullDesc: 'Elaboração técnica de todos os pedidos de esclarecimento que uma empresa profissional deve protocolar antes da abertura, sanando ambiguidades e fixando a interpretação do fiscal do contrato.',
    keyQuestions: [
      'Quais dúvidas técnicas e operacionais precisam de resposta formal da comissão?',
      'Como blindar a empresa contra exigências abusivas durante a execução?',
      'Qual o prazo limite para protocolo sem preclusão?'
    ],
    deliverables: [
      'Minuta pronta de Pedido de Esclarecimento formatada para envio oficial',
      'Diretrizes de prazo para envio tempestivo'
    ],
    icon: 'HelpCircle'
  },
  {
    id: 13,
    slug: 'checklist-documental',
    number: '13',
    title: 'Checklist Documental & Habilitação SICAF',
    category: 'riscos_checklists',
    shortDesc: 'Tabela de conformidade: Documento, Obrigatoriedade, Item do Edital, Página e Observações.',
    fullDesc: 'Mapeamento minucioso de 100% dos documentos exigidos para habilitação jurídica, fiscal, social, trabalhista, técnica e econômico-financeira, cruzando com os níveis do SICAF e certidões estaduais/municipais.',
    keyQuestions: [
      'Quais documentos são eliminatórios na fase de habilitação?',
      'Em qual página e item do edital cada documento está fundamentado?',
      'Há certidões de validade curta ou declarações específicas exigidas?'
    ],
    deliverables: [
      'Tabela de Checklist Documental com página e item do edital',
      'Validador de vigência de certidões e índices contábeis (ILG, ILC, IS)'
    ],
    icon: 'CheckSquare'
  },
  {
    id: 14,
    slug: 'checklist-operacional',
    number: '14',
    title: 'Checklist Operacional por Fases',
    category: 'riscos_checklists',
    shortDesc: 'Linha do tempo passo a passo: Antes, Durante e Após a Sessão, Homologação e Assinatura.',
    fullDesc: 'Guia tático cronológico dividindo todas as ações obrigatórias da equipe de licitação em: Antes da Sessão, Durante a Disputa, Pós-Sessão, Pós-Homologação, Assinatura da Ata/Contrato e 1ª Entrega.',
    keyQuestions: [
      'O que deve ser conferido 24 horas antes da abertura do pregão?',
      'Quais ações são obrigatórias na fase recursal e intenção de recurso?',
      'Quais os prazos para assinatura do contrato e envio da garantia contratual?'
    ],
    deliverables: [
      'Cronograma tático operacional em 6 etapas sequenciais',
      'Matriz de responsabilidades da equipe interna'
    ],
    icon: 'Clock'
  },
  {
    id: 15,
    slug: 'mapa-riscos',
    number: '15',
    title: 'Mapa de Riscos Multidimensional',
    category: 'riscos_checklists',
    shortDesc: 'Matriz Área x Probabilidade x Impacto x Tratamento (Jurídico, Financeiro, Operacional e Fiscal).',
    fullDesc: 'Matriz profissional de gestão de riscos contemplando: Riscos Jurídicos, Financeiros, Comerciais, Operacionais, de Engenharia, Fiscais e Documentais, com ações preventivas e planos de contingência recomendados.',
    keyQuestions: [
      'Quais riscos podem provocar aplicação de penalidade ou declaração de inidoneidade?',
      'Qual a probabilidade e severidade de cada ameaça identificada?',
      'Como mitigar e transferir riscos antes de formular a proposta?'
    ],
    deliverables: [
      'Matriz de Riscos 5x5 (Probabilidade vs. Impacto)',
      'Plano de Ação e Tratamento preventivo'
    ],
    icon: 'ShieldAlert'
  },
  {
    id: 16,
    slug: 'estrategia-disputa',
    number: '16',
    title: 'Estratégia de Disputa & Lances',
    category: 'estrategia',
    shortDesc: 'Tática de lances, limite de segurança, combate à inexequibilidade e negociação com o pregoeiro.',
    fullDesc: 'Manual tático personalizado para a sessão pública: determinação do preço-piso de segurança (para evitar desclassificação por inexequibilidade), estratégia de degraus de lance no modo aberto/fechado e técnicas de negociação.',
    keyQuestions: [
      'Qual o piso mínimo absoluto de preço para garantir margem saudável?',
      'Como agir no encerramento aleatório ou fase de desempate?',
      'Como estruturar o pedido de desclassificação de concorrente inexequível?'
    ],
    deliverables: [
      'Faixas de preço de lance (Ideal, Meta, Piso de Segurança)',
      'Roteiro de atuação em tempo real durante a etapa competitiva'
    ],
    icon: 'Zap'
  },
  {
    id: 17,
    slug: 'checklist-pos-vitoria',
    number: '17',
    title: 'Checklist Pós-Vitória & Contratação',
    category: 'estrategia',
    shortDesc: 'Ações imediatas pós-adjudicação: proposta ajustada, garantia contratual e mobilização inicial.',
    fullDesc: 'Checklist com os passos imediatos após sagrar-se vencedor: envio de proposta e planilha ajustada ao lance vencedor no prazo legal, emissão de seguro-garantia ou caução, conferência de empenho e cronograma de mobilização.',
    keyQuestions: [
      'Qual o prazo regulamentar para envio da proposta readequada?',
      'Quais garantias e certidões devem ser renovadas antes da assinatura?',
      'Como formalizar a ordem de fornecimento/início dos serviços com segurança?'
    ],
    deliverables: [
      'Checklist executivo pós-adjudicação e celebração do contrato',
      'Protocolos de segurança para recebimento de notas de empenho'
    ],
    icon: 'Award'
  },
  {
    id: 18,
    slug: 'parecer-final',
    number: '18',
    title: 'Parecer Conclusivo & Recomendação',
    category: 'estrategia',
    shortDesc: 'Veredito final fundamentado: Participar ou Não? Impugnar ou Não? Decisão executiva consolidada.',
    fullDesc: 'Parecer técnico conclusivo assinado pela auditoria, reunindo todas as 17 dimensões anteriores em uma recomendação final, fundamentada, clara e objetiva para o conselho diretivo da empresa.',
    keyQuestions: [
      'Qual o veredito final definitivo: Participar, Participar Condicionado ou Abster-se?',
      'Qual o plano de ação imediato recomendado para a diretoria?',
      'Qual o Score Global final de viabilidade do certame?'
    ],
    deliverables: [
      'Declaração formal de viabilidade técnica e jurídica',
      'Resumo executivo de recomendações com nota final (0 a 10)'
    ],
    icon: 'CheckCircle2'
  }
];

export interface AchadoCritico {
  id: string;
  nivel: 'critico' | 'alto' | 'medio' | 'baixo';
  titulo: string;
  descricao: string;
  impacto: string;
  acaoRecomendada: string;
  artigoLei?: string;
  docOrigem: string;
}

export const ACHADOS_CRITICOS_SAMPLE: AchadoCritico[] = [
  {
    id: 'ac-01',
    nivel: 'critico',
    titulo: 'Exigência de atestado com quantitativo superior a 50% da parcela principal',
    descricao: 'O Edital no item 10.4.2 exige comprovação de 80% do quantitativo para fins de qualificação técnica, violando expressamente o limite jurisprudencial do TCU e da Nova Lei de Licitações.',
    impacto: 'Risco de inabilitação indevida ou restrição à ampla competitividade.',
    acaoRecomendada: 'Impugnar de imediato com base no Art. 67 da Lei 14.133/2021 e Súmula 263 do TCU para readequação ao teto de 50%.',
    artigoLei: 'Art. 67, § 1º e § 2º da Lei 14.133/2021',
    docOrigem: 'Edital Principal - Item 10.4.2 (pág. 18)'
  },
  {
    id: 'ac-02',
    nivel: 'critico',
    titulo: 'Conflito grave de prazo entre o TR e a Minuta Contratual',
    descricao: 'O Termo de Referência fixa prazo de 5 dias úteis para a primeira entrega de insumos, enquanto a Minuta do Contrato estipula 24 horas sob pena de multa de 10%.',
    impacto: 'Insegurança operacional grave e risco iminente de aplicação de penalidades contratuais.',
    acaoRecomendada: 'Protocolar Pedido de Esclarecimento e Impugnação para harmonização do prazo conforme ETP prévio.',
    artigoLei: 'Art. 92, IV da Lei 14.133/2021',
    docOrigem: 'TR Anexo I (pág. 12) vs Minuta Contratual (pág. 44)'
  },
  {
    id: 'ac-03',
    nivel: 'alto',
    titulo: 'Preço de referência defasado em relação à inflação de insumos',
    descricao: 'A pesquisa de preços anexada utilizou cotações de fornecedores realizadas há mais de 11 meses sem considerar o reajuste setorial dos insumos hospitalares.',
    impacto: 'Margem líquida comprimida para menos de 3,5%, com alto risco de inexequibilidade.',
    acaoRecomendada: 'Solicitar revisão metodológica da cesta de preços com base no Art. 23 da Lei 14.133/2021 ou ajustar o piso do lance de segurança.',
    artigoLei: 'Art. 23 da Lei 14.133/2021',
    docOrigem: 'ETP Anexo II - Planilha Estimativa (pág. 29)'
  },
  {
    id: 'ac-04',
    nivel: 'alto',
    titulo: 'Ausência de cláusula de reajuste periódico para contrato com vigência superior a 12 meses',
    descricao: 'A vigência é de 24 meses, mas a Minuta Contratual omitiu o índice oficial de reajuste (IPCA/INPC) e a data-base de contagem.',
    impacto: 'Prejuízo financeiro por perda do equilíbrio econômico-financeiro no segundo ano de contrato.',
    acaoRecomendada: 'Pedir retificação da minuta para inclusão expressa de cláusula de reajustamento com base no Art. 92, V da Lei 14.133/2021.',
    artigoLei: 'Art. 92, inciso V e Art. 25, § 7º',
    docOrigem: 'Minuta do Contrato - Cláusula 7ª (pág. 48)'
  },
  {
    id: 'ac-05',
    nivel: 'medio',
    titulo: 'Exigência de vistoria técnica presencial obrigatória sem justificativa plausível',
    descricao: 'O edital obriga visita técnica sem facultar a substituição por declaração formal de pleno conhecimento das condições locais.',
    impacto: 'Aumento desnecessário de custos prévios de deslocamento para licitantes de outros estados.',
    acaoRecomendada: 'Solicitar esclarecimento solicitando a aceitação de Declaração de Renúncia de Vistoria, conforme previsto no Art. 63, § 2º da Lei 14.133/2021.',
    artigoLei: 'Art. 63, § 2º e § 3º da Lei 14.133/2021',
    docOrigem: 'Edital Principal - Item 7.3 (pág. 14)'
  },
  {
    id: 'ac-06',
    nivel: 'baixo',
    titulo: 'Divergência de numeração entre índices dos anexos',
    descricao: 'O sumário lista o Anexo IV como Modelo de Proposta, mas o documento anexado consta como Declaração de Idoneidade.',
    impacto: 'Mera falha material de diagramação sem prejuízo substantivo.',
    acaoRecomendada: 'Apontamento amigável via chat do pregoeiro ou via pedido de esclarecimento simples.',
    artigoLei: 'Art. 12 da Lei 14.133/2021',
    docOrigem: 'Sumário do Edital (pág. 3)'
  }
];
