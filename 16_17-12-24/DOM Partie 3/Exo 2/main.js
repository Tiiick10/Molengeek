// Partie 1 : Ajout de contenu

// 1

let h1 = document.querySelector('h1')

h1.textContent = 'Les attributs class et id'

// 2

let firstH2 = document.querySelectorAll('h2')[0]

firstH2.textContent = 'Exercice 2 partie A'

// 3

let secondH2 = document.querySelectorAll('h2')[1]

secondH2.textContent = 'Exercice 2 partie B'

// 4

let firstP = document.querySelectorAll('p')[0]

firstP.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les méthodes <b>par coeur</b>"

// 5

let secondP = document.querySelectorAll('p')[1]

secondP.innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide"


// Partie 2.1 : Ajout d'attributs et de leurs valeurs

// 6

h1.setAttribute('id', 'bigTitle')

// 7

let div = document.querySelector('div')

div.setAttribute('class', 'container')

// 8

let h2Elements = document.querySelectorAll('h2')

h2Elements.forEach(h2 => {

    h2.setAttribute('class', 'title')

})

// 9

let pElements = document.querySelectorAll('p')

pElements.forEach(p => {

    p.setAttribute('class', 'text')

})

// Partie 2.2 : Ajout d'attributs et de leurs valeurs

// 10

let firstSection = document.querySelectorAll('section')[0]

firstSection.setAttribute('class', 'margin-bottom border-black padding')

// 11

let secondSection = document.querySelectorAll('section')[1]

secondSection.setAttribute('class', 'margin-top border-black padding')

// 12

let divInSection = document.querySelector('section div')

divInSection.setAttribute('style', 'background-color: blue; border: 2px solid black; height: 20px; width: 20px;')
