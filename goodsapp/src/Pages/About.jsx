import React from 'react';
// import HomeSlider from './HomeSlider'; // Import the HomeSlider component

const AboutUs = () => {
  const images = [
    'pic1.jpeg',
    'pic2.jpeg',
    'pic3.jpg'
  ]; // Define your image URLs here

  return (
    <div className="text-richblack-700 bg-white-200 min-h-screen flex flex-col justify-center items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">About Us</h1>

      {/* Top Section */}
      <div className="w-full md:w-2/3 flex flex-wrap items-center justify-center mb-8">
        {/* Left Section */}
        <div className="w-full md:w-1/3 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h2>
          <p className="text-lg mb-6 text-gray-700">
            At RuralTechAid, our vision is to create a world where every rural student has the same opportunities as their urban counterparts. We believe that technology can bridge the gap and empower students to reach their full potential, regardless of their location or socioeconomic status.
          </p>
        </div>
        
        {/* Middle Section */}
        <div className="w-full md:w-1/3 p-6 md:p-8 flex justify-center">
          <img src="https://mut.org.mt/wp-content/uploads/2020/12/laptop.jpg" alt="RuralTechAid" className="rounded-lg shadow-md" style={{ width: '300px', height: '300px' }} />
        </div>
        
        {/* Right Section */}
        <div className="w-full md:w-1/3 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Us</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="text-lg mb-2">Empowerment: We provide free laptops and technology resources to rural students, empowering them to succeed academically and professionally.</li>
            <li className="text-lg mb-2">Accessibility: Our platform ensures that technology is accessible to all rural students, regardless of their financial situation.</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section with Slider */}
      <div className="w-full md:w-2/3 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Join Us Today</h2>
        <p className="text-lg text-center mb-6 text-gray-700">Experience the power of technology in transforming rural education. Join RuralTechAid and unlock opportunities for every student.</p>
        
        {/* Use HomeSlider component */}
        {/* <HomeSlider images={images} /> */}
      </div>
    </div>
  );
};

export default AboutUs;