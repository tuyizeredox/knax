     // src/components/HeroSection.js
     import React from 'react';
     import './HeroSection.css'; // Create a separate CSS file for styles

     const HeroSection = () => {
         return (
             <div className="hero-container">
                 <h1>Welcome to Knax</h1>
                 <p>Your one-stop shop for all tech needs</p>
                 <button className="cta-button">Shop Now</button>
                 <div className="internship-info">
                     <h2>Kickstart Your Career with Our Internship Program!</h2>
                     <p>Gain hands-on experience, mentorship, and networking opportunities.</p>
                     <button className="cta-button">Apply for Internship</button>
                 </div>
             </div>
         );
     };

     export default HeroSection;