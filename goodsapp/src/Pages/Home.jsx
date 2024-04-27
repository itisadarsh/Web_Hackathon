import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import img1 from "../assests/homepage_img1.jpg";


const Home = () => {
  return (
    <div className='flex w-full '>

    <div className='flex w-11/12 mx-auto flex-col pt-12 gap-12 items-center'>

        <div className='flex items-center justify-center text-2xl '>
        <NavLink to={"/signup"} className={"bg-richblack-25 p-2 rounded-full px-4 border-b border-b-kindgreen-200 flex  gap-2 items-center"}>
        Join Our Initiative <FaArrowRight/>
        </NavLink>
        </div>

        <div className='flex gap-6 lg:justify-center  lg:px-8 lg:w-[1100px] bg-pink-700 p-14 px-28 text-white relative z-10 h-[450px] lg:h-[500px]' >

           <div className='w-[50%] lg:w-[400px] relative' >
          <div><img src={img1} alt="" className=' img1   z-40 overflow-hidden absolute lg:h-[400px] shadow-[10px_-5px_50px_-5px]  shadow-orange-100'  /></div> 

           <div className='bg-orange-100 rounded-full translate-x-[-24%] translate-y-[64%] lg:translate-y-[128%] w-48 h-48  shadow-[10px_-5px_50px_-5px]  shadow-pink-100 '></div>
           <div className='bg-yellow-25 rounded-full translate-x-[-24%] translate-y-[38%] lg:translate-y-[238%] w-16 h-16  shadow-[10px_-5px_50px_-5px]  shadow-pink-800 '></div>
           
           </div> 

            <div className='flex flex-col lg:translate-x-[-20%]  gap-4 lg:w-[200px] text-justify items-start'>
                <h1 className='text-3xl font-bold'>Why Donate Old Laptops?</h1>
                
                <p>Many rural students lack access to modern educational resources, hindering their academic progress. Your old laptops, though no longer in use for you, can become powerful tools for these students, opening doors to knowledge and opportunities</p>
                
                <NavLink to="/about" className={"bg-richblack-25 p-2 rounded-full px-4 border-b border-b-kindgreen-200 flex  text-kindgreen-300 gap-2 items-center"}>Learn More </NavLink>
           
            </div>
            

        </div>
    </div>

       

    </div>
  )
}

export default Home;