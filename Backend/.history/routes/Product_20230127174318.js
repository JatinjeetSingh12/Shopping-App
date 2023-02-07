const express = require('express');
const router = express.Router();
const product = require('../models/ProductSchema');
const { body, validationResult } = require('express-validator');


router.post('/add',[
    body('name','enter product name'),
    body('description','enter product description'),
    body('img','enter product image url'),
    body('price','enter product price '),
],)
