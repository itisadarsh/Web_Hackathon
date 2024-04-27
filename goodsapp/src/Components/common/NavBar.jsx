import React from 'react'
import logo from "../../assests/logo.jpg"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex w-full  bg-richblack-800 '>


    <nav className='flex mx-auto w-11/12 justify-evenly items-center '>

        <img src={logo} alt=""  className='h-14'/>

        <div className='flex gap-3 text-xl'>
       <NavLink to={"/"}> <div>Home</div></NavLink>
       <NavLink to={"/products"}> <div>Products</div></NavLink>
       <NavLink to={"/about"}> <div>About</div></NavLink>
        </div>

        <div className='flex justify-between gap-2 text-xl'>

            <NavLink to={"/login"}> <div className='bg-richblack-700 p-1 rounded-lg px-2'>Login</div></NavLink>
            <NavLink to={"/signup"}><div className='bg-richblack-700 p-1 rounded-lg px-2'>SignUp</div></NavLink>
        </div>

       

    </nav>

    </div>
  )
}

export default NavBar