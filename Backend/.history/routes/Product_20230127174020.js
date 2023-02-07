const express = require('express');
const router = express.Router();
const product = require('../models/ProductSchema');
const { body, validationResult } = require('express-validator');


router.
