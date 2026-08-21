export interface AIAgentItem {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  description: string;
  inputs: string[];
  outputs: string[];
  keyCapabilities: string[];
  gradient: string;
  iconName: string;
  popular?: boolean;
}

export const AI_AGENTS: AIAgentItem[] = [
  {
    id: 'agente-auditor-360',
    badge: 'Flagship SolicitIA',
    name: 'Agente Auditor 360° de Editais',
    tagline: 'Auditoria técnica, jurídica, financeira e operacional em minutos',
    description: 'Processa o edital completo e todos os seus anexos (TR, ETP, Planilhas, Minutas). Atua simultaneamente como Pregoeiro, Procurador Jurídico, Auditor TCU, Engenheiro e Diretor Comercial, emitindo o Dossiê Premium 360° com Nota 0-10 e Achados Críticos.',
    inputs: ['PDF do Edital', 'Termo de Referência (TR)', 'Estudo Técnico Preliminar (ETP)', 'Planilhas de Custo', 'Minuta Contratual'],
    outputs: ['Dossiê Premium 360° Estruturado', 'Matriz de 10 Achados Críticos', 'Score de Viabilidade (0 a 10)', 'Checklist Documental com páginas'],
    keyCapabilities: [
      'Cruzamento inteligente entre TR, Edital e Minuta de Contrato',
      'Detecção de cláusulas restritivas com base na Lei 14.133/2021',
      'Identificação de erros matemáticos em planilhas orçamentárias',
      'Classificação dos 10 Achados Críticos (🔴🟠🟡🟢)'
    ],
    gradient: 'from-[#2d2e83] via-[#1d71b8] to-[#29235C]',
    iconName: 'ShieldCheck',
    popular: true
  },
  {
    id: 'agente-impugnacoes-recursos',
    badge: 'Jurídico de Elite',
    name: 'Agente de Impugnações & Esclarecimentos',
    tagline: 'Peças jurídicas fundamentadas em Lei e precedentes do TCU em segundos',
    description: 'Transforma irregularidades e dúvidas do certame em peças formais de Impugnação de Edital, Pedidos de Esclarecimento ou Recursos Administrativos e Contrarrazões, citando artigos da Lei 14.133/2021 e súmulas dos Tribunais de Contas.',
    inputs: ['Edital com a irregularidade', 'Motivo ou questionamento do cliente', 'Decisão do Pregoeiro (no caso de recurso)'],
    outputs: ['Peça de Impugnação completa e fundamentada', 'Pedido de Esclarecimento formatado', 'Recurso / Contrarrazão de recurso'],
    keyCapabilities: [
      'Citação automática de jurisprudência pacificada do TCU e TCEs',
      'Estruturação com Fatos, Fundamento Jurídico e Pedidos Finais',
      'Controle de prazos tempestivos da Lei 14.133/2021 (Art. 165 e 164)',
      'Blindagem formal contra rejeições sumárias de pregoeiros'
    ],
    gradient: 'from-[#1d71b8] via-[#29235C] to-[#2d2e83]',
    iconName: 'Scale',
    popular: false
  },
  {
    id: 'agente-habilitacao-sicaf',
    badge: 'Zero Desclassificação',
    name: 'Agente de Habilitação & SICAF Compliance',
    tagline: 'Auditoria documental à prova de inabilitação',
    description: 'Varre todas as exigências do Art. 62 ao 70 da Lei 14.133/2021 e cruza com a pasta de documentos e certidões da sua empresa, conferindo validade, atestados técnicos CAT/CREA/ANVISA, índices de balanço e nível no SICAF.',
    inputs: ['Edital (Capítulo de Habilitação)', 'Documentos e certidões da empresa', 'Balanço Patrimonial', 'Atestados de Capacidade Técnica'],
    outputs: ['Relatório de Aderência Documental (%)', 'Alertas de certidões vencidas ou ausentes', 'Cálculo de Índices Contábeis (ILG, ILC, IS)', 'Parecer de Aptidão para Habilitação'],
    keyCapabilities: [
      'Conferência do SICAF níveis I ao VI com validade de certidões',
      'Cálculo automático de atendimento de atestados até 50%',
      'Geração de declarações obrigatórias padrão (ME/EPP, menor, etc.)',
      'Eliminação de erros bobos que causam inabilitação'
    ],
    gradient: 'from-[#29235C] via-[#2d2e83] to-[#1d71b8]',
    iconName: 'FileCheck2',
    popular: false
  },
  {
    id: 'agente-etp-tr-propostas',
    badge: 'Geração de Documentos',
    name: 'Agente Gerador de ETP, TR & Propostas',
    tagline: 'Documentos técnicos e propostas comerciais completas',
    description: 'Gera Estudos Técnicos Preliminares (ETP), Termos de Referência (TR) e Propostas Comerciais estruturadas em minutos, garantindo total harmonia com os requisitos legais e descritivos técnicos de bens e serviços.',
    inputs: ['Objeto / Necessidade da contratação', 'Valores e especificações técnicas', 'Modelos e diretrizes do órgão'],
    outputs: ['ETP completo (Art. 18 da Lei 14.133/2021)', 'Termo de Referência pronto para assinatura', 'Proposta Comercial readequada com planilha'],
    keyCapabilities: [
      'Redação técnica de alta densidade conforme normas aplicáveis',
      'Estruturação de critérios de julgamento e matriz de risco do TR',
      'Readequação de proposta comercial pós-lance vencedor',
      'Aplicação de regras específicas para bens comuns e complexos'
    ],
    gradient: 'from-[#1d71b8] to-[#29235C]',
    iconName: 'FileSpreadsheet',
    popular: false
  },
  {
    id: 'agente-estrategia-lances',
    badge: 'Margem & Competitividade',
    name: 'Agente de Estratégia de Disputa & Preços',
    tagline: 'Cálculo de piso de segurança, margem real e inteligência de lances',
    description: 'Analisa o modo de disputa (aberto, aberto/fechado), calcula custos tributários e logísticos, define a faixa de lance recomendada e previne o risco de inexequibilidade durante o pregão eletrônico.',
    inputs: ['Planilha de Custos Diretos', 'Regime Tributário', 'Modo de Disputa do Edital', 'Valor Estimado do Órgão'],
    outputs: ['Margem líquida por faixa de preço', 'Preço-Piso de Segurança', 'Roteiro tático de lances por etapa da disputa', 'Relatório de alerta contra inexequibilidade'],
    keyCapabilities: [
      'Simulação de lucratividade em tempo real por degrau de lance',
      'Definição do limite de segurança para negociação pós-disputa',
      'Mapeamento de padrões de desconto em plataformas Compras.gov',
      'Blindagem da saúde financeira do contrato a ser executado'
    ],
    gradient: 'from-[#2d2e83] to-[#1d71b8]',
    iconName: 'Zap',
    popular: false
  }
];
