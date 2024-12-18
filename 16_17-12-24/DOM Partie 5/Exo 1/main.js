// 1

let pContent = "Ceci est le contenu de la variable pContent"

let exo1Button = document.querySelector('#content input[type="button"]')

let paragraph = document.querySelector('section p')

function addToParagraph(content) {

    paragraph.textContent = content

}

exo1Button.addEventListener("click", () => {

    addToParagraph(pContent)

})

// 2

let bgColor = "gold"

let textColor = "red"

let h1 = document.querySelector('#content h1')

function changeH1Style(background, color) {

    h1.style.backgroundColor = background
    h1.style.color = color

}

h1.addEventListener("click", () => {

    changeH1Style(bgColor, textColor)
    
})
