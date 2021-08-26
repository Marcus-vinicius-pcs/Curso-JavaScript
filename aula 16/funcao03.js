/*
function fatorial(num){
    var res=  num
    for(let i = num-1; i > 0; i--){
        res *= (num-i)
    } return res
}
*/
function fatorial(num){
    if(num == 1){
        return 1
   } else {
       return num* fatorial(num-1)
   }
}

console.log(`A fatorial de 5 é ${fatorial(5)}`)

