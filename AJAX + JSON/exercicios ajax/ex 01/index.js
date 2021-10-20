var req = new XMLHttpRequest()

const section = document.querySelector('section')

req.responseType= 'json'



req.onload = function () {
    for (let i in req.response){
        var documento = req.response[i]
    //section.innerHTML += documento['body'] 
        const div = document.createElement('div')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        const p4 = document.createElement('p')
        p1.innerHTML = 'userId: ' + documento['userId']
        p2.innerHTML = 'id: ' + documento['id']
        p3.innerHTML = 'title: ' + documento['title']
        p4.innerHTML = 'body: ' + documento['body']
        
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        div.appendChild(p4)
        div.appendChild(document.createElement('br'))
        section.appendChild(div)
    }
}

req.open("GET", "https://jsonplaceholder.typicode.com/posts/")

req.send()
