const mongoose = require('mongoose');
const purchaseSchema = new mongoose.Schema({
    products : Object,
    address : Object,
  });
  const Purchase = mongoose.model('PurchaseInfo', purchaseSchema, 'purchases-historic');

  module.exports = Purchase;
