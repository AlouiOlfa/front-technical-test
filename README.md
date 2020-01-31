# La Fourche - Test Technique Dev Front

## Sujet

Le but de ce test technique est de tester ta capacité à traiter des problèmes simples et récurrents en JS, notamment en React dans un contexte ecommerce.

Tu vas donc devoir faire une page "collection de produits", paginée par 20, ainsi qu'une page "fiche produit".

Sur la page collection, chaque produit doit avoir une image miniature, un nom, et un prix, en cliquant sur le produit on arrive sur la fiche produit.

Sur la fiche produit doivent apparaître:

* L'image en grand
* Le nom
* Le prix
* Le prix baré
* La quantité
* La description
* Le fabriquant (vendor)
* Le poids
* Le SKU
* Un bouton "Ajouter au panier" si l'article est en stock ou un bouton "Me notifier quand le produit est de retour" sinon (les boutons ne seront reliés à rien)

Tu devras pour ça faire appel à une API, et en restituer les produits.

Le style importe peu, pas besoin de quelque chose de joli, tant que c'est lisible. Il vaut mieux se concentrer sur la qualité du JS dans cet exercice.

## Contraintes

### Temps

L'exercice doit te prendre entre 2 et 4 heures. S'il te prend plus, n'insiste pas, rends le tel quel, en fonction du résultat j'estimerai si c'était trop demandé, ou pas.

### Technos

L'exercice devra être fait avec [Next.js](https://nextjs.org/), un framework SSR basé sur React. Si tu sais faire du React, cela ne devrait pas poser de problème.

L'usage de TypeScript est un plus, mais pas obligatoire.

L'usage d'une PWA, notamment des stratégies de cache, est un plus, mais pas obligatoire.

Tu ne dois évidemment pas utiliser directement le fichier ```products.json``` présent à la racine de ce repo, tu dois faire les appels à l'API à lancer avec Docker.

## Setup de l'API

L'API est basée sur l'outil [json-server](https://github.com/typicode/json-server), tu trouveras donc toute la documentation sur la doc officielle, mais je te donne quand même les principaux appels dont tu as besoin un peu plus bas.

### Setup

Lance l'API avec Docker Compose :

```docker-compose up```

Et vérifie qu'elle marche : [http://localhost:8080](http://localhost:8080)

### Usage

Pour lister les produits: [http://localhost:8080/products?_page=1&_limit=20](http://localhost:8080/products?_page=1&_limit=20)

Pour récupérer un produit par son slug (handle dans Shopify): [http://localhost:8080/products?handle=la-fourche-250g-de-graines-de-courge-en-vrac-bio](http://localhost:8080/products?handle=la-fourche-250g-de-graines-de-courge-en-vrac-bio)

## Livrable

Le livrable sera sous la forme d'une Pull Request, de ton fork vers la branche master de ce repo.

# Front-End Application

Clone this repo using git clone https://github.com/AlouiOlfa/-ReactCodingChallenge.git <YOUR_PROJECT_NAME>
Move to the appropriate directory: cd <laFourche>.
Run npm run install in order to install dependencies.
At this point you can run npm dev to see the example app at http://localhost:3000.