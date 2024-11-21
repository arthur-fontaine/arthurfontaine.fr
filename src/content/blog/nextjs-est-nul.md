---
title: "Next.js : Le framework qui vous enferme plus qu'il ne vous libère, et comment s'en affranchir"
description: Derrière Next.js, le framework React le plus populaire se cache un modèle économique et technologique qui peut rapidement devenir un piège pour les développeurs. Dans cet article, nous allons explorer les dangers de la dépendance à Next.js et Vercel, et proposer des alternatives.
date: 2024-11-21
tags:
  - nextjs
  - discussion
  - web development
language: fr
translationKeys:
  en: nextjs-is-bad
  fr: nextjs-est-nul
---

# Next.js : Le framework qui vous enferme plus qu'il ne vous libère, et comment s'en affranchir

Next.js, développé par Vercel, est un framework React populaire qui a
révolutionné le développement d'applications web en offrant des
fonctionnalités avancées comme le Server-Side Rendering.

Cependant, derrière cette façade attrayante se cache un modèle économique et
technologique qui peut rapidement devenir un piège pour les développeurs. Dans
cet article, nous allons explorer les dangers de la dépendance à Next.js et
Vercel, et proposer des alternatives *selon moi, meilleures*.

## Les dangers de la dépendance à Next.js et Vercel

### Un modèle économique contraignant

Utiliser Next.js revient à s'enchaîner volontairement à un modèle économique
qui peut devenir restrictif. Vercel, la plateforme derrière Next.js, propose
une "simple" surcouche à AWS, mais avec des tarifs largement supérieurs
malgré leur offre "gratuite" qui n'a d'autre but que d'attirer les
développeurs.

On pourrait penser que l'offre gratuite de Vercel peut suffire pour la
plupart des petits projets que l'on développe. Mais en réalité, si votre site
subit un DDoS (attaque par déni de service, où l'attaquant tente de spammer
votre site pour le rendre inaccessible), vous atteindrez rapidement la limite
de bande passante, et Vercel vous facturera des frais exorbitants. On retrouve
beaucoup de témoignages de développeurs ayant été confrontés à cette situation,
comme [ce post sur Twitter](https://x.com/T_Zahil/status/1808764723103416620).

Vercel encourage (pour ne pas dire force) également fortement
les développeurs à utiliser son propre service d'hébergement, rendant difficile
l'utilisation d'alternatives.

Des initiatives communautaires comme [OpenNext](https://opennext.js.org/) tentent de limiter cet
enfermement technologique, mais la stratégie de Next.js reste claire :
construire un écosystème difficile et coûteux à quitter.

Cet objectif d'enfermement s'est confirmé avec la récente acquisition de
[Turbo](https://turbo.build/) par Vercel. En achetant Turbo, et en voulant
utiliser Turbopack comme builder par défaut pour Next.js, Vercel renforce
son influence sur tout projet Next.js.

### Des performances discutables

Les performances de Next.js soulèvent des questions importantes. En plus de
reposer sur le rendu côté serveur, qui peut introduire une charge de travail
conséquente pour le serveur, Next.js est souvent critiqué pour sa lenteur
et sa consommation excessive de ressources.

Voici une liste non exhaustive des benchmarks effectués par des tiers :

- [Next.js qui est 170 fois plus lent que React pour un "Hello World"](https://x.com/thdxr/status/1777782835249553517)
- [Le temps de réponse de Next.js est 6 fois plus lent que celui de Nuxt.js](https://x.com/icarusgkx/status/1664015769280163840)
- [Le bundle de Next.js qui est ~7 fois plus gros que celui de SvelteKit](https://x.com/khromov/status/1831123411789025365)

### Des montées de versions risquées

Les habitués de Next.js savent qu'il faut être prudent lors des mises à jour.
Plusieurs développeurs ont rapporté des expériences où une simple mise à
jour d'une version mineure incluait des breaking changes inattendus.
Ces modifications peuvent entraîner des dysfonctionnements majeurs, allant
jusqu'à rendre une application entièrement inopérante.

Ce manque de stabilité et de prévisibilité dans les mises à jour peut non
seulement ralentir le développement, mais aussi compromettre la fiabilité des
applications en production, obligeant les équipes à consacrer un temps précieux
à la résolution de problèmes imprévus. Elle traduit aussi selon moi un manque
de respect envers les développeurs de la part de l'équipe Vercel.

### Des risques systémiques

L'histoire du web a montré à plusieurs reprises les dangers liés à une
dépendance excessive envers des solutions propriétaires. Prenons l'exemple
de [Parse](https://en.wikipedia.org/wiki/Parse,_Inc.), racheté puis fermé par Facebook en 2017. Bien que cette fermeture
n'ait pas provoqué la disparition directe d’entreprises, elle a mis des
centaines de startups dans l'embarra, les obligeant à migrer en urgence
vers d'autres solutions, provoquant des coûts financiers et temporels
non prévus.

Une situation similaire pourrait survenir avec Vercel. Une augmentation
brutale des prix ou des vulnérabilités majeures pourraient avoir des
répercussions importantes sur les projets dépendants.

### D'autres problèmes subjectifs

Je pourrais également parler de l'architecture des projets Next.js, ou d'autres
points négatifs encore, mais ce sont des opinions subjectives que je traiterais
peut-être dans un autre article.

## Deux paradigmes web, deux défis techniques

Le paysage web moderne se divise fondamentalement en deux catégories : les
landing pages et les applications complexes. Chacune requiert une approche
technique distincte que Next.js ne sert pas toujours efficacement.

### Landing Pages : La force du Statique

Pour les landing pages, le SSG (Static Site Generation) est une solution
idéale. En générant statiquement un site, on bénéficie de performances
exceptionnelles : chargement instantané, faible coût computationnel,
sécurité renforcée, et SEO optimisé.

[Astro](https://astro.build/) est un excellent choix pour développer des landing pages.
Grâce à sa simplicité, on peut créer un site performant et élégant en quelques
minutes et quelques lignes de code. Malgré cette accessibilité, Astro reste
adaptable et puissant : il permet une personnalisation avancée pour répondre
aussi aux exigences de sites plus complexes. Et si vous avez tout de même
besoin de SSR (Server-Side Rendering), Astro le supporte nativement.

Son écosystème de plugins est également un atout majeur. Par exemple, certains
plugins dédiés au SEO permettent d’optimiser automatiquement le référencement
des sites, en offrant une configuration intuitive et des résultats efficaces
sans complexité inutile.

Enfin, combiner le SSG à un CDN comme celui de Cloudflare permet de servir des
dizaines de millions de pages avec des coûts extrêmement bas (quelques euros
seulement), là où des services comme Vercel deviennent rapidement onéreux.

### Applications Web : La simplicité du CSR

Pour les applications complexes, le CSR (Client-Side Rendering) est souvent
largement suffisant puisqu'il n'y a pas de besoins spécifiques en termes de
SEO. Dans cette optique, on peut se reposer sur [Vite](https://vite.dev/), un outil de build à la
fois rapide et performant, qui par ailleurs incarne pour moi le projet open
source par excellence.

Cependant, créer une application complète avec Vite n’est pas aussi simple
qu'avec Next.js. C’est pour cette raison que j’ai développé [Agrume](https://agrume.js.org/),
une librairie qui se "branche" à Vite et qui rend l’écriture d’un backend aussi
facile qu’avec Next, mais sans compromis sur la flexibilité.

La combinaison de React, Vite, Agrume, [Tanstack Query](https://tanstack.com/query/) et un ORM permet de
bâtir une architecture moderne, simple et indépendante des plateformes
propriétaires. Je partagerai très bientôt un template complet pour démarrer un projet
avec cette stack.

## Conclusion

Next.js a permis des avancées importantes pour les applications web, mais
son écosystème repose sur un modèle parfois restrictif en termes de coûts
et de technologies. En explorant des outils comme Astro ou Vite, les
développeurs peuvent construire des solutions performantes tout en restant
sereins face à l’évolution de leurs projets et de leurs besoins.
