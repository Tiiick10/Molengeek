// Exercice 1

// 1.1 Récupérer les deux inputs et faire un console.log

let input1Ex1 = document.querySelector('#exo-1 input:nth-child(1)')

let input2Ex1 = document.querySelector('#exo-1 input:nth-child(3)')

console.log(input1Ex1, input2Ex1)

// 1.2 Récupérer le titre de l'exercice et afficher son innerText

let titleEx1 = document.querySelector('#exo-1 h3')

console.log(titleEx1.innerText)

// 1.3 Récupérer les valeurs des inputs et afficher via console.log

console.log(input1Ex1.value, input2Ex1.value)

// 1.4 Créer une fonction addition

function additionEx1() {

    let val1 = parseInt(input1Ex1.value)
    let val2 = parseInt(input2Ex1.value)
    let result = val1 + val2
    console.log(result)

}

// 1.5 Gestion des valeurs non-numériques avec isNaN

function safeAdditionEx1() {

    let val1 = parseInt(input1Ex1.value)
    let val2 = parseInt(input2Ex1.value)

    if (isNaN(val1) || isNaN(val2)) {

        console.log('Veuillez entrer uniquement des nombres.')

    } else {

        let result = val1 + val2
        console.log(result)
    }
}

// 1.7 Ajouter un event listener sur le bouton

let buttonEx1 = document.querySelector('#exo-1 .btn')

buttonEx1.addEventListener('click', () => {

    let val1 = parseInt(input1Ex1.value)
    let val2 = parseInt(input2Ex1.value)

    if (isNaN(val1) || isNaN(val2)) {

        document.querySelector('#response1').textContent = 'Erreur :Non valide'

    } else {

        let result = val1 + val2
        document.querySelector('#response1').textContent = result
    }
})

// Exercice 2

// 2.1 Récupérer les éléments nécessaires

let input1Ex2 = document.querySelector('#exo-2 input:nth-child(1)')

let input2Ex2 = document.querySelector('#exo-2 input:nth-child(3)')

let operatorEx2 = document.querySelector('#exo-2 select')

let buttonEx2 = document.querySelector('#exo-2 .btn')

// 2.2 Créer la fonction addition avec switch

buttonEx2.addEventListener('click', () => {

    let val1 = parseInt(input1Ex2.value)
    let val2 = parseInt(input2Ex2.value)
    let operator = operatorEx2.value
    let result

    if (isNaN(val1) || isNaN(val2)) {

        document.querySelector('#response2').textContent = 'Erreur : Non valide'

        return
    }

    switch (operator) {

        case '+':
            result = val1 + val2
            break

        case '-':
            result = val1 - val2
            break

        case '*':
            result = val1 * val2
            break

        case '/':
            result = val2 !== 0 ? val1 / val2 : 'Erreur : Division par zéro'
            break

        default:
            result = 'Erreur : Opérateur invalide'
    }

    document.querySelector('#response2').textContent = result
})

// Exercice 3 : Variables et éléments nécessaires
let input1Ex3 = document.querySelector('#exo-3 input:nth-child(1)')
let input2Ex3 = document.querySelector('#exo-3 input:nth-child(3)')
let operatorSpanEx3 = document.querySelector('#exo-3 span') // Span pour afficher l'opérateur
let buttonEqualEx3 = document.querySelector('#exo-3 .btn') // Bouton "="
let responseEx3 = document.querySelector('#response3') // Zone de réponse

let operatorEx3 = '+' // Opérateur par défaut

// Mise à jour de l'opérateur lors du clic sur les boutons opérateurs
document.querySelectorAll('#operatorsExo3 .btn').forEach(button => {
    button.addEventListener('click', () => {
        operatorEx3 = button.textContent.trim() // Récupération de l'opérateur
        operatorSpanEx3.textContent = operatorEx3 // Affichage de l'opérateur dans le span
    })
})

// Fonction pour calculer et afficher le résultat
buttonEqualEx3.addEventListener('click', () => {
    let val1 = parseFloat(input1Ex3.value) // Conversion en float pour accepter les décimaux
    let val2 = parseFloat(input2Ex3.value)

    // Vérification des entrées : afficher une erreur si ce ne sont pas des nombres valides
    if (isNaN(val1) || isNaN(val2)) {
        responseEx3.textContent = 'Erreur : Veuillez entrer des nombres valides'
        return
    }

    let result
    switch (operatorEx3) {
        case '+':
            result = val1 + val2
            break
        case '-':
            result = val1 - val2
            break
        case '*':
            result = val1 * val2
            break
        case '/':
            result = val2 !== 0 ? val1 / val2 : 'Erreur : Division par zéro'
            break
        default:
            result = 'Erreur : Opérateur invalide'
    }

    // Affichage du résultat
    responseEx3.textContent = result
})



// Exercice 4

// Fonctionnalités avancées pour une calculatrice complète

let input1Ex4 = document.querySelector('#exo-4 input:nth-child(1)')

let input2Ex4 = document.querySelector('#exo-4 input:nth-child(3)')

let operatorEx4 = '+'

let buttonEx4 = document.querySelector('#exo-4 .btn')

// Boutons numériques

document.querySelectorAll('#numbersExo4 .btn').forEach(button => {

    button.addEventListener('click', () => {

        if (document.activeElement === input1Ex4) {
            input1Ex4.value += button.textContent.trim()

        } else if (document.activeElement === input2Ex4) {

            input2Ex4.value += button.textContent.trim()

        }
    })

})

// Boutons opérateurs

document.querySelectorAll('#operatorsExo4 .btn').forEach(button => {

    button.addEventListener('click', () => {

        operatorEx4 = button.textContent.trim()
    })
})

// Calcul et affichage

buttonEx4.addEventListener('click', () => {

    let val1 = parseInt(input1Ex4.value)
    let val2 = parseInt(input2Ex4.value)
    let result

    if (isNaN(val1) || isNaN(val2)) {

        document.querySelector('#response4').textContent = 'Erreur : Non valide'

        return
    }

    switch (operatorEx4) {

        case '+':
            result = val1 + val2
            break

        case '-':
            result = val1 - val2
            break

        case '*':
            result = val1 * val2
            break

        case '/':
            result = val2 !== 0 ? val1 / val2 : 'Erreur : Division par zéro'
            break

        default:
            result = 'Erreur : Opérateur invalide'
    }

    document.querySelector('#response4').textContent = result
})
