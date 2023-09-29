const express=require('express');
const shortId = require('shortid')
const cors = require('cors');
const port=process.env.PORT || 5000
const app=express();

app.use(cors());
const url={};
app.get('/',(req,res)=>{
    res.send("Welcome to Link Shortener Website");
})
app.get('/shortner',(req,res)=>{
    const u=req.query.u;
    const id=shortId.generate();
    url[id]=u;
    res.json({ shorturl: `https://link-shortener-00xh.onrender.com/${id}` });
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
