import React from 'react'
import { NavLink } from 'react-router-dom'
import Cart from './Cart'

const Products = (props) => {
  return (
    <div className='flex w-full'>
  
    <div className='flex w-11/12 mx-auto pt-12  gap-6 flex-col lg:flex-row '>

    {props.product.map((data,index)=>{
      {console.log(props.product)}
      return <div className='flex   gap-1 bg-richblack-25 flex-wrap  p-3 w-[33%]' key={index}>

        <div className='w-full' > <img src={data.thumbnail} alt=""  /></div>
           <div className='flex flex-col gap-4 text-richblack-700'>

        <h2 className='text-xl font-bold'>{data.name}</h2>
       
        <div className='text-lg font-bold'>{data.oldYear} years older</div>
        <div className='relative '>₹ {data.price}</div>
        <div className='text-xl font-bold  '>{data.specification}</div>
          <button className='bg-yellow-50 p-2 bottom-0 relative mt-8 rounded-lg border-b border-b-yellow-300 '><Cart price={data.price}/></button>


        </div>

      </div>
    })
    
    
    }
    </div>


    </div>
  )
}

export default Products