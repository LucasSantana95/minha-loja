const productsModel = require('../models/products')
const purchaseInfoModel = require('../models/purchaseInfo')

module.exports = {
    get : async (req , res) =>{
        const products = await productsModel.find().sort();
        const teste = products.sort(function (a, b){ 
            return Math.floor(Math.random() * 10);
        })
        res.send(products)
    },
    getCat : async (req, res) =>{
        const productsByCategory = await productsModel.find({ category : req.params.id}) 
        res.send(productsByCategory)
    },
    post : async (req, res)=>{
        const products = req.body.products;
        const address = req.body.address;      
        const purchase = await purchaseInfoModel.create({ products : products, address : address});
        res.status(200).send(purchase);
    }
}