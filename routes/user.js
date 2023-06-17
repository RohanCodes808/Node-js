const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({
        "message":"All data listed",
        "status":200
    })
})

router.post('/create',(req,res)=>{
    res.json({
        "message":"new data created",
        "status":201,
        "data":{
            "name":"Gunjan",
            "address":"Dhapakhel"
        }
    })
})

router.get('/:id',(req,res)=>{
    let id = req.params.id
    res.json({
        "message":"single data fetched",
        "status":200,
        "data":{
            "id":id,
            "name":"gunjan"
        }
    })
})




module.exports = router;