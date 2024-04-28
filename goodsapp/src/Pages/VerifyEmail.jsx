import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { useDispatch } from 'react-redux';
import { signUp } from '../services/operations/authAPI';

const VerifyEmail = () => {
    const [otp, setOtp] = useState('');
    const { signupData } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!signupData) {
            navigate('/signup');
        }
    }, [signupData, navigate]);

    const handleForm = (e) => {
        e.preventDefault();
        const { accountType, fname, lname, email, password, confirmpassword } = signupData;
        dispatch(
            signUp(accountType, fname, lname, email, password, confirmpassword, otp, navigate)
        );
    };

    if (!signupData) {
        return <div>Loading...</div>; // or redirect to signup page
    }

    return (
        <div className="flex w-full pt-8 justify-center items-center">
            <div className="w-4/6 bg-pink-300 flex flex-col gap-3 p-4 text-richblack-600">
                <h1 className="text-3xl">Verify Your Email Address</h1>
                <p className="text-xs">
                    An OTP has been sent to {signupData.email} for verification. Please check
                    your inbox and enter the OTP below to complete the verification process.
                </p>
                <form onSubmit={handleForm}>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(props) => (
                            <input
                                {...props}
                                placeholder="-"
                                style={{ boxShadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.18)' }}
                                className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                            />
                        )}
                        containerStyle={{ justifyContent: 'space-between', gap: '0 6px' }}
                    />
                    <button
                        type="submit"
                        className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
                    >
                        Verify Email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VerifyEmail;
