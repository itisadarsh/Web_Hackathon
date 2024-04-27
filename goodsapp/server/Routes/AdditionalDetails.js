

const express=require("express");
const profileRouter=express.Router();

const{auth}=require("../Middleware/auth");


const {updateProfile}=require("../Controller/Profile");
const {deleteProfile}=require("../Controller/Profile");
const {updateProfilePic}=require("../Controller/Profile");


const {resetToken}=require("../Controller/ResetPassword");
const {resetPassword}=require("../Controller/ResetPassword");

profileRouter.post("/updateprofile",auth,updateProfile);
profileRouter.post("/updateprofilepic",auth,updateProfilePic);
profileRouter.delete("/deleteprofile",auth,deleteProfile);

profileRouter.post("/resettoken",resetToken);
profileRouter.post("/resetpassword",auth,resetPassword);

module.exports=profileRouter;
