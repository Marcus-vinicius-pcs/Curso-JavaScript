const moduloA = require('../../moduloAS')
console.log(moduloA.boaNoite())

const saudacao = require('saudacao')
console.log(saudacao.ola)
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    re.end()
}).listen(8080)

