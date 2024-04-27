const mongoose=require('mongoose');

const userScheama=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,
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

});

module.exports=mongoose.model("User",userScheama);
