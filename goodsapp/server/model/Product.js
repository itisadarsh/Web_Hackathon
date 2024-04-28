const mongoose=require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specification: {
        type: String,
        required:true,
    },
    oldYear: {
        type: Number,
        required:true,
    },
    categories: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories'
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
    thumbnail: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }
});


module.exports=mongoose.model("Product",productSchema);
