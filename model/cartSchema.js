import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    accountId: {
        type: String,
        required: true
    }
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
