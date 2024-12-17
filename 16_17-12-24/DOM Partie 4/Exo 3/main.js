// 1. Met un écouteur d'événement sur le h1, rajoute la classe text-blue

let h1 = document.querySelector('h1')

h1.addEventListener('click', function() {

  h1.classList.add('text-blue')

})

// 2. Au double clic du h3, rajoute la classe text-error

let h3 = document.querySelector('h3')

h3.addEventListener('dblclick', function() {

  h3.classList.add('text-error')

})

// 3. Trouve une méthode qui rajoute la classe text-style sur le paragraphe mais qui en même temps vérifie si la classe est déjà dessus

let paragraph = document.querySelector('p')

paragraph.addEventListener('click', function() {

  paragraph.classList.toggle('text-style')

})

// 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la classe bolder sur le mot sur lequel on clique

let spans = document.querySelectorAll('p:nth-child(4) span')

spans.forEach(function(span) {

  span.addEventListener('click', function() {

    span.classList.add('bolder')

  })

})

// 5. Dans le dernier paragraphe tu as trois span, créer un programme qui rajoute la classe border-red sur le mot sur lequel on clique

let lastParagraphSpans = document.querySelectorAll('p:last-child span')

lastParagraphSpans.forEach(function(span) {

  span.addEventListener('click', function() {

    lastParagraphSpans.forEach(function(sibling) {

      sibling.classList.remove('border-red')

    })

    span.classList.add('border-red')

  })
  
})
