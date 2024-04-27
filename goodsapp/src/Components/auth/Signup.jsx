import React, { useState } from 'react';
import { sendOtp } from "../../services/operations/authAPI"
import { setSignupData } from "../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../utils/constants"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signup = () => {

    const navigate = useNavigate()
    
  
  
    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.BUYER)

    const dispatch=useDispatch();
 
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    if(password !== confirmPassword) {toast.error("Passwords do not match");  return ; }
    const signupData={accountType,fname,lname,email,password,confirmPassword};
    dispatch(setSignupData(signupData))
    dispatch(sendOtp(email, navigate))    


   
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <div className="flex justify-between mb-4">
          <button
            className={`px-4 py-2 rounded-full ${
                accountType === 'buyer' ? 'bg-blue-500 text-white' : 'text-gray-500'
            }`}
            onClick={() => setAccountType('Buyer')}
          >
            Buyer
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
                accountType === 'seller' ? 'bg-blue-500 text-white' : 'text-gray-500'
            }`}
            onClick={() => setAccountType('Seller')}
          >
            Seller
          </button>
        </div>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="fname" className="block text-gray-700">First Name</label>
            <input
              type="text"
              id="fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lname" className="block text-gray-700">Last Name</label>
            <input
              type="text"
              id="lname"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
