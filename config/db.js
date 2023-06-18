const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodecrud'
})

connection.connect((err)=>{
    if(err){
        console.log("the error has occured ")
    }
    else{
        console.log("Connection Successful")
    }
})

module.exports = connection;