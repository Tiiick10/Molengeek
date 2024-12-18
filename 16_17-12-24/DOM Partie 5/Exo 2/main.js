// 1

let elements = document.querySelectorAll('#content *')

elements.forEach(element => {

    element.addEventListener('click', () => {

        console.log(element)

    })
})

// 2

elements.forEach(element => {

    element.addEventListener('dblclick', () => {

        element.textContent = element.textContent.toUpperCase()

    })
})

// 3 

let buttonGo = document.querySelector('input[type="button"]')

let styles = [

    'border: 1px solid gold',
    'background-color: blue',
    'background-color: red',
    'border: 5px dotted gold'

]

buttonGo.addEventListener('click', () => {

    elements.forEach(element => {

        let randomStyle = styles[Math.floor(Math.random() * styles.length)]

        element.style = randomStyle
        
    })
})
