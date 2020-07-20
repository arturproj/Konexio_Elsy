# Konexio_Elsy
Etape 1 - Créez le module App
Dans le src/App.js

Ouvrez et effacez tout son contenu
Importez le package react et assignez le à la variable React
Créez la classe App qui hérite de React.Component
Ajoutez la méthode render à la classe qui va retourner une div avec le texte : Bonjour !
Exportez le module App pour qu’il soit disponible au niveau de l’application
Vérifiez sur votre navigateur que vous voyez le texte Bonjour !

Créez les variables immuables suivantes, entre la zone d’import et celle de la déclaration de classe :
MIN_TEMPERATURE = -20
MAX_TEMPERATURE = 40
MIN_HEART = 80
MAX_HEART = 180
MIN_STEPS = 0
MAX_STEPS = 50000
Maintenant, vous pouvez passer à l’étape 2

Trucs et astuces
Par convention les variables sont en majuscules et chaque mot séparé par des underscores (_), car ces variables sont de vraies constantes de l’application qui changeront que très rarement. Un autre exemple de constante métier : le taux de TVA. Il changera que par un choix de l’état et très rarement, voire jamais.
Etape 2 - Afficher les variables
Dans le src/App.js, ajoutez :

Une div de classe container-fluid dans le render
Pour valider l’étape 2, imprimez, temporairement, les valeurs des variables immuables (étapes 1) dans la div afin de voir :

Battements de coeur: 80
Température : -20
Nombre de pas : 0
Trucs et astuces
Utilisez une balise p pour passer à la ligne
Utilisez les crochets {} pour invoquer du code Javascript dans le JSX
Etape 3 - Créer et importer un composant
Créez le dossier components dans le dossier src

Créez le fichier src/components/Person.js

Créez le module Person avec le minimum requis (étape 1)

import
class
render
export
Dans le render

Créez une div avec les classes box, col-md-2 et col-6
Incluez l’icône directions_walk
Ajoutez l’attribut style avec les clés et valeurs suivantes :
fontSize = 100
color = black
Dans le fichier src/App.js

Importez le module Person que vous venez de créer
Enlevez tous ce qu’il y a dans la div du render
Ajoutez le module Person avec son écriture JSX (similaire à l’HTML)
Avant de passer à l’étape 4, vérifiez qu’un petit bonhomme apparaîsse en haut à gauche de l’écran

Trucs et astuces
Pour inclure une icône :
Allez sur le site material.io
Cliquez sur l’icône voulue (une barre bleue apparaît en bas)
Cliquez sur Selected Icon en bas à gauche
Utilisez le code compris dans le paragraphe Usage (nous avons déjà fait la partie Icon font dans la phase d’installation)
Pour tout import de fichier qui ne font pas partis du dossier node_modules, utilisez le chemin relatif du fichier
Etape 4 - Un peu de styles
Dans le fichier public/css/styles.css, ajoutez une règle pour que cases de classes box paires aient une couleur #CCC et #AAA pour les impaires
Chaque case aura une hauteur de 190, un padding de 10 et tous les textes sont centrés
Pour la case de l’eau, ajoutez une autre classe à laquelle vous mettrez une couleur de fond de #3A85FF et le texte de couleur blanche
Vous maîtrisez déjà cette partie, vous pouvez passer à l’étape 5

Etape 5 - Passer des valeurs à un composant
Créez un fichier HeartRate.js dans le dossier src/components (à côté du module Person créé dans l’étape précédente)

Créez le module HeartRate avec le minimum requis (étape 1 et 3)

Dans le render

Créez une div avec les classes box, col-md-2 et col-6
Incluez l’icône favorite
Ajoutez l’attribut style à l’icône avec les clés et valeurs suivantes :
fontSize = 100
color = red
Dans une balise p, imprimez temporairement, la prop heart
Dans le fichier src/App.js

Importez le module HeartRate que vous venez de créer
Ajoutez le module HeartRate dans le render à côté du module Person
Ajoutez l’attribut heart avec la valeur de la props (min) du même nom
Pour passer à l’étape 6, vérifiez dans votre navigateur que vous voyez l’icône du coeur avec le chiffre 80 en dessous

Trucs et astuces
Utilisez les crochets {} pour invoquer du code Javascript dans le JSX
Les props sont accessibles à la lecture dans toutes les méthodes d’un composant React via this.props.<nom_de_la_prop>
Pour tout import de fichier qui ne font pas partis du dossier node_modules, utilisez le chemin relatif du fichier
Etape 6 - Le concept DRY (Don’t Repeat Yourself)
Lors de la création des composants Person et HeartRate, on a utilisé à 2 reprises le code HTML pour créer une icône. Ce code n’avait que le nom de l’icône et la couleur qui changeait. Le reste du code, certes simple, se répète…

Don’t Repeat Yourself!

Créez le dossier core dans src/components
Créez le fichier Icon.js dans src/components/core
Créez le module Icon avec le minimum requis
Dans le render, créez le code HTML pour une icône, et au lieu d’écrire un nom d’icône, inscrivez la prop name à la place
Retournez dans les fichiers src/components/Person.js et src/components/HeartRate.js
Importez le module Icon
Enlevez le code HTML de l’icône
Ajoutez le JSX pour inclure le module Icon
Mettez les attributs
name et la valeur directions_walk et favorite pour le module Person et HeartRate, respectivement
Afin d’avoir la couleur noire et rouge des composants Person et HeartRate, envoyer les valeurs black et red dans les icônes afin qu’elles s’affichent dans la bonne couleur

Pour finir la journée, vérifiez que vous avez le même résultat qu’à l’étape 5

Trucs et astuces
Utilisez les crochets {} pour invoquer du code Javascript dans le JSX
Les props sont accessibles à la lecture dans toutes les méthodes d’un composant React via this.props.<nom_de_la_prop>
Pour tout import de fichier qui ne font pas partis du dossier node_modules, utilisez le chemin relatif du fichier

Etape 7 - Définir les states
Dans le src/App.js, ajoutez :

Un constructeur (constructor) au dessus de la méthode render

L’instruction super

Le state avec les clés et valeurs suivantes :

water = 0
heart = 120
temperature = -10
steps = 3000
Passez les states à vos composant respectifs

Etape 8 - Importer un composant externe
Pour changer les valeurs, on aura besoin d’un slider. Plutôt que de recréer la logique d’un slider, on va importer et utiliser un slider open source (libre de droit).

Voici la documentation. Prenez le temps de la lire avant de commencer cette étape.

Dans votre terminal, à la source de votre projet, tapez : npm install rc-slider
Dans le dossier src/components/core, créez le fichier Slider.js
Créez le module Slider avec le minimum requis
Importez le module rc-slider avec la variable RCSlider
Importez son CSS, comme dans la documentation
Dans le render, créez un conteneur div
Dans la div, appelez le module RCSlider
Nous voulons que ce module suive le concept DRY. Nous allons donc créer tous les attributs qui seront déterminés par le parent, via props.

Ajoutez les attributs suivants dans le RCSlider, avec les props du même nom:
max
min
onChange
value
Les attributs max, min et value vont contenir des chiffres. L’attribut onChange va contenir une fonction. Car oui, on peut aussi transférer des fonctions entre les composants. Nous verrons son utilité plus tard.

Dans le fichier src/components/HeartRate.js

Importez le module Slider
Enlevez la balise p qui appelait la prop heart
Ajoutez le Slider en dessous de l’icône
Dans les attributs du Slider, ajoutez les attributs et props du même nom :
min
max
onChange
Pour l’attribut value, mettez la prop nommée : heart
Dans le fichier src/App.js

Créez la méthode onHeartChange entre le render et le constructor
Ajoutez le paramètre val à cette méthode
N.B : val est la position du slider envoyé par la méthode onChange du rc-slider
Changez le state de this.state.heart avec la valeur val
Dans le constructor, créez un binding avec la méthode onHeartChange
Ajoutez les attributs suivants au module HeartRate :
min avec la valeur MIN_HEART
max avec la valeur MAX_HEART
onChange avec la valeur onHeartChange
Vérifiez que vous pouvez manipuler votre slider et que celui-ci suit les mouvements de votre curseur.

Pour passer à l’étape 9, reproduire les mêmes étapes pour les composants Person et Temperature avec les states steps, temperature et les méthodes onStepsChange et onTemperatureChange

Trucs et astuces
Les require (ES5) peuvent être remplacés par les import (ES6)
Pour changer le state, utilisez uniquement la méthode this.setState({ key : value }). La propriété this.state est uniquement une propriété de lecture ou d’instanciation
Etape 9 - A toi de jouer, l’artiste !
Créez une méthode calculateWater qui va changer le state de water
Toutes les interactions sont en places, il faut maintenant créer la formule mathématique validée par Mac Lesggy et les frères Bogdanov pour savoir combien de litres d’eau vous allez boire par jour.

Voici l’énoncé :

Quelque soit les éléments externes, vous devez boire au moins 1,5 litre d’eau par jour
Si la température est supérieure à 20 degrés Celsius, chaque degré au dessus aura un facteur de 0,02 litres en plus
Si les battements de coeurs sont au dessus de 120, chaque battement au dessus aura un facteur de 0,0008 litres en plus
Si le nombre de pas est supérieur à 10 000, chaque pas au dessus aura un facteur de 0,00002 litres en plus
Pour info, la HAS (Haute Autorité de Santé) recommande 10 000 pas par jour.

Trucs et astuces
Pour changer le state, utilisez uniquement la méthode this.setState({ key : value }). La propriété this.state est uniquement une propriété de lecture ou d’instanciation