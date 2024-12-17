// 1. Au double clic du h1, son fond devient rouge et son texte devient blanc

let h1 = document.querySelector('h1')

h1.addEventListener('dblclick', function() {

  h1.style.backgroundColor = 'red'
  h1.style.color = 'white'

})

// 2. Au hover du h3, son texte rétrécit d'un caractère

let h3 = document.querySelector('h3')

h3.addEventListener('mouseover', function() {

  h3.textContent = h3.textContent.slice(0, -1)

})

// 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold

let paragraph = document.querySelector('p')

paragraph.addEventListener('click', function() {

  if (paragraph.style.backgroundColor === 'blue' && paragraph.style.color === 'gold') {

    paragraph.style.backgroundColor = 'white'
    paragraph.style.color = 'black'

  } else {

    paragraph.style.backgroundColor = 'blue'
    paragraph.style.color = 'gold'

  }
  
})
