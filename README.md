# Site SEG Instalações — Astro

## Rodar localmente
1. Instale Node.js 20+ (https://nodejs.org)
2. `npm install`
3. `npm run dev` → abre em http://localhost:4321

## Editar conteúdo
- Serviços: `src/content/servicos/*.md`
- Segmentos: `src/content/segmentos/*.md`
- Contatos oficiais (fonte única): `src/data/site.js`
- Páginas fixas: `src/pages/*.astro`
- Cores e estilos: `src/styles/global.css`

## Publicar (Cloudflare Pages)
1. Suba esta pasta em um repositório GitHub privado
2. Cloudflare Pages → Create project → conectar o repositório
3. Framework preset: Astro · Build: `npm run build` · Output: `dist`
4. Apontar DNS do seginstalacoes.com.br (Registro.br) para o Cloudflare
   (o e-mail continua na HostGator: manter os registros MX)

## Antes de publicar (pendências)
- [x] Chave Web3Forms configurada (formulários ativos)
- [ ] Trocar os placeholders [FOTO/LOGO/DEPOIMENTO] pelos arquivos reais
- [ ] Confirmar URL do Instagram em `src/data/site.js`
- [ ] Redirects 301 do site antigo (/galeria → /segmentos, etc.)
- [ ] Google Analytics + Search Console (guia completo na etapa de publicação)
