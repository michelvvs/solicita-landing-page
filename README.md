# Solicita — site institucional

O site fala da empresa (história, missão, visão, valores e objetivos), das soluções (SOL, SoliCRM, Precigasmed) e dos projetos sob medida. Planos, valores e o passo a passo do SOL ficam na landing do sistema (`sol-landing-page`, `sol.landing.solicita.net`).

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
  components/         Header, SectionHead, ProductTour, PlannerStepper, BeforeAfter, ilustrações, motion
  lib/cn.ts           utilitário de classes
public/               logos (horizontal e quadrada) e sol/ (capturas do ambiente de demonstração do SOL)
```

## Sistema visual

- **Cores da marca**: `#29235C` (dark), `#2d2e83` (primary), `#1d71b8` (accent), sobre papel claro `#F6F5F1`.
- **Tipografia**: Newsreader (títulos), Public Sans (texto), IBM Plex Mono (rótulos).
- **Cores análogas**: ao azul-índigo da marca somam-se o violeta (`violet`) e o ciano (`aqua`), com tintas claras (`lilac`, `ice`) para fundos de seção. Os vermelhos/laranjas/verdes ficam só para a gravidade dos achados.
- **Movimento**: `motion` (Framer Motion) para revelação ao rolar, contadores, tour automático e etapas interativas; respeita `prefers-reduced-motion`. As seções abaixo da dobra são `React.lazy` e só montam perto da tela (`LazyMount`).
- **Ícones e imagens**: Phosphor (duotone) em `components/icons.ts`; ilustrações em SVG (`components/Illustrations.tsx`); telas reais do SOL em `public/sol/`.
- **Base**: Tailwind CSS + Radix UI (Tabs e Accordion, acessíveis por teclado), com tokens em `tailwind.config.js`. Princípios inspirados em design systems públicos (GOV.BR DS, USWDS): grade regular, contraste AA, foco visível, sem ornamento.
- A marca "S" da logo é usada como textura nas faixas azuis (`.mark-s` em `src/index.css`).

## Pendências antes de publicar

- Trocar `WHATSAPP_NUMBER` (hoje um número de exemplo) em `src/data/content.ts`.
- Confirmar `SOL_URL` (hoje `https://sol.solicita.net`) e os valores em `OFFERS`.
- Confirmar quais agentes de IA (`AGENTS`) já estão disponíveis.

## Deploy (VPS)

Mesmo padrão dos outros sites do VPS: container nginx `solicita-site-1` em `/opt/solicita-site`, sem portas publicadas, atrás do Caddy compartilhado em `/opt/proxy` (blocos `solicita.net` e `www.solicita.net`). O DNS fica na Hostinger (registro A de `solicita.net` e `www` para o IP do VPS).

```bash
rsync -az --delete --exclude node_modules --exclude dist --exclude .git --exclude .claude ./ vps:/opt/solicita-site/
ssh vps 'cd /opt/solicita-site && docker compose up -d --build'
```
