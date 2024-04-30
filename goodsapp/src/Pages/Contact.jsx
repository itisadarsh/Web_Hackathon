import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 min-h-screen flex flex-col justify-center items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Contact Us</h1>

      {/* Contact Information */}
      <div className="w-full md:w-2/3 flex flex-wrap justify-center mb-8">
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Our Office</h2>
          <p className="text-lg mb-4 text-white">123 Street Name, City, Country</p>
          <p className="text-lg mb-4 text-white">Email: ruraltechaid@gmail.com</p>
          <p className="text-lg mb-4 text-white">Phone: +123 456 7890</p>
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Business Hours</h2>
          <p className="text-lg mb-4 text-white">Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p className="text-lg mb-4 text-white">Saturday: 9:00 AM - 1:00 PM</p>
          <p className="text-lg mb-4 text-white">Sunday: Closed</p>
        </div>
      </div>

      {/* Map */}
      <div className="w-full md:w-2/3 mb-8">
        {/* Replace the iframe URL with your map URL */}
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.918850296492!2d-73.9811474842289!3d40.730627979329406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xe33ee7c301c28a1f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1630048525953!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Social Media Links */}
      <div className="flex mb-8">
        <a href="#" className="text-white text-4xl mx-4 hover:text-blue-300">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-white text-4xl mx-4 hover:text-blue-300">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-white text-4xl mx-4 hover:text-blue-300">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-white text-4xl mx-4 hover:text-blue-300">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      {/* Footer */}
      <footer className="text-white text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;