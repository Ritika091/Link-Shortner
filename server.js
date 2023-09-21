const express=require('express');
const shortId = require('shortid')
const port=5000;
const app=express();

const url={};
app.get('/shortner',(req,res)=>{
    const u=req.query.u;
    const id=shortId.generate();
    url[id]=u;
    res.send(`http://localhost:${port}/${id}`);
})

app.get('/:id',(req,res)=>{
    const id=req.params.id;
    const u=url[id];
    if(u){
        res.redirect(u);
    }
    else{
        res.sendStatus(404)
    }
})

app.listen(port,()=>{
    console.log(`Server starting on... ${port}`)
})
