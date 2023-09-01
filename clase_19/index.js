const express=require("express");
const app=express();

//crear un array de objetos que contenga ID,NOMBRE,APELLIDO,PROFESION
let usuarios=[
    {id:1,nombre:"pipo",apellido:"perez",profesion:"profesor"},
    {id:2,nombre:"anacleto",apellido:"rossi",profesion:"carpintero"},
    {id:3,nombre:"casimiro",apellido:"messi",profesion:"bachero"},
    {id:4,nombre:"fernando",apellido:"burlando",profesion:"abogado"},
];

app.get('/usuarios',function(consulta,respuesta){
    
    const {profesion}=consulta.query;
    console.log(profesion);
    respuesta.json(consulta.query);

})

app.get('/',function(consulta,respuesta){
    console.log("recibimos una peticion")
});

app.get('/perfil/:id',function(consulta,respuesta){
    //params
    const id=consulta.params.id;
    console.log(id)
    console.log("recibimos una peticion en PERFIL")
    respuesta.send("hola" + id);
});


/*app.get('/usuarios',function(consulta,respuesta){
    //query
    console.log(consulta.query);
    const {nombre,edad}=consulta.query;
    // let nombre=consulta.query.nombre;
    // let edad=consulta.query.edad
    console.log(nombre,edad);
    respuesta.json(consulta.query);
   
});  */


app.listen(3000, ()=>{
  
    console.log("servidor corriendo");
});