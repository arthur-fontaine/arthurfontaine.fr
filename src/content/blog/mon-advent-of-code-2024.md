---
title: "Advent of Code 2024 : mon expérience"
description: Advent of Code est un événement annuel de programmation qui se déroule en décembre. En 2024, j'ai décidé de le réaliser en utilisant une large variété de langages de programmation. Voici mon expérience.
date: 2024-12-25
tags:
  - advent of code
  - programmation
  - expérience
language: fr
translationKeys:
  en: my-advent-of-code-2024
  fr: mon-advent-of-code-2024
---

# Advent of Code 2024 : mon expérience

Advent of Code est un événement annuel de programmation qui se déroule en
décembre. Chaque jour, du 1er au 25 décembre, un nouveau problème est publié
sur le site Advent of Code. Les participants doivent résoudre ces problèmes en
utilisant leurs compétences en programmation pour obtenir des réponses
correctes.

En 2023, j'avais décidé de profiter de l'événement pour apprendre Go, un
langage de programmation avec une popularité croissante. Cette année, je veux
aller plus loin : explorer plusieurs langages pour élargir ma compréhension des
différentes approches de programmation, comprendre leurs forces et leurs
paradigmes spécifiques, pour éviter de me cantonner à mon langage de confort,
TypeScript, et enrichir ma façon de coder, en important de nouvelles techniques
dans mes projets habituels.

Cet article racontera au jour le jour mon expérience de l'Advent of Code 2024.

## Jour -1 : La Préparation

Aujourd'hui j'ai établi ma liste de langages que j'utiliserai pour résoudre les
problèmes de l'Advent of Code 2024.

Cette liste de langages est un moyen d'approfondir mes compétences et ma
culture technique, ainsi que de découvrir les langages dont j'ai entendu parler
en 2024 sans avoir eu le temps de les essayer.

### Les Classiques Familiers

Parmi les langages que je vais utiliser, il y a bien sûr TypeScript et Python,
que j'utiliserai pour me reposer les jours où je n'aurai pas le temps de
découvrir un nouveau langage.

- **[TypeScript](https://www.typescriptlang.org/) :** Mon outil quotidien, utilisé dans tous mes projets de
  développement web, mobile et serveur.
- **[Python](https://www.python.org/) :** Mon premier compagnon, que j'utilise aujourd'hui principalement
  pour les projets de data science.

### Les Fonctionnels

J'ai la sensation que la programmation fonctionnelle est un paradigme qui
permet d'écrire des programmes plus robustes et plus lisibles. Ils occuperont
donc une place importante dans cette aventure.

- **[Elixir](https://elixir-lang.org/) :** Construit sur la machine virtuelle Erlang, célèbre pour sa
  tolérance aux pannes, il devient de plus en plus populaire pour l'écriture
  de backends, notamment grâce à Phoenix.
- **[OCaml](https://ocaml.org/) :** Un langage aux racines académiques, que j'entends parler (souvent
  en mal) depuis mes débuts en programmation. Il est temps de me faire mon
  avis.
- **[Gleam](https://gleam.run/) :** Le petit nouveau (sorti en version stable en 2024), tournant sur
  la machine virtuelle Erlang (comme Elixir) et compilable en JavaScript. Sa
  syntaxe et le joli design de son site web et de sa mascotte m'ont convaincu
  de lui donner sa chance.
- **[Haskell](https://www.haskell.org/) :** Peut-être le langage fonctionnel le plus populaire à ce jour.

### Les Bas Niveaux

Je suis de plus en plus attiré par les langages bas niveau, qui permettent à
la fois de mieux comprendre le fonctionnement des ordinateurs et des autres
langages, et d'écrire des programmes plus performants. Ils seront donc aussi de
la partie.

- **[Rust](https://www.rust-lang.org/) :** En ascension depuis plusieurs années, il devient de plus
  en plus populaire dans le tooling JavaScript. Des outils comme Deno, Biome
  ou Turborepo sont écrits en Rust, et certains comme Rollup (renomé Rolldown
  pour l'occasion) sont en train d'être réécrits en Rust pour gagner en
  performances.
- **C et [C++](https://isocpp.org/) :** Les anciens, les fondations sur lesquelles reposent tant de
  systèmes. Je vais enfin renouer mon lien avec eux qui date du début de mon
  collège, époque où je me suis initié à la programmation en développant une
  calculatrice en ligne de commande avec C++.
- **[Carbon](https://carbon-lang.dev/) :** Le projet expérimental de Google, dont certains disent qu'il
  pourrait être au C++ ce que le C++ a été au C (ou ce que TypeScript a été à
  JavaScript).
- **[Zig](https://ziglang.org/) :** Un concurrent sérieux de C, gagnant en popularité, notamment grâce
  à son utilisation dans Bun.

### Les Performants et Modernes

Certains langages récents se vantent d'être aussi performants que C (ou
presque) tout en ayant une syntaxe plus agréable. Je vais les explorer pour
voir s'ils tiennent leurs promesses.

- **[Go](https://go.dev/) :** Un langage que j'utilise régulièrement, notamment pour écrire mes
  microservices. J'apprécie sa simplicité et son sentiment de concevoir des
  programmes sans bugs. J'aimerais le consolider.
- **[Nim](https://nim-lang.org/) :** Un langage qui mélange la facilité de Python, la puissance de C et
  une compilation native performante.
- **[V](https://vlang.io/) :** Un langage minimaliste et rapide, conçu pour être facile à apprendre
  tout en restant performant. Sa compilation quasi instantanée et ses promesses
  de sûreté me donnent envie de l'essayer.
- **[D](https://dlang.org/) :** Un langage du début des années 2000, qui se veut être une tentative
  de moderniser et simplifier le C++, tout en conservant sa puissance et ses
  performances.
- **[Crystal](https://crystal-lang.org/) :** Un langage très inspiré de Ruby, mais compilé. Il est rapide et
  permet de définir des bindings vers des bibliothèques C simplement. Je le
  scrute depuis 3 ans mais n'ai jamais vraiment pris le temps de m'y mettre.
- **[Mojo](https://www.modular.com/mojo) :** Le nouveau prodige qui promet les performances du C avec la
  douceur syntaxique de Python.

### Le Vilain Petit Canard

- **[PHP](https://www.php.net/) :** Je ne suis vraiment pas fan de ce langage (je trouve sa syntaxe
  mauvaise, et son écosystème pas moderne), mais je reconnais que c'est un
  langage important dans l'histoire du web. Il est encore utilisé par de
  nombreux développeurs, et je me dois de le connaître un minimum, d'autant
  plus qu'il a l'air de connaître un nouveau souffle depuis sa version 8.3.

### Le Programme

L'Avent of Code consiste en 25 problèmes, un par jour. Si vous avez
correctement compté, je n'ai listé que 18 langages. Certains langages
m'intéressent plus que d'autres dans cette aventure, notamment car ce sont des
langages que je suis très susceptible d'utiliser dans mes projets futurs. Je
consacrerai donc plusieurs jours à ces langages. Voici le programme
prévisionnel :

| Langage    | Nombre de Jours |
| ---------- | --------------- |
| Rust       | 3               |
| OCaml      | 3               |
| Elixir     | 2               |
| Gleam      | 2               |
| Crystal    | 2               |
| Zig        | 1               |
| Carbon     | 1               |
| Python     | 1               |
| Mojo       | 1               |
| TypeScript | 1               |
| Golang     | 1               |
| C          | 1               |
| C++        | 1               |
| Haskell    | 1               |
| PHP        | 1               |
| D          | 1               |
| V          | 1               |
| Nim        | 1               |
