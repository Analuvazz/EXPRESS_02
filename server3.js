const express = require('express')
const { parse } = require('path')
const app = express()

app.listen(3000,()=>{
    console.log("Servidor em execuçao")
})

//rotas com parametros 
app.get('/',(req,res)=>{
    res.send('Ola mundo')
})


//rota com 1 parametro
app.get('/ola/:nome',(req,res)=>{
    console.log(req.params.nome)
    res.send("Ola "+req.params.nome)
}) 

//rota com 2 parametros 
app.get("/ola/:nome/:empresa", (req, res)=>{
    res.send ('Ola '+req.params.nome+ 'da empresa' +req.params.empresa);
})

//rota com soma de 2 parametros
app.get('/soma/:a/:b', (req, res)=>{
    res.send ('O resultado da soma '+req.params.a+ 'e' +req.params.b+ 'e  :'+(parseInt(req.params.a))+(parseInt(req.params.b)));
})
