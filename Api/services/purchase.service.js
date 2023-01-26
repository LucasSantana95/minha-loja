const purchaseInfoModel = require('../models/purchaseInfo')

module.exports = {
    create: async (purchaseDto) => {
        const products = purchaseDto.products;
        const address = purchaseDto.address;
        return await purchaseInfoModel.create({ products: products, address: address });
    }
}