require('dotenv').config()
const express = require('express')
const app = express()

const user = require('./routes/user.js')
const todo = require('./routes/todo.js') 
const objdes = require('./routes/objdes.js')
app.use('/todo',todo)
app.use('/api/user',user)
app.use('/objdes',objdes)
app.listen(process.env.PORT,()=>{
    console.log('the server has started !!');
});