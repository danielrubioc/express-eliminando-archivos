// Paso 1
const express = require("express");
const app = express();
const fs = require("fs");
// Paso 2
app.use(express.static("public"));

// Paso 3
app.get("/", (req, res) => { 
    res.sendFile(__dirname + "/index.html"); 
})

// Paso 4 
app.delete('/imagen/:nombre', (req, res) => {
    const {nombre} =  req.params;
    fs.unlink(`${__dirname}/public/imagenes/${nombre}.jpg`, (err) => {
        res.send(`Imagen ${nombre} fue eliminada con éxito`);
    }); 
})


app.listen(3000, () => console.log("Server OK"));
