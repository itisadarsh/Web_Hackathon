import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8">About Us</h1>

      {/* Top Section */}
      <div className="w-2/3 flex mb-8">
        {/* Left Section */}
        <div className="w-1/3 p-8">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg mb-6">
            At RuralTechAid, our vision is to create a world where every rural student has the same opportunities as their urban counterparts. We believe that technology can bridge the gap and empower students to reach their full potential, regardless of their location or socioeconomic status.
          </p>
        </div>
        
        {/* Middle Section */}
        <div className="w-1/3 p-8 flex justify-center">
          <img src="https://mut.org.mt/wp-content/uploads/2020/12/laptop.jpg" alt="RuralTechAid" className="rounded-lg shadow-md" style={{ width: '300px', height: '300px' }} />
        </div>
        
        {/* Right Section */}
        <div className="w-1/3 p-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-lg mb-2">Empowerment: We provide free laptops and technology resources to rural students, empowering them to succeed academically and professionally.</li>
            <li className="text-lg mb-2">Accessibility: Our platform ensures that technology is accessible to all rural students, regardless of their financial situation.</li>
            </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <h2 className="text-2xl font-bold mb-4">Join Us Today</h2>
      <p className="text-lg text-center">Experience the power of technology in transforming rural education. Join RuralTechAid and unlock opportunities for every student.</p>
    
      <div className="flex justify-center mb-8">
        <img src="https://via.placeholder.com/150" alt="Image1" className="mr-4" />
        <img src="https://via.placeholder.com/150" alt="Image2" className="mr-4" />
        <img src="https://via.placeholder.com/150" alt="Image3" />
      </div>

      {/* Heading */}
      </div>
  );
};

export default AboutUs;
