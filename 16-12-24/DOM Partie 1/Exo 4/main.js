// 1

let secondH1 = document.getElementsByTagName('h1')[1]

console.log(secondH1.textContent)

// 2

let allLi = document.getElementsByTagName('li')

let lastLi = allLi[allLi.length - 1]

console.log(lastLi.textContent)

// 3

let firstP = document.getElementsByTagName('p')[0]

console.log(firstP.textContent.toUpperCase())

// 4

let liArray = Array.from(allLi)

liArray.forEach(li => console.log(li.textContent))

// Bonus

liArray.forEach(li => console.log(li.textContent.toUpperCase()))