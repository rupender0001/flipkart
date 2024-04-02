import express from  'express';
import { getProductById,addProduct, getProductDataById, getProducts, getProductsData } from '../controller/product-controller.js';
import { userSignUp, userLogIn, getUser } from '../controller/user-controller.js';
// import { addItemInCart } from '../controller/cart-controller.js';
import {addMoney,verifyPay } from '../controller/payment-controller.js';
import { addCart } from '../controller/cart-controller.js';
const router = express.Router();

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);
router.get('/user', getUser);
router.get('/products', getProducts);
router.get('/product/:id', getProductById);
router.post('/addProducts',addProduct)
router.post('/cart',addCart)

// router.post('/cart/add', addItemInCart);
router.post('/orders',addMoney)
router.post('/verify',verifyPay)


export default router;