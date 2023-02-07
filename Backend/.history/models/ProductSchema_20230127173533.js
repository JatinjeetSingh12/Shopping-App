const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    mobile_no: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});


module.exports = mongoose.model('product', ProductSchema);