// Aplication Programming Interface;
// RESt - Representation State Transfer -> engloba Status HTTP, Verbo... -> Arquitetura de requisições;

// GET, POST, PUT/PATCH e DELETE
import express from "express";

const app = express();
const PORT = 3000;
const objResponse = {
    name: 'Gustavo Cardoso', 
    university: 'UFG'
}

// Rotas
app.get('/', (req, res) => {
    // res.send("Recebi o GET");
    res.json(objResponse);
});

app.listen(PORT, () => {
    console.log("Servidor rodando");
    
})