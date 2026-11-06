# Solicita — site institucional

Site institucional da **Solicita — Soluções em Licitações Públicas**, com ênfase no **SOL — Sistema de Operações em Licitação** (ferramentas **Dossiê 360°** e **LicitaPlanner**).

Um site separado detalhará tudo o que o SOL faz; aqui o sistema aparece como resumo e porta de entrada (`SOL_URL` em `src/data/content.ts`).

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc + vite build
```

## Estrutura

```
src/
  data/content.ts     todo o texto e os dados do site (edite aqui)
  sections/           Hero, Empresa, Sol, Metodo, Agentes, Contratacao, Faq, Contato, Footer
  components/         Header, SectionHead, SolWindow (ilustração do sistema)
  lib/cn.ts           utilitário de classes
public/               logos (horizontal e quadrada)
```

## Sistema visual

- **Cores da marca**: `#29235C` (dark), `#2d2e83` (primary), `#1d71b8` (accent), sobre papel claro `#F6F5F1`.
- **Tipografia**: Newsreader (títulos), Public Sans (texto), IBM Plex Mono (rótulos).
- **Base**: Tailwind CSS + Radix UI (Tabs e Accordion, acessíveis por teclado), com tokens em `tailwind.config.js`. Princípios inspirados em design systems públicos (GOV.BR DS, USWDS): grade regular, contraste AA, foco visível, sem ornamento.
- A marca "S" da logo é usada como textura nas faixas azuis (`.mark-s` em `src/index.css`).

## Pendências antes de publicar

- Trocar `WHATSAPP_NUMBER` (hoje um número de exemplo) em `src/data/content.ts`.
- Confirmar `SOL_URL` (hoje `https://sol.solicita.net`) e os valores em `OFFERS`.
- Confirmar quais agentes de IA (`AGENTS`) já estão disponíveis.
