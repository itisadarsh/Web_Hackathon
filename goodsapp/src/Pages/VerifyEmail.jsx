import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input';


import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";


const VerifyEmail = () => {

    const [otp, setOtp] = useState('');
    const { signupData, loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {                // Only allow access of this route when user has filled the signup form
        if(!signupData) navigate("/signup");
     }, []);

     const handleform= (e) => {
        e.preventDefault();
        const { accountType,  fname, lname, email, password, confirmpassword, } = signupData;
    
        dispatch(
          signUp( accountType,  fname, lname, email, password, confirmpassword, otp, navigate )
          )
      };
    

  return (
    <div className='flex w-full'>

        <div className='w-4/6 bg-pink-300 flex flex-col gap-3'>

        <h1 className='3xl '> 
         Verify Your Email Address
        </h1>
      
         <p>An OTP has been sent to {signupData.email} for verification.
          Please check your inbox and enter the OTP below to complete the verification process."
         </p> 
    <form action={handleform}>
         <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span></span>}
      renderInput={(props) => <input {...props} />}
    />

         <button  onClick={()=>dispatch(sendOtp(signupData.email,navigate))}> <RxCountdownTimer /> Resend it</button>

</form>
      
      

        </div>

    </div>
  )
}

export default VerifyEmail