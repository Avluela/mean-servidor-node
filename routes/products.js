// rutas para productos
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

// api/products
router.post('/', productController.createProduct);
router.get('/getall', productController.getAllProduct);
router.put('/:id', productController.editProduct);
router.get('/:id', productController.getByIdProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;