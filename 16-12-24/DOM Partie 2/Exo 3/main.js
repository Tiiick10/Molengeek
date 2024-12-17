// 1

let content = document.querySelector('#content')
console.log(content)

// 2

let content2 = document.querySelectorAll('#content')
console.log(content2)

// 3

let liste = document.querySelector('.important')
console.log(liste)

// 4

let liste2 = document.querySelectorAll('.important')
console.log(liste2)

// 5

let listItems = document.querySelectorAll('#listElements li')

listItems.forEach(item => {

    let text = item.textContent
    
    if (text.length > 0) {
    
        let lastLetter = text.charAt(text.length - 1).toUpperCase()
        
        item.textContent = text.slice(0, -1) + lastLetter
    }
})

console.log(listItems)

// 6

let div = document.getElementById('content')

let grandParagraph = contentdiv.getElementsByClassName('grandParagraphe')[0]

console.log(grandParagraph.textContent)

