/*
-->Selecionar a header e a section do documento.
-->Armazenar a url de request 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
--> Criar um novo request
--> Abrir essa request
--> colocar o tipo de texto dessa request 
--> Enviar o request
*/

const header = document.querySelector('header')
const section = document.querySelector('section')

const req = new XMLHttpRequest()

req.open('GET', 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')

req.responseType = 'json'

req.send()
/*
--> Criar uma função que vai funcionar quando carregar a página 
--> Armazenar o texto do request em uma constante
--> Criar uma função populateHeader que recebe como parâmetro a constante 
--> Criar uma função showHeroes que recebe a constante como parâmetro
*/

req.onload = function() {
    const texto = req.response
    populateHeader(texto)
    showHeroes(texto)
}

/*
na função populateHeader que recebe um obj copmo parametro, eu vou criar um h1 no documento e armazená-lo em uma variiuável 
--> colocar nesse h1 o squadname do objeto
--> e fazer com que o h1 fique dentro do header

Criar um parágrafo que irá armazenar a frase 'Hometown: ' + obj['homeTown'] + ' // Formed: ' + obj['formed']
Colocar esse parágrafo dentro da header

*/

function populateHeader(obj){
    const h1 = document.createElement('h1')
    h1.textContent = obj['squadName']
    header.appendChild(h1)

    const para = document.createElement('p')
    para.textContent = 'Hometown: ' + obj['hometown'] + ' //Formed: ' + obj['formed']
    header.appendChild(para)
}

/*
showHeroes(obj)
armazenar os membros desse objeto em uma constante

Criar um laço que percorrerá toda essa constante e que para cada membro irá criar um artigo, um h2, 3 parágrafos e uma lista não ordenada

Cada h2 irá mostrar o poder de cada objeto da constante
O primeiro parágrafo irá mostrar a idendtidade secreta, o segundo a idade e o terceiro superpoderes

Criar uma constante que armazena´ra os poderes de cada herói 
Criar um laço quye irá percorrer esss poderes e preencher cada list item com esses poderes (criuar uma constante para os li) e deopois colocá-los dentro da lista 

Depois fazer com que tudo isso fique dentro do artigo e, por fim, que o artigo fique dentro da constante 
*/

function showHeroes(obj){
    const heroes = obj['members']
    for(let i in heroes){
        const artigo = document.createElement('article')
        const myh2 = document.createElement('h2')
        const myp1 = document.createElement('p')
        const myp2 = document.createElement('p')
        const myp3 = document.createElement('p')
        const myul = document.createElement('ul')

        myh2.textContent = heroes[i].name 
        myp1.textContent = 'Secred Identity: ' + heroes[i].secretIdentity
        myp2.textContent = 'Age: ' + heroes[i].age
        myp3.textContent = 'Superpowers: '

        const superpowers= heroes[i].powers;
        for(let j in superpowers) {
            const listItem = document.createElement('li')
            listItem.textContent = superpowers[j]
            myul.appendChild(listItem)
        }

        artigo.appendChild(myh2)
        artigo.appendChild(myp1)
        artigo.appendChild(myp2)
        artigo.appendChild(myp3)
        artigo.appendChild(myul)

        section.appendChild(artigo)
    }
}