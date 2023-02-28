const productModel = require('../models/product.model')

module.exports = {
    get: async () => {
        const products = await productModel.find().sort();
        return products.sort(function (a, b) {
            return Math.floor(Math.random() * 10);
        })
    },
    getByCategory: async (categoryId) => {
        return await productModel.find({ category: categoryId })
    }
}