let listItems = document.querySelectorAll('ul li')

// Exercice 1 : Afficher une alerte avec le texte du li cliqué

function sayMyName(text) {
    
    alert(text)
}

listItems.forEach(li => {

    li.addEventListener('click', () => {

        sayMyName(li.textContent)

    })
})

// Exercice 2 : Modifier le contenu d'un li via un prompt

listItems.forEach(li => {

    li.addEventListener('dblclick', () => {

        let newText = prompt('Entrez un nouveau texte pour ce li:', li.textContent)

        if (newText) {

            li.textContent = newText
        }
    })
})

// Exercice 3 : Inverser deux li

let inputOne = document.querySelector('#li-one')

let inputTwo = document.querySelector('#li-two')

let button = document.querySelector('input[type="button"]')

button.addEventListener('click', () => {

    let indexOne = parseInt(inputOne.value) - 1 // Convertit l'input en index (base 0)
    let indexTwo = parseInt(inputTwo.value) - 1

    // Vérifie si les index sont valides

    if (

        indexOne >= 0 && indexOne < listItems.length &&
        indexTwo >= 0 && indexTwo < listItems.length &&
        indexOne !== indexTwo

    ) {

        let parent = listItems[0].parentNode

        let liOne = listItems[indexOne]

        let liTwo = listItems[indexTwo]

        // Inverse les deux li

        parent.insertBefore(liTwo, liOne.nextSibling)
        parent.insertBefore(liOne, liTwo)

        // Met à jour la NodeList après l'inversion

        listItems = document.querySelectorAll('ul li')

    } else {

        alert('Les index sont invalides ou identiques.')

    }
})
