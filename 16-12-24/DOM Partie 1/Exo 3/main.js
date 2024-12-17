// 1

let lastDiv = document.getElementsByTagName('div')[document.getElementsByTagName('div').length - 1]

console.log(lastDiv.firstElementChild)

// 2

console.log(lastDiv.lastElementChild)

// 3

let firstPInLastDiv = lastDiv.getElementsByTagName('p')[0]

let iElement = firstPInLastDiv.getElementsByTagName('i')[0]

console.log(iElement)

// 4

let lastPInLastDiv = lastDiv.getElementsByTagName('p')[lastDiv.getElementsByTagName('p').length - 1]

let bElement = lastPInLastDiv.getElementsByTagName('b')[0]

console.log(bElement)

// 5

console.log(iElement.parentElement)

// 6

console.log(bElement.parentElement)

// 7

console.log(lastDiv.firstElementChild)
