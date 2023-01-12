import express from "express";

const app = express()

app.get('/hello', (req, res) => res.send('Hello Simplon LUC FERRO'));
app.get('/docker', (req, res) => res.send('Docker secret: '+ process.env.id));

app.listen(3006, ()=> console.log("Application démarrée sur le port 3006 LF"));