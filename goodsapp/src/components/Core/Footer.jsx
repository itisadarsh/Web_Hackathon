import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-container w-screen">
            <div className="social-media">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
            <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Information</a>
                <a href="#">FAQ</a>
            </div>
            <div className="copyright">
                <p>&copy; 2024 LapDoo. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
