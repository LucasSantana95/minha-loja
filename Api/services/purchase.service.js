const purchaseModel = require('../models/purchase.model')

module.exports = {
    create: async (purchaseDto) => {
        const products = purchaseDto.products;
        const address = purchaseDto.address;
        return await purchaseModel.create({ products: products, address: address });
    }
}