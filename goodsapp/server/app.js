const express=require("express");
const cookie=require('cookie-parser')
const app=express();
const path=require('path')
const _dirname=path.dirname("")
const buildPath=path.join(_dirname,"../build")

app.use(express.static(buildPath))
require("dotenv").config()

app.get("/*",function(req,res){
    res.sendFile(path.join(__dirname,"../build/index.html"),
function(err){
    if(err){
        res.status(500).send(err);
    }
})
})

const productRouter=require("./Routes/Product");
// const paymentRouter=require("./Routes/Payment");
const additionalDetailsRouter=require("./Routes/AdditionalDetails");
const userRouter=require("./Routes/User");
const cors=require("cors");
const fileUpload=require("express-fileupload")

const {cloudinaryConnect}=require("./config/cloudinaryConnect");
const dbConnect = require("./config/database");

app.use(express.json());
app.use(cookie());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));
app.use(fileUpload({useTempFiles:true,tempFileDir:"/tmp"}));

const PORT=process.env.PORT || 5000;

dbConnect();
cloudinaryConnect();

app.use("/api/v1/product",productRouter);
// app.use("/api/v1/payment",paymentRouter);
app.use("/api/v1/profile",additionalDetailsRouter);
app.use("/api/v1/user",userRouter);



app.listen(PORT,()=>{
    console.log(`Server started Successfully at ${PORT}`);
});






