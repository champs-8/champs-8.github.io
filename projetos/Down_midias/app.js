//npm i express
// import  express from "express";
import express from './node_modules/express/index.js';
//npm i fs
// import fs from "./node_modules/fs";
//npm i ytdl-core
// import ytdl from './node_modules/ytdl-core';
//instanciando a funcão express
const app = express();
//porta do servidor
const port = 3600;
//npm i cors
import cors from "./node_modules/cors/lib/index.js"
app.use(cors());


//__directory of the document
//corrigir o erro do __Dirname
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//BodyParser
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//ROTAS

//qual pagina quero abrir
app.get("/", (req, res) => {
    //carrega o html
    res.sendFile(`${__dirname}/index.html`);
    
    //nao sei porquê funcionou, mas carregou o css
    app.use(express.static(`${__dirname}`));
    
    
});
app.get('/script.js', (req, res) => {
    res.sendFile(`${__dirname}/script.js`);
    console.log('carregou o script');
})
app.get('/app.js', (req, res) => {
    res.sendFile(`${__dirname}/app.js`);
    console.log('carregou o app');
});


import ppk from './get_info.js';

app.post('/data', (req, res) => {
    let txturl = req.body.txturl;
    let quality = req.body.quality;
    let format = req.body.mpx
    res.send(`Link: ${txturl}<br>Qualidade: ${quality}<br>Formato: ${format}`)
    console.log(`${txturl}\n${quality}\n${format}`);

    ppk(txturl, quality, format)
});


//iniciando o servidor 
app.listen(port, () => console.log(`*************\n\nhttp://localhost:${port}\n\n*************`));

