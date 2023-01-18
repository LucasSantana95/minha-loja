const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/produto', controller.get)
router.get('/produto/:id', controller.getCat)
router.post('/produto', controller.post)

module.exports = router;