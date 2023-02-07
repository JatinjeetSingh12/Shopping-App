const mongoose = require('mongoose');
const { Schema } = mongoose;

const Cart = new Schema({
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
    price:{
        type: Number,
        required: true    
    },
});


module.exports = mongoose.model('product', ProductSchema);