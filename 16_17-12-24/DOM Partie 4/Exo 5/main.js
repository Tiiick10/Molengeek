// Récupérer la div par son id

let div = document.querySelector('#content')

// Créer une fonction avec un paramètre "e" (l'événement)

function handleClick(e) {

  console.log(e)
  
  // Afficher l'élément cliqué via la propriété target

  console.log(e.target)
  
  // Ajouter un border rouge à l'élément sur lequel on a cliqué

  e.target.style.border = '2px solid red'

}

// Evénement "click" sur la div

div.addEventListener('click', handleClick)

// Observer le target

let h1Elements = document.querySelectorAll('h1')

h1Elements.forEach(h1 => {

  h1.addEventListener('click', handleClick)

})
