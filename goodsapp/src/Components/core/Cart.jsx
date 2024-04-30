import React, { useState } from 'react'

const Cart = (props) => {
 
  console.log(props.price)
    const [paymentStatus, setPaymentStatus] = useState(null);
  
    const loadScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    };
  
    const pay = async () => {
      let amount = Number.parseFloat(props.price);
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
  
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
  
      const options = {
        key: "rzp_test_xMdqOVqvl9Xk49",
        amount: parseInt(amount * 100),
        currency: "INR",
        name: "Umang Bhalodiya",
        description: "Test Transaction",
        image: "https://avatars.githubusercontent.com/u/76506184?v=4",
        handler: function (response) {
          setPaymentStatus(response.razorpay_payment_id ? "success" : "failed");
        },
        prefill: {
          name: "Umang Bhalodiya",
          email: "umangbhalodiya660@gmail.com",
          contact: "9988556633",
        },
        notes: {
          address: "India",
        },
        theme: {
          color: "#158993",
        },
      };
  
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };
  
    return (
      <div className="App">
        <button
          className="button_pay"
          onClick={() => {
            pay();
          }}
        >
          Pay with Razorpay
        </button>
        {paymentStatus && (
          <p>
            {paymentStatus === "success"
              ? "Payment successful! Thank you for your purchase."
              : "Payment not successful. Please try again."}
          </p>
        )}
      </div>
    );

  
 
}

export default Cart