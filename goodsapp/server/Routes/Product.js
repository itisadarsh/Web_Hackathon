
const express=require("express");
const productRouter=express.Router();

const {createRatings}=require("../Controller/Review");
const {getAllRatings}=require("../Controller/Review");

const {createProduct}=require("../Controller/Product");
const {getAllProducts}=require("../Controller/Product");
const {getProductDetails}=require("../Controller/Product");


const {createcategory}=require("../Controller/Categories");
const {showAllcategories}=require("../Controller/Categories");
const {categoryPageDetails}=require("../Controller/Categories");

const{auth,isAdmin,isBuyer,isSeller}=require("../Middleware/auth");


courseRouter.post("/createproduct",auth,isSeller,createProduct);
courseRouter.get("/getallproducts",auth,isSeller,getAllProducts);
courseRouter.post("/getproductdetails",auth,isSeller,getProductDetails);

courseRouter.post("/createcategory",auth,isAdmin,createcategory);
courseRouter.get("/showallcategories",showAllcategories);
courseRouter.post("/categorypagedetails",categoryPageDetails);

courseRouter.post("/createratings",auth,isBuyer,createRatings);
courseRouter.get("/getallratings",getAllRatings);


module.exports=productRouter;

