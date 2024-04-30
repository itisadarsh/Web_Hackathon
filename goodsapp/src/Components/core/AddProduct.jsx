import React, { useState } from 'react'
import { apiConnector } from '../../services/apiConnector';


import {productEndpoints} from "../../services/apis"
import Error from '../../Pages/Error';
import { useSelector } from 'react-redux';

const {CREATE_PRODUCT_API}=productEndpoints;

const AddProduct = () => {


  const[formData,setFormData]=useState({prodName:"",prodSpecification:"",oldYear:"",price:"",thumbnailImage:null})

  function changeHandler(e){
    setFormData( (prevData) =>({ ...prevData , [e.target.name]:e.target.name==="thumbnailImage" ?e.target.files[0]: e.target.value })  );
  }

  const { prodName, prodSpecification, oldYear, price, thumbnailImage} = formData

  const { user } = useSelector((state) => state.profile)

  async function handleform(){
    try{
      console.log(user._id);
      // const category="";
      console.log(thumbnailImage)
        const formData = new FormData();
        formData.append("prodName", prodName);
        formData.append("prodSpecification", prodSpecification);
        formData.append("oldYear", oldYear);
        formData.append("price", price);
        formData.append("thumbnailImage", thumbnailImage); 
        formData.append("category","662d6a4e15e0a4b84e8d1d2b");
        formData.append("userId",user._id);

        // const headers = {
        //   'Authorization': `Bearer ${user?.token}`, // Assuming your authentication token is stored in the user slice
        // };



        // Append the file directly
        
        const result = await apiConnector("POST", CREATE_PRODUCT_API, formData);

    // const result=await apiConnector("POST",CREATE_PRODUCT_API,{ prodName, prodSpecification, oldYear, price, thumbnailImage: thumbnailImage.name,category:"662d6a4e15e0a4b84e8d1d2b"});
    // if(!result.data.message){
    //   return <Error/>
    // }

    console.log("Succesfull Product Registered "   ,result)


    }catch(err){
      alert(err)
      console.log(err);
    }
  }




  return (
    <div className='flex w-full '>

    <div className='w-11/12 mx-auto '>

        <h1 className="form-heading">Sell Your Laptop</h1>
        <form onSubmit={handleform}>
          <div className="form-group">
            <label htmlFor="prodName">Product Name:</label>
            <input
              type="text"
              id="prodName"
              name="prodName"
              placeholder="Enter the name of Model"
              required
              value={prodName}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="prodSpecification">Laptop Specification:</label>
            <input
              type="text"
              id="prodSpecification"
              name="prodSpecification"
              placeholder="Enter product Specification"
              required
              value={prodSpecification}
              onChange={changeHandler}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="brand">Category: </label>
            <input
              type="text"
              id="brand"
              name="brand"
              placeholder="Enter laptop brand"
              required
            
              
            /> 
           </div> */}
          <div className="form-group">
            <label htmlFor="oldYear">Years of Use:</label>
            <input
              type="number"
              id="oldYear"
              name="oldYear"
              placeholder="Enter years of use"
              required
              value={oldYear}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price ($):</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter your desired price"
              required
              value={price}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="thumbnailImage">Upload Images:</label>
            <input
              type="file"
              id="thumbnailImage"
              name="thumbnailImage"
              accept="image/*"
              multiple
              // value={thumbnailImage}
              onChange={changeHandler}
            />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}


 

  

export default AddProduct