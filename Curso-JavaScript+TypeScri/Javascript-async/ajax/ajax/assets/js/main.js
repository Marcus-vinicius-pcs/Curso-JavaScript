/*
const request = obj => {
  const xhr = new XMLHttpRequest()
  xhr.open(obj.method, obj.url, true) //true para assincrono e false para sincrono
  xhr.send()

  //verificar quando a requisição terminou de ser carregada
  xhr.addEventListener('load', () => {
    if(xhr.status >= 200 && xhr.status < 300){
      obj.success(xhr.responseText) // função de callback - pode ser promise
    } else {
      obj.error({
        code: xhr.status,
        msg: xhr.statusText
      })
    }
  })
}

//capturar eventos dos clicks
document.addEventListener('click', e => {
  const element = e.target
  const tag = element.tagName.toLowerCase()

  if(tag === 'a'){
    e.preventDefault()
    loadPage(element)
  }
})

function loadPage(element){
  const href = element.getAttribute('href')

  request({
    method: 'GET',
    url: href,
    success(response){
      loadResult(response)
    },
    error(error){
      console.log(error)
    }
  })
}

function loadResult(response){
  const result = document.querySelector('.resultado')
  result.innerHTML = response
}
*/


//utilizando Promises

const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true) //true para assincrono e false para sincrono
    xhr.send()
  
    //verificar quando a requisição terminou de ser carregada
    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300){
        resolve(xhr.responseText) // função de callback - pode ser promise
      } else {
        reject({
          code: xhr.status,
          msg: xhr.statusText
        })
      }
    })
  })
  
}

//capturar eventos dos clicks
document.addEventListener('click', e => {
  const element = e.target
  const tag = element.tagName.toLowerCase()

  if(tag === 'a'){
    e.preventDefault()
    loadPage(element)
  }
})

async function loadPage(element){
  const href = element.getAttribute('href')
  try{
    const response = await request({
      method: 'GET',
      url: href
    })
    loadResult(response)
  }catch(e) {
    console.log(e)
  }
  
}

function loadResult(response){
  const result = document.querySelector('.resultado')
  result.innerHTML = response
}