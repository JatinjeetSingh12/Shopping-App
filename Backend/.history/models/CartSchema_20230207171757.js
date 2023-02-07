const mongoose = require('mongoose');
const { Schema } = mongoose;

const CartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
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
    quantity:{
        
    }
});


module.exports = mongoose.model('cart', CartSchema);