const express=require("express");
const fs=require("fs/promises");
const app=express();

app.get('/',(req,res)=>{
   res.send("Hakuna Matata");
});

app.post('/usuarios',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
})

app.listen(3000,()=>{
    console.log("servidor corriendo en el puerto 3000");
});