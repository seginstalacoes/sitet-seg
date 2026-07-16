---
layout: ../../layouts/BlogPost.astro
title: "Infraestrutura na obra: o que deixar pronto antes do reboco"
description: "A lista do que precisa estar na parede antes de fechar o gesso — eletroduto, caixa, quadro e prumada. É o item mais barato da obra e o mais caro de corrigir depois."
pubDate: "2026-07-16"
category: "Infraestrutura"
bloco: 2
order: 4
image: "/blog/infraestrutura-linha-do-tempo-obra.svg"
imageAlt: "Linha do tempo da obra mostrando como o custo de incluir automação sobe abruptamente a partir do reboco"
readingTime: 10
---

Existe uma conversa que a gente tem toda semana, e ela acontece sempre tarde demais. É o cliente ligando com a casa no acabamento, perguntando quanto custa automatizar.

A resposta técnica é sempre a mesma: **custa o que a obra teria custado, mais a obra de novo.**

Este texto é pra que essa ligação aconteça antes.

## O custo de decidir tarde

![Linha do tempo da obra e o custo de incluir automação em cada fase](/blog/infraestrutura-linha-do-tempo-obra.svg)

Repare no formato da curva. Ela é plana por um bom tempo e depois sobe de uma vez. Isso não é figura de linguagem — é o comportamento real do orçamento.

Na fase de projeto, incluir automação custa **zero**. É uma linha a mais na prancha. Na alvenaria, custa eletroduto e caixa — algumas centenas de reais. Depois do reboco, custa quebrar, refazer, pintar, e conviver com poeira. E na casa habitada, custa tudo isso mais o transtorno de tirar a família de casa.

A decisão é a mesma. Só o preço muda.

## O que precisa estar pronto — a lista

### 1. Eletroduto: mais e maiores do que a norma pede

O eletroduto do projeto elétrico padrão foi dimensionado para o circuito elétrico padrão. Automação adiciona cabo de comando, cabo de rede, cabo de som, cabo de sensor — coisas que não estavam na conta.

**O que fazer:** aumentar a bitola nos trechos principais e prever eletroduto dedicado para dados, separado da energia. Cabo de rede correndo dentro do mesmo conduíte de força é receita de interferência.

**O que custa deixar sobrando:** pouco. **O que custa faltar:** parede.

### 2. Caixa de passagem em quantidade

Curva demais no eletroduto e você não passa cabo — passa desespero. A regra prática é caixa de passagem a cada trecho longo e a cada mudança relevante de direção.

Ninguém repara numa caixa de passagem no forro. Todo mundo repara numa parede quebrada.

### 3. Neutro em todas as caixas 4x2

Este é o item que mais derruba projeto de automação em casa pronta, e é **de graça** na obra.

Boa parte dos módulos de automação — sem fio inclusive — precisa de neutro na caixa do interruptor para se alimentar. Sem neutro, você fica preso ao dimmer de dois fios — que se alimenta atravessando a própria lâmpada com uma corrente pequena e, com LED, costuma deixar o ponto aceso fraco mesmo com o interruptor desligado.

**Deixe neutro em toda caixa de interruptor.** Custa um fio. Vale um projeto.

### 4. Quadro de automação dimensionado

Se a arquitetura for [cabeada ou híbrida](/blog/automacao-cabeada-ou-sem-fio), precisa existir um lugar físico para os módulos morarem. Não é o quadro de disjuntores — é um quadro ao lado, com espaço, ventilação e tomada.

**Dimensione com 40% de folga.** Automação sempre cresce. Quadro cheio no dia da entrega é quadro insuficiente no ano seguinte.

### 5. Rack de rede com energia e ventilação

Um ponto central para roteador, switch, gravador e nobreak. De preferência num lugar fresco, acessível, que não seja o fundo do armário da lavanderia.

E aqui um detalhe que quase todo mundo esquece: **tomada suficiente e nobreak previsto**. Não adianta rack lindo com uma tomada e um filtro de linha pendurado.

### 6. Prumada entre pavimentos

Casa de dois andares precisa de um caminho vertical decente para cabo. Um eletroduto de bitola generosa, ou melhor ainda, um duto vertical.

Se não existir, cada ponto de acesso no andar de cima vira uma negociação com a laje.

### 7. Ponto de rede onde ninguém pensa

Lista mínima de pontos RJ45 que a gente sempre prevê e que sempre são esquecidos:

- Atrás de cada TV (não confie no Wi-Fi para streaming)
- Teto do térreo e teto do pavimento superior (pontos de acesso)
- Cada posição de câmera
- Portão e portaria (videoporteiro, controle de acesso)
- Escritório / home office
- Onde o gateway de automação vai ficar
- Área gourmet e área externa coberta

Cabo de rede é barato. Ponto de rede que não existe é obra.

### 8. Infraestrutura para som ambiente

Se existe chance de ter som embutido, o momento é agora: eletroduto do rack até cada ambiente, caixa de passagem no forro, e — importante — **defina a posição das caixas antes do gesso**, não depois.

Som ambiente decidido depois do forro fechado vira caixa de sobrepor, que funciona, mas não era o que você queria.

### 9. Aterramento decente

Eletrônica sensível em rede mal aterrada é chamado técnico recorrente disfarçado de "defeito do equipamento". Isso vale para gravador, para switch, para central e para tudo que tem fonte chaveada.

## A regra que resolve quase tudo

> Deixe eletroduto vazio. Mesmo que não vá usar agora. Especialmente se não for usar agora.

Eletroduto vazio é a coisa mais barata que existe numa obra e é a única que compra tempo. Ele transforma uma decisão irreversível numa decisão adiável.

Você pode escolher automação 100% sem fio hoje e continuar tendo a opção de cabear em cinco anos. Mas só se o caminho existir.

## Quem precisa conversar com quem

O erro de coordenação é tão comum quanto o erro técnico. A sequência que funciona:

1. **Arquiteto e integrador conversam antes do projeto elétrico.** Não depois. É o arquiteto que sabe onde vai o móvel que esconde o rack.
2. **O projeto elétrico já sai com a automação dentro.** Não é um "adendo" — é o mesmo projeto.
3. **O eletricista recebe a prancha, não o recado.** Automação explicada verbalmente na obra vira automação improvisada na obra.
4. **O integrador visita antes do reboco.** Uma visita. É o momento em que ainda dá pra corrigir tudo e não custa nada.

Se a sua obra já passou de alguma dessas etapas, não está perdido — só ficou mais caro, e o [caminho sem fio](/blog/automacao-cabeada-ou-sem-fio) passa a ser mais atraente. Mas vale saber que essa escolha foi feita por omissão, não por decisão.

## Continue por aqui

**→ [Cabeamento estruturado e rede: a base invisível da casa inteligente](/blog/rede-e-cabeamento-estruturado-casa-inteligente)** — o próximo item da lista, e o que mais gera frustração quando é mal feito.

**→ [Automação cabeada x sem fio: qual escolher para sua casa](/blog/automacao-cabeada-ou-sem-fio)** — a decisão que define tudo o que está neste texto.

---

*A SEG Instalações acompanha obras em Ilhéus, Itabuna, Itacaré e região desde a prancha. Se a sua ainda está na alvenaria, essa é a hora mais barata de conversar.*
