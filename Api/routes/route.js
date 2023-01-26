const express = require('express')
const router = express.Router();
const productController = require('../controllers/product.controller')
const purchaseController = require('../controllers/purchase.controller')

router.get('/produto', productController.get)
router.get('/produto/:id', productController.getByCategory)
router.post('/purchase', purchaseController.post)

module.exports = router;