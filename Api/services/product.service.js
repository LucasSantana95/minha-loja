const productsModel = require('../models/products')

module.exports = {
    get: async () => {
        const products = await productsModel.find().sort();
        return products.sort(function (a, b) {
            return Math.floor(Math.random() * 10);
        })
    },
    getByCategory: async (categoryId) => {
        return await productsModel.find({ category: categoryId })
    }
}