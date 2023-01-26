const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/imperio-solar-energy').then(() => {
        console.log('Banco conectado com sucesso!');
    }).catch((err) => {
        console.log('erro: ' + err)
    })
}

module.exports = {
    connect
}