const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('hello from todo')
})

router.get('/:id',(req,res)=>{
    let id = req.params.id
    res.json({
        message: "hello world",
        id: id
    })

})

module.exports = router;