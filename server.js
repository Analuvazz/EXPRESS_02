const express = require("express")
const server = express()

server.listen(3000)


//middleware

//server.use((req,res)=>{
    //console.log('teste')
//}) 


server.use((req,res,next)=>{
    console.log('teste1');
    next();
}) 

server.use((req,res,next)=>{
    req.resquestTime=Date.now();
    next()
})

server.get('/',(req,res)=>{
    console.log(req.resquestTime);
    res.send('<h1>Teste de conexao</h1>') 
})
