const express = require('express')
const router = express.Router()
const dbconnect = require('../config/db');

router.get('/',(req,res)=>{
    dbconnect.query('select * from contacts',(err,result)=>{
        if(err){
            res.json({
                'message':'error while fetching data'
            })
        }
        else{
            res.status(200).json({
                'msg':'data fetched succesful',
                'data': result
            })
        }
    })
});
module.exports = router;