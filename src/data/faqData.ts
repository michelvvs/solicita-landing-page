export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'dossie' | 'ia' | 'legislacao' | 'seguranca';
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'dossie',
    question: 'O que é o Dossiê Premium 360° de Licitação e em que ele se diferencia de um resumo comum?',
    answer: 'O Dossiê Premium 360° não é um mero resumo automatizado. É uma auditoria técnica, jurídica, financeira e estratégica completa realizada sob a ótica de 7 especialistas simultâneos (Pregoeiro, Procurador Jurídico, Auditor TCU, Engenheiro, Gestor Público e Diretor Comercial). Ele cobre 18 dimensões exaustivas do certame, confronta Edital com TR e Minuta Contratual, e traz a seção exclusiva "Achados Críticos" (classificados em 🔴 Crítico, 🟠 Alto, 🟡 Médio e 🟢 Baixo) para que a diretoria tome a decisão em menos de 5 minutos.'
  },
  {
    id: 'faq-2',
    category: 'legislacao',
    question: 'O Dossiê e os Agentes de IA são 100% atualizados com a Nova Lei de Licitações (Lei 14.133/2021)?',
    answer: 'Sim! Todo o arcabouço técnico e as regras dos nossos sistemas foram construídos com base estrita na Lei nº 14.133/2021, instruções normativas federais (como a IN SEGES/MGI), decretos regulamentadores e as mais recentes súmulas e jurisprudências do Tribunal de Contas da União (TCU) e Tribunais de Contas Estaduais (TCEs).'
  },
  {
    id: 'faq-3',
    category: 'ia',
    question: 'Como os Agentes de IA da SolicitIA são calibrados para não alucinar?',
    answer: 'Diferente de IAs genéricas que inventam leis ou inventam artigos, os Agentes da SolicitIA foram desenvolvidos e calibrados por Thiago Mattos a partir de quase 20 anos de vivência diária em pregões reais. Nossas regras de auditoria obrigam a IA a citar a página, o item do edital e o artigo exato de lei para cada afirmação, operando com verificação cruzada e validação estrita.'
  },
  {
    id: 'faq-4',
    category: 'dossie',
    question: 'Posso contratar um Dossiê 360° para um edital específico ou preciso de assinatura mensal?',
    answer: 'Você pode escolher o modelo ideal para o momento da sua empresa: temos a opção de contratação de Dossiê Avulso (sob demanda para um edital prioritário) e também planos de Assinatura Pro para empresas que disputam dezenas de licitações mensalmente e desejam autonomia com nossos Agentes de IA.'
  },
  {
    id: 'faq-5',
    category: 'ia',
    question: 'Quais tipos de arquivos e portais de compras públicas são suportados?',
    answer: 'Suportamos todos os formatos comuns de editais (PDFs escaneados ou digitais, arquivos Word, planilhas orçamentárias em Excel, arquivos ZIP de anexos) provenientes de qualquer portal público do Brasil: Compras.gov.br (antigo Comprasnet), Licitações-e (Banco do Brasil), BEC-SP, BLL Compras, Portal de Compras Públicas, BBMNet e portais próprios de prefeituras e governos estaduais.'
  },
  {
    id: 'faq-6',
    category: 'seguranca',
    question: 'Como funciona o sigilo e a confidencialidade das propostas e documentos da minha empresa?',
    answer: 'Adotamos protocolo rigoroso de segurança e sigilo de dados. As informações dos seus documentos, certidões, atestados e estratégias comerciais não são compartilhadas publicamente e nunca são utilizadas para treinar modelos abertos de inteligência artificial.'
  },
  {
    id: 'faq-7',
    category: 'legislacao',
    question: 'O Dossiê ajuda a redigir Impugnações e Pedidos de Esclarecimento?',
    answer: 'Sim! Além de identificar todas as irregularidades do edital na dimensão de Oportunidades de Impugnação, o sistema gera a minuta da peça jurídica fundamentada no artigo cabível da Lei 14.133/2021 e jurisprudência pacificada, pronta para seu departamento jurídico ou comercial assinar e protocolar.'
  }
];
