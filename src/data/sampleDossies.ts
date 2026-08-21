export interface SampleDossie {
  id: string;
  categoryName: string;
  badge: string;
  orgao: string;
  editalNum: string;
  objeto: string;
  modalidade: string;
  valorEstimado: string;
  scoreViabilidade: number;
  decisao: 'Participar com Estratégia' | 'Impugnar Antes de Disputar' | 'Risco Crítico / Não Recomendado' | 'Excelente Oportunidade';
  decisaoColor: string;
  grauRisco: 'Baixo' | 'Médio' | 'Alto' | 'Crítico';
  grauRiscoColor: string;
  chanceVitoria: string;
  resumoParecer: string;
  achadosCriticosCount: {
    critico: number;
    alto: number;
    medio: number;
    baixo: number;
  };
  destaques: {
    juridico: string;
    tecnico: string;
    financeiro: string;
    estrategia: string;
  };
  sampleAchados: {
    tipo: 'critico' | 'alto' | 'medio' | 'baixo';
    titulo: string;
    impacto: string;
  }[];
}

export const SAMPLE_DOSSIES: SampleDossie[] = [
  {
    id: 'saude-gases',
    categoryName: 'Saúde & Gases Medicinais',
    badge: 'Setor de Alta Complexidade',
    orgao: 'Secretaria Estadual de Saúde / Hospital de Clínicas',
    editalNum: 'Pregão Eletrônico nº 104/2026',
    objeto: 'Registro de Preços para fornecimento contínuo de Oxigênio Líquido Medicinal, Ar Comprimido e locação de tanques criogênicos com manutenção preventiva e corretiva 24h.',
    modalidade: 'Pregão Eletrônico (Lei 14.133/2021)',
    valorEstimado: 'R$ 4.850.000,00',
    scoreViabilidade: 8.8,
    decisao: 'Impugnar Antes de Disputar',
    decisaoColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    grauRisco: 'Médio',
    grauRiscoColor: 'text-amber-400',
    chanceVitoria: '78% (Alta com Impugnação Prévia)',
    resumoParecer: 'Excelente certame com margem estimada de 24,5%. No entanto, o edital traz exigência desproporcional de atestado técnico de 80% do quantitativo e omissão de reajuste periódico na minuta contratual. A impugnação tempestiva dos 2 pontos críticos é indispensável para garantir a habilitação com segurança jurídica.',
    achadosCriticosCount: {
      critico: 1,
      alto: 2,
      medio: 3,
      baixo: 2
    },
    destaques: {
      juridico: 'Exigência de qualificação técnica viola Art. 67 da Lei 14.133/2021 e jurisprudência TCU (Súmula 263). Impugnação com 95% de chance de êxito.',
      tecnico: 'Exigências de Autorização de Funcionamento (AFE ANVISA), Licença Sanitária e ART no CREA estão 100% aderentes.',
      financeiro: 'Preço de referência compatível com o Painel de Preços. Margem bruta prevista de 28,2% e líquida de 19,4%.',
      estrategia: 'Modo de disputa aberto/fechado com alta chance de vitória operando com lance-meta de R$ 4.120.000,00.'
    },
    sampleAchados: [
      {
        tipo: 'critico',
        titulo: 'Exigência de atestado de 80% da capacidade volumétrica (Teto legal TCU: 50%)',
        impacto: 'Risco de inabilitação se não for impugnado nos termos do Art. 67, § 2º da Lei 14.133.'
      },
      {
        tipo: 'alto',
        titulo: 'Omissão de índice de reajustamento em contrato de 24 meses',
        impacto: 'Risco de perda da margem no 2º ano de contrato caso a inflação do setor acelere.'
      },
      {
        tipo: 'medio',
        titulo: 'Prazo exíguo de 48h para instalação inicial de tanque criogênico',
        impacto: 'Necessidade de pedido de esclarecimento para fixação em 10 dias úteis.'
      }
    ]
  },
  {
    id: 'engenharia-obras',
    categoryName: 'Engenharia, Obras & Manutenção',
    badge: 'Infraestrutura & Serviços Técnicos',
    orgao: 'Prefeitura Municipal / Secretaria de Obras',
    editalNum: 'Concorrência Eletrônica nº 018/2026',
    objeto: 'Contratação de empresa de engenharia para reforma e modernização estrutural de 12 Unidades Básicas de Saúde, com fornecimento de materiais e mão de obra especializada.',
    modalidade: 'Concorrência Eletrônica (Lei 14.133/2021)',
    valorEstimado: 'R$ 7.200.000,00',
    scoreViabilidade: 7.4,
    decisao: 'Participar com Estratégia',
    decisaoColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    grauRisco: 'Médio',
    grauRiscoColor: 'text-amber-400',
    chanceVitoria: '65% (Moderada)',
    resumoParecer: 'Edital bem fundamentado no ETP. Planilhas SINAPI atualizadas. Ponto de atenção para retenção de garantia de execução (5%) e necessidade de capital de giro para sustentar cronograma físico-financeiro de medições a cada 30 dias.',
    achadosCriticosCount: {
      critico: 0,
      alto: 3,
      medio: 4,
      baixo: 1
    },
    destaques: {
      juridico: 'Conformidade plena com os Arts. 18, 46 e 67 da Nova Lei. Matriz de alocação de riscos bem redigida.',
      tecnico: 'Exigência de Responsável Técnico com CAT/ART compatível com as parcelas de maior relevância técnica.',
      financeiro: 'BDI estipulado em 23,8% compatível com acórdão do TCU. Necessidade de giro de R$ 600 mil.',
      estrategia: 'Foco na comprovação estrita dos atestados no SICAF antes da fase de julgamento.'
    },
    sampleAchados: [
      {
        tipo: 'alto',
        titulo: 'Divergência entre o quantitativo de piso cerâmico no TR vs Cronograma Físico',
        impacto: 'Diferença de 420m² que pode alterar a proposta final em R$ 38.000,00.'
      },
      {
        tipo: 'medio',
        titulo: 'Vistoria técnica facultada apenas até 5 dias antes da sessão',
        impacto: 'Recomenda-se anexar declaração de dispensa para evitar impugnação de concorrente.'
      }
    ]
  },
  {
    id: 'servicos-ti',
    categoryName: 'TI & Serviços Contínuos',
    badge: 'Mão de Obra & Tecnologia',
    orgao: 'Tribunal Regional Federal / Setor de Tecnologia',
    editalNum: 'Pregão Eletrônico nº 042/2026',
    objeto: 'Prestação de serviços contínuos de suporte técnico a usuários (Service Desk Nível 1 e 2), sustentação de infraestrutura de TI e gestão de ativos com dedicação exclusiva de mão de obra.',
    modalidade: 'Pregão Eletrônico (Lei 14.133/2021)',
    valorEstimado: 'R$ 3.400.000,00/ano',
    scoreViabilidade: 9.4,
    decisao: 'Excelente Oportunidade',
    decisaoColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    grauRisco: 'Baixo',
    grauRiscoColor: 'text-emerald-400',
    chanceVitoria: '85% (Muito Alta)',
    resumoParecer: 'Edital exemplar. Termo de Referência milimetricamente alinhado à Lei 14.133/2021 e IN 05/2017. Conta vinculada com depósitos regulares para encargos trabalhistas, assegurando risco de passivo trabalhista quase nulo.',
    achadosCriticosCount: {
      critico: 0,
      alto: 1,
      medio: 2,
      baixo: 3
    },
    destaques: {
      juridico: '100% de conformidade com os Arts. 48, 59 e 121 da Lei 14.133/2021. Nenhuma cláusula restritiva.',
      tecnico: 'Exigências de certificações ITIL e HDI razoáveis e compatíveis com o mercado.',
      financeiro: 'Convenção Coletiva de Trabalho (CCT) do sindicato regional já embutida na planilha base.',
      estrategia: 'Estratégia de lances agressiva no modo aberto até o patamar de 14% de margem líquida.'
    },
    sampleAchados: [
      {
        tipo: 'alto',
        titulo: 'SLA de atendimento de chamados críticos fixado em 15 minutos',
        impacto: 'Exige dimensionamento cuidadoso da equipe de plantão presencial.'
      },
      {
        tipo: 'baixo',
        titulo: 'Formato da planilha deve seguir estritamente o Anexo VII da IN 05',
        impacto: 'Utilizar o Agente Gerador de Propostas SolicitIA para preenchimento automatizado.'
      }
    ]
  },
  {
    id: 'bens-fornecimento',
    categoryName: 'Fornecimento Geral & Bens de Consumo',
    badge: 'Registro de Preços (SRP)',
    orgao: 'Consórcio Intermunicipal de Desenvolvimento',
    editalNum: 'Pregão Eletrônico SRP nº 007/2026',
    objeto: 'Registro de Preços para aquisição parcelada de materiais de consumo, expediente e equipamentos para 18 municípios consorciados.',
    modalidade: 'Pregão SRP (Lei 14.133/2021)',
    valorEstimado: 'R$ 2.100.000,00',
    scoreViabilidade: 5.2,
    decisao: 'Risco Crítico / Não Recomendado',
    decisaoColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    grauRisco: 'Crítico',
    grauRiscoColor: 'text-rose-400',
    chanceVitoria: '35% (Baixa e Desvantajosa)',
    resumoParecer: 'Alerta vermelho: O edital prevê entregas fracionadas em 18 cidades distantes em até 400km sem compensação de frete, com prazo de pagamento de até 90 dias após empenho e cotação de preços com valores de 2024. Alto risco de inadimplência e prejuízo operacional.',
    achadosCriticosCount: {
      critico: 3,
      alto: 4,
      medio: 2,
      baixo: 1
    },
    destaques: {
      juridico: 'Vício no Art. 82 por ausência de estimativa individualizada de consumo por município participante.',
      tecnico: 'Falta de padronização nas especificações de produtos, abrindo brecha para recursos infinitos.',
      financeiro: 'Custo logístico consome 100% da margem líquida e expõe a empresa a prejuízo garantido.',
      estrategia: 'Recomendação técnica: NÃO PARTICIPAR a menos que o edital seja anulado e refeito.'
    },
    sampleAchados: [
      {
        tipo: 'critico',
        titulo: 'Obrigatoriedade de entrega fracionada sem frete compensatório em 18 cidades',
        impacto: 'Custo de frete inviabiliza o cumprimento da proposta.'
      },
      {
        tipo: 'critico',
        titulo: 'Cláusula de pagamento em até 90 dias após ateste da nota',
        impacto: 'Violação ao Art. 141 da Lei 14.133 e risco grave de asfixia de caixa.'
      }
    ]
  }
];
