// 1. Créer un programme en utilisant e.target, qui permet au clic de la souris de :

let div = document.querySelector('div')
let p = document.querySelector('p')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')

document.addEventListener('click', function(e) {

  if (e.target === div) {
    div.style.border = '2px solid red'
  }

  if (e.target === p) {
    p.style.fontWeight = 'bold'
    p.style.color = 'red'
  }

  if (e.target === h1) {
    h1.style.backgroundColor = 'yellow'
  }

  if (e.target === h2) {
    let text = h2.textContent;
    h2.textContent = text.slice(0, -1)
  }
})

// 2. Rajouter au hover de la section le texte contenu dans la variable

let section = document.querySelector('section')

let text = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"

section.addEventListener('mouseover', function() {

  let para = section.querySelector('p')

  para.textContent = text

})
