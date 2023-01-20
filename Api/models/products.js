const mongoose = require('mongoose');
const productsSchema = new mongoose.Schema({
    id : String,
    name : String,
    value : String,
    category : String,
    thumb : String
  });
  const Products = mongoose.model('Products', productsSchema);

  module.exports = Products;
