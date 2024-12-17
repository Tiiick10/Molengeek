let myObject = {
    nom: 'nicolas',
    age: 18,
}

// 1

let objectDiv = document.getElementById('object')

let myElements = [objectDiv.querySelector('h1'), objectDiv.querySelector('h2')]

// 2

let proprieteTableau = Object.keys(myObject)

console.log(proprieteTableau)

// 3

proprieteTableau.forEach(propriete => {

    console.log(propriete)

})

// 4

proprieteTableau.forEach(propriete => {

    console.log(myObject[propriete])

})

// 5

proprieteTableau.forEach((propriete, index) => {

    console.log(`Index: ${index}, Propriété: ${propriete}, Valeur: ${myObject[propriete]}`)

})

// 6

myElements.forEach((element, index) => {

    if (proprieteTableau[index] !== undefined) {

        element.textContent = `${proprieteTableau[index]}: ${myObject[proprieteTableau[index]]}`

    }

})
