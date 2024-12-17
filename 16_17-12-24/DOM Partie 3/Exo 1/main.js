// 1 Récupère le h2 dont la valeur est "Exercice" et affiche uniquement le text

let h2 = document.querySelector('h2')
console.log (h2.textContent)

// 2 Trouve le moyen de modifier sa valeur par "Exercice 1"

let h2Modifier = h2.innerText = ("Exercice 1")
console.log(h2Modifier)

// 3 Récupère l'élément p juste en dessous de h2 et rajoute y la ligne js utilisé pour résoudre l'exercice 2.

let p = document.querySelector('p')
let pModifier = p.innerText = ("Exercice 1")
console.log(pModifier)

// 4 Récupère la première section et trouve le moyen d'affiche juste le nom de l'id dans la console

let firstSection = document.querySelectorAll('section')[0]
console.log(firstSection.getAttribute("id"))

// 5 Récupère le premier h1 et trouve le moyen d'afficher juste le nom de la class dans la console
// ( attention il existe deux propriétés pour afficher les class, fait l'exercice avec l'une et puis avec l'autre !)

let firstH1 = document.querySelectorAll('h1')[0]
console.log(firstH1.getAttribute("class"))

// 6 Avec l'aide d'un forEach affiche le nom de class de chaque h1

let allH1 = document.querySelectorAll('h1')

let h1Array = Array.from(allH1)

h1Array.forEach(h1 => console.log(h1.getAttribute("class")))

// 7 Trouve une propriété pour afficher tous les attributs du premier input

let premierInput = (document.querySelectorAll('input')[0])
console.log(premierInput.getAttributeNames())

// 8 Trouve le moyen de récupérer la valeur dans l'attribut type du premier input

let firstInput = document.querySelector('input')

let typeValue = firstInput.getAttribute('type')

console.log(typeValue)

// 9 Récupère l'input dont l'id est "inputPassword3" et ajoute lui un attribut "type" dont la valeur est "password"

let inputPassword = document.getElementById('inputPassword3')

inputPassword.setAttribute('type', 'password')

// 10 Modifie la valeur de l'attribut "type" du premier input avec la valeur "color"

firstInput.setAttribute('type', 'color')
