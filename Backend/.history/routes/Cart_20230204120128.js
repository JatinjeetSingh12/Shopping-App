const express = require('express');
const router = express.Router();
const Cart = require('../models/CartSchema');
const { body, validationResult } = require('express-validator');


router.post('/add', [
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
    const { name, description, img, price,categories } = req.body
    try {

        const product = new Ca({
            name,
            description,
            img,
            price,
            categories
        })

        const savedProduct = await product.save();
        res.json(savedProduct);

    } catch (error) {
        console.log(error.message);
        return res.status(500).send("some error occured");
    }
})

router.get('/getall', async (req, res) => {
    try {
        let product = await Product.find();
        res.json(product);
    } catch (error) {
        return res.status(500).send("some error occured");
    }
})

module.exports = router