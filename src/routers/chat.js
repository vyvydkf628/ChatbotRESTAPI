const express = require('express')
const fs = require('fs');

const check = require('../check/sentenceCheck')
const router = new express.Router()

router.get('/chat', async (req,res)=>{
    try{
        if(req.query.sentence==null){
            res.status(400).send("must need sentence")
        }
        res.status(201).send(check(req.query.sentence))
    }catch(e){
        res.status(400).send(e)
    } 
})
// router.post('/chat', async (req,res)=>{
    
//     try{
        
//         if(req.body==null){
//             res.status(400).send("must need sentence")
//         }
//         const cur = fs.readFileSync('chatData.json')
//         const jsonFile=cur.toString();
//         const data = JSON.parse(jsonFile)
//         const load=data.data.push(req.body)
        
//         fs.writeFile('chatData.txt',load.toString(),'utf8', (e,data)=>{
//             if(e) {throw e};
//             console.log(data)
            
//         })
//         res.status(201).send(req.body)
//     }catch(e){
//         res.status(400).send(e)
//     } 
// })


module.exports= router