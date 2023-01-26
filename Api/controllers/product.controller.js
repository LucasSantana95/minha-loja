const productService = require('../services/product.service')

module.exports = {
    get: async (req, res) => {
        const products = await productService.get();
        res.send(products)
    },
    getByCategory: async (req, res) => {
        const productsByCategory = await productService.getByCategory(req.params.id);
        res.send(productsByCategory)
    },
}