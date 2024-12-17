let competences = {

    HTML: '71%',
    CSS: '95%',
    JS: '50%',
    React: '18%',
    Laravel: '100%'
    
}

// 1

let elements = document.querySelectorAll('#liste-competences h2')


// Parcours de l'objet : competences

for (let competence in competences) {

    // Cherche le H2 correspondant à la compétence

    for (let i = 0; i < elements.length; i++) {

        if (elements[i].textContent.trim() === competence) {

            // Insère le pourcentage dans le H2

            elements[i].textContent += " - " + competences[competence]

            // 3

            let pourcentage = parseInt(competences[competence])

            if (pourcentage < 50) {

                elements[i].style.backgroundColor = 'red'

            } else if (pourcentage > 50) {

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
