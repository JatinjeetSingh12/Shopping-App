const mongoose = require('mongoose');
const { Schema } = mongoose;

const CartSchema = new Schema({
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
    categories:{
        type: String,
        required: true    
    },
});


module.exports = mongoose.model('product', CartSchema);