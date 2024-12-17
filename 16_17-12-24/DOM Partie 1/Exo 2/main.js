// 1

let myBody = document.getElementsByTagName('body')[0]

// 2

console.log(myBody.firstElementChild)

// 3

console.log(myBody.lastElementChild)

// 4

let firstDiv = myBody.getElementsByTagName('div')[0]

let exo4 = firstDiv.children

console.log(exo4)

// 5

let firstLi = document.getElementsByTagName('li')[0]

console.log(firstLi.nextElementSibling)

// 6

let secondLi = document.getElementsByTagName('li')[1]

console.log(secondLi.previousElementSibling)


