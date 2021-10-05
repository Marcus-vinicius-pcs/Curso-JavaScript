const porta = 3003
const bodyParser = require('body-parser')
 const express = require('express')
 const app = express()

const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({express: true}))

 app.get('/produtos', (req, res, next) => {
     res.send(bancoDeDados.getProdutos()) 
 })

 app.get('/produtos/:id', (req, res, next) => {
     res.send(bancoDeDados.getProduto(req.params.id))
 })

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name, 
        preco: re.body.preco
    })
    req.send(produto) //JSON
})

//alterar um produto
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.body.id,
        nome: req.body.name, 
        preco: re.body.preco
    })
    req.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    req.send(produto) //JSON
})

 app.listen(porta, () => {
     console.log(`Servidor executando na porta ${porta}.`)
 })