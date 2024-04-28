

import NavBar from './Components/common/NavBar';
import Login from './Components/auth/Login';
import Signup from './Components/auth/Signup';
import Home from './Pages/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import OpenRoute from "./Components/auth/OpenRoute"
import PrivateRoute from "./Components/auth/PrivateRoute"
import VerifyEmail from './Pages/VerifyEmail';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ProductSection from './Pages/ProductSection';
import Error from './Pages/Error';
import UpdatePassword from "./Pages/UpdatePassword"

import About from "./Pages/About"

import Contact from "./Pages/Contact"


import ForgotPassword from "./Pages/ForgotPassword"

// import { getUserDetails } from "./services/operations/profileAPI"
function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {                                                    // it store data of user in localstroage and when we open browser then that user logined;                 
    if(localStorage.getItem("token")){
      const token = JSON.parse(localStorage.getItem("token"))
      // dispatch(getUserDetails(token, navigate))
    }
  }, [])



  const { token } = useSelector((state) => state.auth);

  return (
    <div className=" bg-pink-25 w-full h-full text-kindgreen-200 flex flex-col font-inter overflow-x-hidden  min-h-screen  relative">

    <NavBar/>

    <Routes> 
    
    <Route path="/" element={<Home />}></Route>
   
    <Route path="/product-section" element={<ProductSection/>}></Route>
    <Route path="/verify-email" element={<VerifyEmail/>}></Route>
    
    <Route path="signup" element = { <OpenRoute> <Signup /> </OpenRoute> } />
          <Route path="login" element = { <OpenRoute> <Login /> </OpenRoute> } />
          <Route path="forgot-password" element = { <OpenRoute> <ForgotPassword /> </OpenRoute> } />
          <Route path="verify-email" element = { <OpenRoute> <VerifyEmail /> </OpenRoute> } />
          <Route path="update-password/:id" element = { <OpenRoute> <UpdatePassword /> </OpenRoute> } />
          <Route path="about" element = { <OpenRoute> <About /> </OpenRoute> } />
          <Route path="/contact" element={<Contact />} />





    <Route path="*" element={<Error />} />
     </Routes>

    </div>
  );
}

export default App;
