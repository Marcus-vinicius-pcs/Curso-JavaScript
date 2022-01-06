const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Task manager app')
})

const port = 8080
app.listen(port, console.log(`running on port: ${port}`))