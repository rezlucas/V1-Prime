# V1 Prime — Landing page

Landing page de comparação para o **V1 Prime**, serviço de mobilidade
premium por assinatura (motorista exclusivo, atendimento garantido via
WhatsApp, zero cancelamentos). Next.js (App Router) + React + TypeScript +
CSS Modules — sem Tailwind e sem bibliotecas de UI.

O objetivo da página é posicionar o V1 Prime como alternativa premium a
apps de mobilidade tradicionais, sem citar nomes de concorrentes — a seção
[Comparison](components/Comparison) faz esse contraste (`V1 Prime` vs.
`Outros apps`).

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + TypeScript
- **CSS Modules** por componente + `app/globals.css` para tokens globais
- **next/font** para carregar as fontes (Source Serif 4 + Inter) sem CLS
- Zero dependências de UI/ícones: os ícones são SVGs próprios em
  [components/icons.tsx](components/icons.tsx)

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros scripts:

```bash
npm run build   # build de produção
npm run start   # serve o build de produção
npm run lint    # ESLint
```

## Estrutura da home (nesta ordem)

```
app/
  layout.tsx        # fontes, metadata, HTML raiz
  page.tsx           # composição das seções da home
  globals.css         # tokens de design (cores, tipografia, espaçamento) e reset
components/
  Header/             # cabeçalho fixo (transparente sobre o hero, sólido ao rolar)
  Hero/                # tela cheia com o headline principal
  Highlight/            # faixa "Mobilidade é uma necessidade..." (fundo dourado-claro)
  Services/              # carrossel de 4 cards (por empresários/famílias/ocasiões/rotina)
  Comparison/             # "Por que o Prime está em outro nível?" — V1 Prime vs. Outros apps
  Pricing/                 # planos (Individual/Essencial/Plus/Familiar) com toggle de período
  AppPromo/                 # "Agende em segundos pelo WhatsApp" — mockup de chat
  Experience/                # "Entre. Respire." — cards que se sobrepõem ao rolar (sticky stack)
  Excellence/                 # "Exclusividades que acompanham cada trajeto" (5 cards)
  Footer/                      # rodapé com 5 colunas, incluindo os links legais reais
  Logo.tsx                      # marca "V1" (monograma), usada no header/footer/comparativo
  icons.tsx                      # conjunto de ícones SVG usado em todo o site
```

## Decisões de design

- **Tema claro**: creme (`#f7f3ea`) + dourado-claro (`#ecdfc1`) alternados
  entre seções, cabeçalho que troca de transparente (texto claro sobre o
  hero) para sólido (texto escuro) ao rolar, tipografia serifada nos
  títulos + sans-serif no corpo, acento dourado da marca (`#a59152`) em
  botões/links/ícones.
- **Cards que se sobrepõem ao rolar** na seção "Entre. Respire."
  (implementado com `position: sticky` + `z-index` crescente — ver
  [Experience.module.css](components/Experience/Experience.module.css)).
- **Sem app mobile de verdade**: o agendamento do V1 Prime é feito por
  WhatsApp, não por aplicativo — por isso `AppPromo` mostra um mockup de
  conversa de WhatsApp, não uma tela de app/loja.
- **Comparativo sem citar concorrentes**: `Comparison` usa "V1 Prime" vs.
  "Outros apps", como no site real do V1 Prime.
- **Logo**: marca própria (monograma "V1") em
  [components/Logo.tsx](components/Logo.tsx), usada no header, no rodapé
  e no comparativo, sempre na cor dourada da marca.
- **Sem fotografia de terceiros.** As fontes de imagem testadas (API
  interna do Unsplash e Pexels) bloquearam as requisições automatizadas
  neste ambiente, e não havia gerador de imagens configurado. Todas as
  "fotos" são composições em CSS puro (gradientes, blur, textura de grain)
  — troque por fotos reais quando quiser (veja abaixo).
- **Tipografia:** Source Serif 4 (títulos, variável) + Inter (corpo/UI)
  via `next/font`.
- **Sem Tailwind:** todo o CSS é escrito à mão com CSS Modules + variáveis
  globais em `app/globals.css`.

## O que ainda é placeholder / precisa de conteúdo real

- **Preços dos planos** ([Pricing.tsx](components/Pricing/Pricing.tsx)):
  os valores por período (mensal/trimestral/semestral/anual) são
  ilustrativos — confirme os valores reais antes de publicar.
- **Copy dos cards "Para famílias" / "Para ocasiões especiais" / "Para sua
  rotina"** ([Services.tsx](components/Services/Services.tsx)): o copy
  original do V1 Prime só detalhava "Para empresários" em profundidade —
  os demais foram escritos no mesmo tom e devem ser revisados.
- **Links do rodapé, nav e "Saiba mais"**: todos apontam para `#` ou
  âncoras internas — ligue às páginas reais quando existirem (o link
  "Fale com o V1" deveria apontar para o WhatsApp real, por exemplo).
- **Imagens**: não há fotografia real — apenas gradientes em CSS. Para
  trocar por fotos reais, os pontos de entrada são:
  - `components/Hero/Hero.module.css` → classe `.scene` (fundo do hero)
  - `components/Services/Services.module.css` → classe `.cardArt` (4 cards)
  - `components/Experience/Experience.module.css` → classes `.welcome`,
    `.ambiance`, `.charge` (os 3 cards que se sobrepõem no scroll)
  - Em cada caso, troque o `background: linear-gradient(...)` por um
    `<Image fill>` do Next.js apontando para a foto real.

## Responsividade e acessibilidade

- Testado em 375px, 768px e 1440px de largura.
- HTML semântico (`header`, `nav`, `main`, `section`, `footer`).
- Foco visível (`:focus-visible`), navegação por teclado no menu mobile,
  no carrossel de serviços e no accordion (`role="tab"` / `aria-selected`
  / `aria-expanded` conforme o componente).
- Respeita `prefers-reduced-motion`.
