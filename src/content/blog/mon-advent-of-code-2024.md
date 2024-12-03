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

# Advent of Code 2024 : à la découverte des philosophies du code

Advent of Code est un événement de programmation annuel qui remplace les
traditionnels chocolats du calendrier de l'Avent par des problèmes de code. Du
1er au 25 décembre, chaque jour, un nouveau problème de programmation est
publié, conçu comme un petit puzzle algorithmique à résoudre. Ces défis sont
indépendants des langages : ils peuvent être résolus avec n'importe quel
langage de programmation, ce qui en fait un terrain de jeu idéal pour
l'apprentissage et l'exploration.

En 2023, j'avais décidé de profiter de l'événement pour apprendre Go. Cette
année, je me lance un défi plus ambitieux : résoudre ces problèmes dans une
variété de langages de programmation. Mon parcours sera semé d'embûches. Entre
mes journées chargées et la diversité des paradigmes, je m'attends à rencontrer
des difficultés. Certains paradigmes, comme la programmation fonctionnelle,
demanderont un temps d'adaptation significatif. D'autres langages, comme Rust
ou Zig, des langages bas niveau, impliqueront des concepts de gestion mémoire
plus complexes que mes habitudes. Le risque principal sera de manquer de temps.

Pourtant, c'est précisément ce défi qui m'attire. La programmation est un
territoire vaste et infini, parsemé de paradigmes, de syntaxes et de
philosophies différentes, tous venant de réflexions d'individus liées à leurs
expériences et à leurs besoins. C'est cette richesse qui m'anime depuis mes
débuts en programmation : comprendre les différentes manières de penser et
d'aborder un problème, pour devenir un meilleur développeur.

Mon objectif n'est pas de devenir un expert de chaque langage, mais de
comprendre leurs philosophies, leurs forces et leurs limitations. C'est une
exploration, une quête pour trouver les différentes façons de conceptualiser
un problème et de le résoudre.

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
  microservices. J'apprécie sa simplicité et le sentiment de concevoir des
  programmes sans bugs qu'il procure. J'aimerais le consolider.
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

## Jour 1 : Gleam

Pour commencer l'aventure, j’ai choisi Gleam, un langage découvert en 2024. Ce
choix s’est imposé par sa syntaxe élégante, son orientation fonctionnelle et sa
capacité à compiler en JavaScript. Et il a largement dépassé mes attentes.

Dès l’initialisation du projet, Gleam se démarque par sa simplicité. La
commande `gleam new day1` crée un projet complet et bien structuré : fichier de
configuration, `.gitignore`, `README.md`, dossier `src` pour le code source, et
`test` pour les tests. Tout est prêt à l’emploi, ce qui permet de se concentrer
sur l’essentiel : résoudre le problème.

Le langage en lui-même est un vrai plaisir à utiliser. Sa syntaxe est claire et
lisible, mais ce qui impressionne, c’est son typage automatique. Prenons un
exemple concret :

```gleam
import gleam/string

fn function(arg1) {
  string.split(arg1, " ")
}
```

Gleam déduit automatiquement que `arg1` est de type `String`, simplement parce
que la fonction `string.split` attend une chaîne de caractères en premier
argument. Pas besoin de spécifier manuellement les types : Gleam s'en charge,
même pour des fonctions complexes. Cette capacité à deviner le typage rend le
code agréable à écrire.

Autre point fort : l’opérateur `|>`. Il permet de chaîner les fonctions de
manière lisible et naturelle, presque comme un pseudo-code. C’est un vrai atout
pour structurer des algorithmes en étapes claires et compréhensibles. Bien
qu’il ne soit pas exclusif à Gleam, il est emblématique de la programmation
fonctionnelle.

J’avais déjà expérimenté un concept similaire en TypeScript grâce à [Effect](https://effect.website/)
et sa fonction `pipe`. Cependant, l’intégration native d’un opérateur comme
`|>` dans Gleam apporte une élégance supplémentaire : il supprime la nécessité
d’appeler explicitement une fonction et améliore la fluidité du code. Un vrai plaisir
à utiliser.

Cependant, l’immuabilité complète, une caractéristique propre à Gleam et à
d’autres langages fonctionnels, demande un temps d’adaptation. Par exemple,
ajouter un élément à une liste existante est impossible. À la place, il faut
créer une nouvelle liste à partir de l’ancienne. Cela peut être déroutant au
début, d’autant que la communauté Gleam, encore jeune, offre moins de
ressources pour trouver des solutions rapidement.

Pour résoudre ce type de problème, la fonction `fold` (similaire à `reduce` en
JavaScript) s’est révélée précieuse. Elle permet de parcourir une liste tout en
accumulant un résultat.

Finalement, j’ai réussi à résoudre le problème du premier jour avec Gleam.
L’expérience a été enrichissante, et je suis impatient de continuer à découvrir
ce langage au jour 2.

## Jour 2 : Gleam

Après ma première journée avec Gleam, j'ai pensé qu'il méritait une seconde
journée. C'est pourquoi j'ai décidé de poursuivre mon exploration de ce langage
lors du deuxième problème de l'Advent of Code. Mon objectif : plonger plus
profondément dans ses paradigmes et ses particularités.

Un aspect qui m'a particulièrement marqué est l'utilisation du mot-clé `use`,
une fonctionnalité que je n'avais jamais vu ailleurs. C'est une façon magique
de dire "ce code qui suit, transforme-le en une fonction à l'intérieur de mon
autre fonction". Prenons un exemple concret :

```gleam
fn parse_lines(lines) {
  use x <- list.map(lines)

  x
  |> string.split(" ")
  // ...
}
```

Comparé à l'écriture traditionnelle :

```gleam
fn parse_lines(lines) {
  list.map(lines, fn(x) {
    x
    |> string.split(" ")
    // ...
  })
}
```

L'utilisation de `use` permet de ne pas avoir à faire des imbrications
compliquées. Au lieu de mettre des fonctions les unes dans les autres, on peut
juste écrire le code à la suite.

Autre particularité notable que je n'avais pas abordée hier : Gleam ne connaît
pas le mot-clé `return`. La dernière ligne d'une fonction est automatiquement
sa valeur de retour, une approche qui confirme l'engagement du langage en
faveur de la simplicité et de la lisibilité.

En résumé, mon intérêt pour Gleam s'est confirmé durant ces deux jours. À voir
comment j'accrocherai à d'autres langages durant cet Avent of Code 2024, mais
je pressens que Gleam pourrait bien être un de mes compagnons de programmation
en 2025. J'aimerais beaucoup explorer ses capacités en développement web,
notamment avec des frameworks comme [Lustre](https://hexdocs.pm/lustre/) pour
le frontend et [Wisp](https://hexdocs.pm/wisp/) pour le backend.
