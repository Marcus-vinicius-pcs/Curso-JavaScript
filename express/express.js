const express = require('express')
const app = express()
const tasks = require('./tasks')

//middlewares
app.use(express.json())

//routes
app.get('/hello', (req, res) => {
    res.send('Task manager app')
})

app.use('/api/v1/tasks', tasks)


//app.get('/api/v1/tasks') - get all the tasks
//app.post('/api/v1/tasks') - create a new task
//app.get('/api/v1/tasks/:id') - get a single task
//app.patch('/api/v1/tasks/:id') - update a task
//app.delete('/api/v1/tasks/:id') - delete task


const port = 8080
app.listen(port, console.log(`running on port: ${port}`))