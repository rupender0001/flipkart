import Cart from '../model/cartSchema.js';

export const addCart = async (request, response) => {
    const { productId, quantity, accountId } = request.body;

    try {
        // Create a new cart item
        const cartItem = new Cart({
            productId,
            quantity,
            accountId
        });

        // Save the cart item to the database
        const savedCartItem = await cartItem.save();

        response.status(201).json(savedCartItem);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};
