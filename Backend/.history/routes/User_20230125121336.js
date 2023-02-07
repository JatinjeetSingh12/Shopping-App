const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');



//create user
router.post('/createUser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email ').isEmail(),
    body('password', 'Enter a valid password ').isLength({ min: 5 }),
    body('confirmPassword', 'Enter a confirm Password').custom((value, { req }) => {
        if (value != req.body.password) {
            return Promise.reject('Password mismatch!')

        }
        return true;
    }),
    body('mobile_no', 'Enter a valid mobile number').isNumeric().withMessage('only number allowed'),
    body('address', 'Enter your valid address').exists()
], async (req, res) => {

    let success = false;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        // // checking duplicate email
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(500).json({ error: "duplicate email" });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
            Address: req.body.address,
            mobile_no: req.body.mobile_no
        })

        const data = {
            user: {
                id: user.id
            }
        }
        var token = jwt.sign(data, "shhhhh");

        success = true;
        res.json({ success, token });
    }

    catch (error) {
        console.error(error.message);
        res.status(500).send("some errors occured");
    }

})




//login user
router.post('/login', [
    body('email', 'Enter a valid email ').isEmail(),
    body('password', 'Enter a valid password ').exists()
], async (req, res) => {
    let success = false;


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

    }

    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ error: "please try to login with correct credentials" });
        }

        //compare password
        let comparePassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparePassword) {
            return res.status(400).json({ error: "please try to login with correct credentials" })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        var token = jwt.sign(data, "shhhhh");

        success = true;
        res.json({ success, token });



    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})

//get user

router.get('/getUser', fetchUser, async (req, res) => {
    try {
        const userid = req.user.id;
        let user = await User.findById(userid).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})

module.exports = router