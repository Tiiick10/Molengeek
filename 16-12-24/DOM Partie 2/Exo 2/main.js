// 1

let premierH3 = document.getElementById('content')

console.log(premierH3.firstElementChild)

// 2

console.log(document.getElementById('titreNiv3'))

// 3

console.log(document.getElementById('textGeneral'))

// 4

let petitParagraphe = document.getElementsByClassName('petitParagraphe')[0]

let nextElement = petitParagraphe.nextElementSibling

console.log(nextElement)

// 5

let parentImportant = document.getElementsByClassName('important')[0]

console.log(parentImportant.parentElement)

// 6

let listElements = document.getElementById('listElements')

let firstChild = listElements.parentElement.firstElementChild;

console.log(firstChild)


// 7

let lastImportantElement = document.getElementsByClassName('important')[document.getElementsByClassName('important').length - 2]

console.log(lastImportantElement)

// 8

console.log(textGeneral.previousElementSibling.previousElementSibling)

// 9


// 10


// 11

let grandParagraf = document.querySelector('.grandParagraphe')

console.log(grandParagraf)


// 12

let allLi = document.querySelectorAll('li')


allLi.forEach(function(li) {

  console.log(li)

})
