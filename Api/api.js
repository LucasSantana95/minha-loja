const express = require('express');
const router = require('./routes/route');
const path = require('path');
const databaseService = require('./services/database.service');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/public')));

databaseService.connect();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(router)

app.listen(3001, ()=>{ console.log('Api rodando na porta 3001', 'https//localhost:3001/')})