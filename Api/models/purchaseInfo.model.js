const mongoose = require('mongoose');
const purchaseInfoSchema = new mongoose.Schema({
    products : Object,
    address : Object,
  });
  const PurchaseInfo = mongoose.model('PurchaseInfo', purchaseInfoSchema, 'purchases-historic');

  module.exports = PurchaseInfo;
