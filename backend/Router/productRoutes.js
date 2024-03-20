const express = require('express');
const productRoutes = express.Router();
const checkAuthentication = require('../middlewares/checkAuthentication')


//@imported controllers
const {getProducts,addProducts,getProductsById,searchProducts,filterCategory} = require("../controllers/productController")

productRoutes.get('/products',getProducts)
productRoutes.get('/products/:id',getProductsById)
productRoutes.post('/products',checkAuthentication,addProducts)
productRoutes.get('/products/search/:productName', searchProducts)
productRoutes.get('/products/category/:category', filterCategory)

module.exports= productRoutes;