const express = require('express');
const router = require('./routes/route');

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use(router)

app.listen(3000, ()=>{ console.log('Api rodando na porta 3000', 'https//localhost:3000/')})