const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true    
    },
    Address: {
        type: String,
        required: true,
    },
    
    mobile_no: {
        type: Number,
        required: true
    },
});


module.exports = mongoose.model('product', ProductSchema);