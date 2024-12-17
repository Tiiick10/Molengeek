let h1 = document.querySelector('h1')

// Fonction

function changeTextColor() {

  h1.style.color = 'blue'

}

changeTextColor()

// Event

h1.addEventListener('click', changeTextColor)
