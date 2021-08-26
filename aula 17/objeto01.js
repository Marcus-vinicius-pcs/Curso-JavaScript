let amigo = {nome:'José',
idade:16,
peso:86.4,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)