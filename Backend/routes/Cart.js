const express = require('express');
const router = express.Router();
const Cart = require('../models/CartSchema');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser')

router.post('/add', fetchuser, [
    body('name', 'enter product name'),
    body('description', 'enter product description'),
    body('img', 'enter product image url'),
    body('price', 'enter product price').isNumeric(),
    body('categories', 'enter product category'),
    body('quantity', 'enter product quantity').isNumeric(),
], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, description, img, price, categories,quantity } = req.body
    try {

        const cart = new Cart({
            name,
            description,
            img,
            price,
            categories,
            user: req.user.id,
            quantity
        })

        const savedCart = await cart.save();
        res.json(savedCart);

    } catch (error) {
        console.log(error.message);
        return res.status(500).send("some error occured");
    }
})

router.get('/get', fetchuser, async (req, res) => {
    try {
        let cart = await Cart.find({user:req.user.id});
        res.json(cart);
    } catch (error) {
        return res.status(500).send("some error occured");
    }
})


//delete
router.delete('/delete/:id', fetchuser, async (req, res) => {

    try {

        let cart = await Cart.findById(req.params.id);
        if (!cart) {
            return res.status(404).send("not found");
        }

        if (cart.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed");
        }

        //delete a note
        cart = await Cart.findByIdAndDelete(req.params.id)
        res.json({ "success": "note has been deleted", cart: cart })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }

})

module.exports = router