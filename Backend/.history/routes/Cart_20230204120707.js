const express = require('express');
const router = express.Router();
const Cart = require('../models/CartSchema');
const { body, validationResult } = require('express-validator');
const fetchuser

router.post('/add',fetchuser, [
    body('name', 'enter product name'),
    body('description', 'enter product description'),
    body('img', 'enter product image url'),
    body('price', 'enter product price').isNumeric(),
    body('categories', 'enter product category'),
], async (req, res) => {
    let success = false;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, description, img, price, categories } = req.body
    try {

        const cart = new Cart({
            name,
            description,
            img,
            price,
            categories
        })

        const savedCart = await cart.save();
        res.json(savedCart);

    } catch (error) {
        console.log(error.message);
        return res.status(500).send("some error occured");
    }
})

router.get('/getall', async (req, res) => {
    try {
        let cart = await Cart.find();
        res.json(cart);
    } catch (error) {
        return res.status(500).send("some error occured");
    }
})

module.exports = router