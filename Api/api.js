const express = require('express');
const router = require('./routes/route');
const path = require('path');
const dbConnection = require('./services/dbConnection');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'/public')));
dbConnection();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(router)

app.listen(3001, ()=>{ console.log('Api rodando na porta 3001', 'https//localhost:3001/')})