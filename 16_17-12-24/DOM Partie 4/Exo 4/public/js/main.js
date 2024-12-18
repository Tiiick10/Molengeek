// 1

let input1 = document.getElementsByTagName("input")[0]

input1.addEventListener("focus", () => {
    input1.style.backgroundColor = "blue"
})

// 2
let input2 = document.getElementsByTagName("input")[1]

input2.addEventListener("focus", () => {

    input2.style.backgroundColor = "blue"
})

input2.addEventListener("focusout", () => {

    input2.style.backgroundColor = ""
})

// 3
let paragraphs = document.getElementsByClassName("secondParagraphe")

let premier = document.getElementsByClassName("premierParagraphe")[0]

let dernier = document.getElementsByClassName("dernierParagraphe")[0]

let buttonCopy = document.getElementsByClassName("buttonExo")[0]


buttonCopy.addEventListener("click", () => {

    let textToCopy = paragraphs[0].textContent
    premier.textContent = textToCopy
    dernier.textContent = textToCopy

})

// 4
let textToRename = document.getElementById("exo4")

let inputRename = document.querySelector(".input-sm")

let buttonRename = document.getElementsByClassName("buttonExo")[1]

buttonRename.addEventListener("click", () => {

    textToRename.textContent = inputRename.value

})

// 5
let buttonImage = document.querySelector(".box-body button i.fas.fa-check").parentElement

let imageToUpdate = document.querySelector(".img-responsive")

buttonImage.addEventListener("click", () => {

    imageToUpdate.src = "./src/image/tartine.png"

})

// 6

let tartineImage = document.querySelectorAll(".img-responsive")[0]

let photo2 = document.querySelectorAll(".img-responsive")[1]

tartineImage.addEventListener("click", () => {

    let tartinePath = tartineImage.getAttribute("src")
    photo2.setAttribute("src", tartinePath)

})


// 7

let text1 = document.querySelector(".box-body p:nth-of-type(1)")

let text2 = document.querySelector(".box-body p:nth-of-type(2)")

let buttonSwap = document.querySelector(".box-body button")

buttonSwap.addEventListener("click", () => {

    let tempText = text1.textContent
    text1.textContent = text2.textContent
    text2.textContent = tempText
    
})

