/*
fetch('pessoas.json')
.then(response => response.json())
.then(json => loadElementsOnPage(json))
*/

const { default: axios } = require("axios")

axios('pessoas.json')
.then(response => loadElementsOnPage(response.data))

function loadElementsOnPage(json){
  const table = document.createElement('table')
  for(let person of json){
    const tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerHTML = person.nome
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerHTML = person.idade
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerHTML = person.salário
    tr.appendChild(td)

    table.appendChild(tr)
  }
  
  const result = document.querySelector('.resultado')
  result.appendChild(table)
}