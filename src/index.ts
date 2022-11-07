import express from "express";

const app = express()

app.get('/hello', (req, res) => res.send('Hello Simplon 1 LF'));

app.listen(3006, ()=> console.log("Application démarrée sur le port 3006 LF"));