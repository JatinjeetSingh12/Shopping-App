const express = require('express');
const router = express.Router();
const product = require('../models/ProductSchema');
const { body, validationResult } = require('express-validator');


router.post('/add', [
    body('name', 'enter product name'),
    body('description', 'enter product description'),
    body('img', 'enter product image url'),
    body('price', 'enter product price').isNumeric(),
], async (req, res) => {
    let success = false;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {name,description,img,price} = req.body
    try {

        const product = new Prod({
            title,
            description,
            image,
            user: req.user.id
        })

        const savedBlog = await blog.save();
        res.json(savedBlog);

    } catch (error) {
        console.log(error.message);
        return res.status(500).send("some error occured");
    }
})
