const model = require('../models/products')

module.exports = {
    get : (req , res) =>{
        res.send(model.GetAll())
    },
    getCat : (req, res) =>{
        res.send(model.GetCat(req.params.id))
    },
    post : (req, res)=>{
        console.log(req.body);
        res.status(200);
        res.send(req.body)
    }
}