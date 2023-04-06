const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const middleware = require('../middleware/auth')
const router = express.Router();

router.get('/', middleware.authentication, shopController.getIndex);

router.get('/products', middleware.authentication, shopController.getProducts);

router.get('/products/:productId', middleware.authentication, shopController.getProduct);

router.get('/cart', middleware.authentication, shopController.getCart);

router.post('/cart', middleware.authentication, shopController.postCart);

router.post('/cart-delete-item', middleware.authentication, shopController.postCartDeleteProduct);

router.get('/orders', middleware.authentication, shopController.getOrders);

router.post('/create-order', middleware.authentication, shopController.postOrder);

router.get('/checkout', middleware.authentication, shopController.getCheckout);

module.exports = router;
