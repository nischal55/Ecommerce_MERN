const express = require('express');
const cartRoutes = express.Router();

//@middleWares
const checkAuthentication = require('../middlewares/checkAuthentication')

//@imported controllers
const {addCart,getCart,esewaPayment,delCart,cashPayment,getOrders,getOrdersAdmin,changeDelivery,changeComplete} = require('../controllers/cartController')

cartRoutes.post('/cart',checkAuthentication,addCart);
cartRoutes.get('/cart',checkAuthentication,getCart);
cartRoutes.get('/order/esewa',checkAuthentication,esewaPayment);
cartRoutes.get('/order/cash',checkAuthentication,cashPayment);
cartRoutes.get('/order',checkAuthentication,getOrders);
cartRoutes.get('/orderAdmin',checkAuthentication,getOrdersAdmin);
cartRoutes.delete('/cart/:cart_id',checkAuthentication,delCart);
cartRoutes.put('/order/:order_id',checkAuthentication,changeDelivery);
cartRoutes.put('/orderComplete/:order_id',checkAuthentication,changeComplete);




module.exports= cartRoutes;