# embed-webflow

Export estático (HTML + CSS + JS puro, sem build step) da landing page V1 Prime,
gerado a partir do projeto Next.js que continua rodando normalmente em `app/`
e `components/`. Nada no projeto Next.js foi alterado — esta pasta é uma
cópia independente, pensada para ser hospedada à parte e embutida dentro do
Webflow.

## O que tem aqui

```
embed-webflow/
  index.html        página completa (Header → Hero → Highlight → Services →
                     Comparison → Experience → AppPromo → Excellence →
                     Contact → Footer — a mesma ordem hoje ativa em app/page.tsx;
                     a seção de Preços continua oculta lá, então não entrou aqui)
  css/styles.css     todo o CSS dos módulos, mesclado num arquivo só e com
                     classes prefixadas (v1-header__, v1-hero__, v1-services__...)
                     para não colidir com o CSS já existente no seu site Webflow
  js/main.js         reimplementação em JS puro do scroll reveal
                     (IntersectionObserver), do header que fica sólido
                     ao rolar, do menu mobile e das setas dos carrosséis
  images/            fotos usadas nas seções, recomprimidas com sharp para
                     peso de web (as originais em public/images/ chegavam a
                     8,6MB cada; aqui cada uma ficou abaixo de ~550KB)
```

Fontes: Source Serif 4 (títulos) e Inter (corpo), carregadas via Google Fonts
CDN (no Next.js elas são otimizadas/self-hosted pelo `next/font`; aqui isso
não existe, por isso o `<link>` do Google Fonts no `<head>`).

O formulário de contato é o mesmo embed do HubSpot já em produção (portal
`50353110`, form `74ae0c6c-6e9b-47ad-833c-587a0c96a8f1`).

## Como testar localmente

Abrir `index.html` direto no navegador já funciona (não depende de servidor),
mas para ver o comportamento de scroll/observer exatamente como em produção
é melhor servir por http. Qualquer servidor estático resolve, por exemplo:

```
cd embed-webflow
npx serve .
```

## Como colocar no Webflow

O componente **Embed** do Webflow roda o HTML que você colar dentro de um
`<iframe>` isolado — ele não carrega arquivos `.css`/`.js` separados nem
pastas de imagem do seu computador. Por isso existem duas formas de usar
este export lá dentro; escolha conforme o que você quer:

**Opção A — página inteira embutida (mais simples)**
1. Hospede esta pasta em algum lugar com URL pública (Vercel, Netlify, GitHub
   Pages, um subdomínio, etc.) — pode ser um projeto separado do V1 Prime
   principal.
2. No Webflow, adicione um elemento **Embed** (ou um **Iframe**, se o seu
   plano tiver) e aponte para essa URL:
   ```html
   <iframe src="https://SEU-DOMINIO-AQUI/" style="width:100%;border:0;height:100vh" loading="lazy"></iframe>
   ```
   Ajuste a altura conforme necessário (um iframe não cresce sozinho com o
   conteúdo).

**Opção B — colar o código direto na página Webflow**
1. Em **Site Settings → Custom Code → Head Code**, cole o `<link>` das fontes
   do Google e o conteúdo de `css/styles.css` dentro de uma tag `<style>`.
2. No lugar da página onde a seção deve aparecer, adicione um bloco
   **Embed** e cole o conteúdo de dentro de `<div class="v1-prime">…</div>`
   (o HTML das seções).
3. Em **Custom Code → Footer Code** (ou no fim do mesmo Embed), cole o
   conteúdo de `js/main.js` dentro de `<script>…</script>`, seguido do
   script do HubSpot:
   ```html
   <script src="https://js.hsforms.net/forms/embed/50353110.js" defer></script>
   ```
4. Suba as imagens de `images/` para os Assets do Webflow (ou para qualquer
   CDN) e troque os caminhos `images/...` no HTML pelas URLs finais.

A Opção B dá mais controle (a seção convive com o resto da página Webflow,
é indexada normalmente pelo SEO, etc.), mas dá mais trabalho para manter
sincronizada. A Opção A é a mais rápida de colocar no ar e é a que eu
recomendaria para começar.

## Se o conteúdo do site Next.js mudar

Este export não é gerado automaticamente — se você editar textos, imagens ou
seções em `components/`, repita a tradução manual aqui (ou peça para eu
regenerar esta pasta a partir do estado atual do `app/page.tsx`).
