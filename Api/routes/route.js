const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/', controller.get)
router.get('/:id', controller.getCat)
router.post('/produto', controller.post)

module.exports = router;