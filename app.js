const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// Esto es para usar la carpeta public como recurso de archivos estáticos
let publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

// app.listen(3001, function(){
//     console.log("Server starting in 3001 port");
//     console.log("Precaching resources...");
// });

const port = process.env.PORT || 3001;
app.listen(port, function(){
    console.log("Server starting in 3001 port");
    console.log("Precaching resources...");
});

// RUTAS DE ARCHIVOS
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname, "/views/register.html"));
});