function sum(a, b){
    return a + b
}
//Convertendo para arow function 
let sum2 = (a,b) => a + b

/////////////////////////////

function isPositive(number){
    return number >=0
}
//Convertendo...
let isPositive2 = number => number >= 0

///////////////////////////////

function randomNumber() {
    return Math.random
}
//Convertendo...
let randomNumber2 = () => Math.random

/////////////////////////////////

document.addEventListener('click', function() {
    console.log('Click')
})
//Convertendo...
document.addEventListener('click', () => console.log('Click'))