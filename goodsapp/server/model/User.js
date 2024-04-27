const mongoose=require('mongoose');

const userScheama=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    accountType:{
        type:String,
        enum:["Buyer","Seller"],
        require:true,
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AdditionalDetails',
    },
    reviews:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Reviews'
    },
    image:{
        type:String,
        required:true,
    },
    
});

module.exports=mongoose.model("User",userScheama);
