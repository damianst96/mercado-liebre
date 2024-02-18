const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// Esto es para usar la carpeta public como recurso de archivos estáticos
let publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, function(){
    console.log("Server starting in 3000 port");
    console.log("Precaching resources...");
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/views/index.html"));
});