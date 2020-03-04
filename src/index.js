const express = require('express')
// require('./db/mongoose')

const chatRouter = require('./routers/chat')
const app = express()

const port = 3000

app.use(express.json())
app.use(chatRouter)
app.listen(port,()=>{
    console.log('Server is up on port '+ port)
}) 

