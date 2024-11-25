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

[Next.js](https://nextjs.org/), développé par [Vercel](https://vercel.com/), est un framework React populaire qui a
révolutionné le développement d'applications web en offrant des
fonctionnalités avancées comme le Server-Side Rendering.

Cependant, derrière cette façade attrayante se cache un modèle économique et
technologique qui peut rapidement devenir un piège pour les développeurs. Dans
cet article, nous allons explorer les dangers de la dépendance à Next.js et
Vercel, et proposer des alternatives *selon moi, meilleures*.

## Les dangers de la dépendance à Next.js et Vercel

### Des optimisations exclusives

Vercel a conçu l'infrastructure de son service d'hébergement pour épouser
parfaitement Next.js, comme deux engrenages qui s'emboîtent parfaitement.
En hébergeant un site Next.js sur Vercel, vous bénéficiez d'optimisations
exclusives, difficilement reproductibles ailleurs. C’est une stratégie
délibérée de verrouillage technologique.

Les performances de Next.js sur Vercel sont si fluides et si optimisées qu’il
devient presque impossible de retrouver une expérience similaire sur d'autres
plateformes. Face à cette situation, [OpenNext](https://opennext.js.org/) est né : une initiative
communautaire qui cherche à casser ce monopole en permettant aux développeurs
de profiter des mêmes optimisations sur des solutions d’hébergement
alternatives.

Le comportement de Vercel me semble profondément immoral. Cette approche,
qui consiste à développer un framework open source, tout en favorisant son
propre service d'hébergement propriétaire, au détriment de ses concurrents
et même de ses utilisateurs qui souhaiteraient auto-héberger leur site,
ne correspond pas aux valeurs de l'open source qui m'ont été transmises.

Le pire est que Vercel semble vouloir aller encore plus loin dans cette
direction. C'est ce qu'illustre l'[acquisition de Turbo par Vercel](https://vercel.com/blog/vercel-acquires-turborepo). En
prévoyant de faire de [Turbopack le builder par défaut de Next.js](https://turbo.build/pack/docs/roadmap#:~:text=Next%2C%20we%20want%20to%20use%20Turbopack%20to%20power%20production%20builds%20with%20Next.js.%20We%20think%20that%20this%20will%20result%20in%20a%20big%20boost%20in%20performance%2C%20especially%20when%20integrated%20with%20remote%20caching.), Vercel pousse
encore plus loin sa logique d'optimisations exclusives. Les optimisations de
Turbopack seront progressivement conçues pour [tirer parti des spécificités des serveurs de Vercel](https://turbo.build/pack/docs/roadmap#remote-caching-and-replication),
rendant encore plus complexe la tâche de se passer d'eux. Ce n'est plus
seulement une question d'hébergement, mais désormais aussi de compilation et de
build, créant des dépendances techniques toujours plus profondes et difficiles
à contourner.

### Des prix exorbitants

Une fois que vous êtes enfermé dans l'écosystème Vercel, vous êtes à la merci
de ses tarifs. Vercel propose d'ailleurs une offre "gratuite" qui n'a d'autre but
que de convaincre les développeurs qui n'avaient pas déjà été convaincus par les
optimisations exclusives de Vercel. Mais dès que votre projet prend de l'ampleur,
vous risquez de vous retrouver avec des factures exorbitantes.

J'ai en mémoire plusieurs témoignages de développeurs ayant comparé les coûts
d'hébergement entre Vercel et d'autres solutions, et les résultats sont tout
simplement ahurissants.

[@karolyidav a partagé son calcul sur Twitter](https://x.com/karolyidav/status/1833138429716050227).
Un même site hébergé sur Vercel coûterait 35818 dollars par mois, contre
seulement 120 dollars sur Hetzner. Vous avez bien lu : héberger un site sur
Vercel coûterait 300 fois plus cher que sur Hetzner.

En fouillant un peu plus, on trouve d'autres témoignages similaires, comme
[@zackerydev qui compare le devis de Vercel à sa facture actuelle AWS](https://x.com/zackerydev/status/1717556827569660378).
Résultat : pour de simples fichiers statiques, Vercel lui aurait coûté environ
3000 dollars par mois, contre 12 dollars seulement sur AWS (soit 277 fois moins
cher).

Ces coûts sont difficiles justifiables selon moi d'un point de vue technique.
Ils pourraient être expliqués par la simplicité d'utilisation de Vercel. Mais
cette simplicité est simplement due à la stratégie de verrouillage
technologique de Vercel. En gros, Vercel vous fait payer le prix d'un problème
qu'il a lui-même créé.

En plus de ces coûts exorbitants, Vercel a également une éthique douteuse en
matière de facturation. [Thomas Sanlis a partagé son expérience sur Twitter](https://x.com/T_Zahil/status/1808764723103416620).
Après avoir subi une attaque DDoS (attaque par déni de service, où l'attaquant
tente de spammer votre site pour le rendre inaccessible) que Vercel n'a pas
su contrer (malgré [ses promesses de protection contre les DDoS](https://vercel.com/docs/security/ddos-mitigation)),
il a reçu une facture de 523 dollars de la part de Vercel qu'il a été [contraint de payer](https://x.com/T_Zahil/status/1819779707442761980).

### Des performances discutables

Les performances de Next.js soulèvent également des questions importantes. En
plus de reposer sur le rendu côté serveur, qui peut introduire une charge de
travail conséquente pour le serveur, Next.js est souvent critiqué pour sa
lenteur et sa consommation excessive de ressources.

Voici une liste non exhaustive des benchmarks effectués par des tiers :

- [Next.js qui est 170 fois plus lent que React pour un "Hello World"](https://x.com/thdxr/status/1777782835249553517)
- [Le temps de réponse de Next.js est 6 fois plus lent que celui de Nuxt.js](https://x.com/icarusgkx/status/1664015769280163840)
- [Le bundle de Next.js qui est ~7 fois plus gros que celui de SvelteKit](https://x.com/khromov/status/1831123411789025365)

Au-delà de simples métriques de performance, ces résultats ont des implications
concrètes, économiques et environnementales non négligeables. Ces performances
médiocres se traduisent directement par des besoins serveur plus importants :
des processeurs plus puissants, plus de RAM, une consommation électrique
accrue.

Dans un contexte où la sobriété numérique devient un enjeu écologique crucial,
ces performances pléthoriques sont plus qu'un simple inconvénient technique :
elles représentent un coût environnemental direct. Un serveur surconsommant de
l'énergie pour exécuter une application Next.js, c'est autant de ressources
gaspillées, autant de CO2 émis inutilement.

### Des risques systémiques

L'histoire du web a montré à plusieurs reprises les dangers liés à une
dépendance excessive envers des solutions propriétaires. Prenons l'exemple
de [Parse](https://en.wikipedia.org/wiki/Parse,_Inc.), racheté puis fermé par
Facebook en 2017. Bien que cette fermeture n'ait pas provoqué la disparition
directe d’entreprises, elle a mis des centaines de startups dans l'embarra, les
obligeant à migrer en urgence vers d'autres solutions, provoquant des coûts
financiers et temporels non prévus.

Une situation similaire pourrait survenir avec Vercel. Une augmentation
brutale des prix ou des vulnérabilités majeures pourraient avoir des
répercussions importantes sur les projets dépendants.

Ce risque est d'autant plus grand que Vercel est une startup, et une entreprise
qui [n'a pas encore réussi à être rentable](https://research.contrary.com/company/vercel#:~:text=However%2C%20a%20former%20Vercel%20employee%20reported%20neither%20Vercel%20nor%20Netlify%20had%20achieved%20profitability%20as%20of%202023).

### D'autres problèmes subjectifs

Je pourrais également parler de l'architecture de fichiers des projets Next.js,
ou d'autres points négatifs encore, mais ce sont des opinions subjectives que
je traiterais peut-être dans un autre article.

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
besoin de SSR (Server-Side Rendering), Astro le supporte nativement. Puis en
opposition à Next.js, Astro est déployable sur à peu près toutes les
plateformes d'hébergement auxquelles vous pouvez penser (en témoigne [les 26
adaptateurs officiels](https://docs.astro.build/en/guides/deploy/)).

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
