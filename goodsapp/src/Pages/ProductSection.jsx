import React, { useEffect, useState } from 'react'
import { apiConnector } from '../services/apiConnector';
import {productEndpoints} from "../services/apis"
import Products from '../Components/core/Products';
import { useSelector } from 'react-redux';
import { ACCOUNT_TYPE } from '../utils/constants';
import AddProduct from '../Components/core/AddProduct';

const {GET_ALL_PRODUCTS_API}=productEndpoints;

const ProductSection = () => {

    const { user } = useSelector((state) => state.profile)

    const [products,setProducts]=useState([]);

     async function fetchData (){
        try{
      const result= await apiConnector('GET',productEndpoints.GET_ALL_PRODUCTS_API)
      console.log(result.data.product)
      setProducts(result.data.product)
        
     }
      
      
      catch(err){
        console.log(err)
      }
     }
    
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
    {console.log(user?.accountType)}
      {user?.accountType === ACCOUNT_TYPE.BUYER  && <Products product={products} />}  
      {user?.accountType === ACCOUNT_TYPE.SELLER  && <AddProduct/>}  



    
    
    </div>
  )
}

export default ProductSection