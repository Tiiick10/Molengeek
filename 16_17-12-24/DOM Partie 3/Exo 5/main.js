let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub: '100%',
    Discord: '15%',
}

// 1

let elements = document.querySelectorAll('#liste-soft-skills h2')

// 2. Réorganiser les éléments h2 en fonction de l'ordre dans softSkills

let reorga = Object.keys(softSkills)

let orderedElements = reorga.map(skill => {

    // Chercher l'élément correspondant à chaque compétence

    return Array.from(elements).find(element => element.textContent.trim() === skill)

}).filter(Boolean) // Filtrer les éléments existants

//Réorganiser le contenu de la div #liste-soft-skills

let wrapper = document.getElementById('liste-soft-skills')

wrapper.innerHTML = ''

// Ajouter les éléments dans le bon ordre

orderedElements.forEach(elem => {

    wrapper.appendChild(elem)

})

// 4

for (let softSkill in softSkills) {
    
    for (let i = 0; i < elements.length; i++) {

        if (elements[i].textContent.trim() === softSkill) {

            elements[i].textContent += " - " + softSkills[softSkill]

            // Pourcentage --> nombre entier pour la comparaison

            let pourcentage = parseInt(softSkills[softSkill])

            if (pourcentage < 50) {

                elements[i].style.backgroundColor = 'red'

            } else if (pourcentage > 50 && pourcentage <= 99) {

                elements[i].style.backgroundColor = 'green'

                elements[i].style.color = 'white'

            } else if (pourcentage === 50) {

                elements[i].style.backgroundColor = ''

            } else if (pourcentage === 100) {

                elements[i].style.backgroundColor = 'gold'

                elements[i].style.color = 'black'
            }

            break
        }
    }
}
