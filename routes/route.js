import express from  'express';
import { getProductById,addProduct, getProductDataById, getProducts, getProductsData, deleteProduct } from '../controller/product-controller.js';
import { userSignUp, userLogIn, getUser } from '../controller/user-controller.js';
// import { addItemInCart } from '../controller/cart-controller.js';
import {addMoney,verifyPay,getMoney } from '../controller/payment-controller.js';
import { addCart } from '../controller/cart-controller.js';
import UPI from '../model/upiSchema.js';
const router = express.Router();

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);
router.get('/user', getUser);
router.get('/products', getProducts);
router.get('/product/:id', getProductById);
router.post('/addProducts',addProduct)
router.post('/cart',addCart)
router.delete('/deleteProducts/:id',deleteProduct)

// router.post('/cart/add', addItemInCart);
router.post('/orders',addMoney)
router.get('/getOrder',getMoney)
router.post('/verify',verifyPay)
router.get('/getUpi', async (req, res) => {
    try {
      const upiId = await UPI.findOne();
      res.json(upiId);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
router.post('/postUpi', async (req, res) => {
    try {
      const { upiId } = req.body;
      console.log(upiId)
      // Delete existing UPI ID if it exists
      await UPI.deleteMany();
      const newUpi = new UPI({ upiId});
      await newUpi.save();
      res.status(201).json({ message: 'UPI ID added successfully', upi: newUpi });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


export default router;