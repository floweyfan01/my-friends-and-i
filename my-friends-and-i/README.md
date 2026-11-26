# My friends and I

Site de perfis dos personagens (Liz, Daniel, Mavis, Thomas, Louis e Elle), com temas por página, PT/EN e livro de visitas no `localStorage`.

## Estrutura

```text
index.html      # página
css/styles.css  # estilos e temas
js/data.js      # caminhos das imagens
js/app.js       # textos, temas e lógica (edite os personagens aqui)
img/*.webp      # chibis
```

## Rodar localmente

Na pasta do projeto:

```bash
python3 -m http.server 8765
```

Abra `http://127.0.0.1:8765`.

## Publicar no GitHub Pages

1. Faça push deste repositório no GitHub.
2. Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
3. O site fica em `https://SEU_USUARIO.github.io/NOME-DO-REPO/`.

Use sempre caminhos relativos (`css/...`, `img/...`) — já estão assim.

## Editar personagens

Abra `js/app.js` e edite o bloco no topo (`LIZ`, `DANIEL`, `PERSONAGENS`, etc.).  
Para trocar um chibi, substitua o arquivo em `img/` (ex.: `img/p1.webp`) mantendo o mesmo nome.

## O que foi otimizado

- Imagens saíram do base64 embutido no HTML (~380 KB) para arquivos `.webp` em `img/`
- CSS e JS separados (melhor cache e manutenção)
- Scripts com `defer` e imagens com `loading="lazy"`
