const purchaseService = require('../services/purchase.service')

module.exports = {
    post : async (req, res)=>{
        const products = req.body.products;
        const address = req.body.address;      
        const purchase = await purchaseService.create({ products : products, address : address});
        res.status(200).send(purchase);
    }
}