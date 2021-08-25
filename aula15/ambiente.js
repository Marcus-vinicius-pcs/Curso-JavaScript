let num = [1, 2, 6, 7, 8, 4]
console.log(num)
console.log(`Nosso arranjo é o ${num}`)
console.log(`Nosso vetor tem ${num.lengh} espaços`)
console.log(`O primeiro elemento do vetor é ${num[0]}`)
num.sort()
console.log(`O arranjo ordenado é`)
console.log(num)
for(var c = 0; c < num.length; i++){
    console.log(`A posião ${c} tem o valor: ${num[c]}`)
}

for(let pos in num){
    console.log(`A posião ${pos} tem o valor: ${num[pos]}`) 
}