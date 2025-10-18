import React from "react";
import footerLogo from "../../assets/footer_logo.svg";

const Footer = () => {
  return (
    // Added container-fluid and py-5 for padding/spacing
    <div className="footer container-fluid py-5">
      
      {/* Mapped to d-flex, justify-content-between, and flex-wrap (handled by custom CSS @media) */}
      <div className="footer-top d-flex justify-content-between align-items-start">
        
        <div className="footer-top-left">
          {/* Use local footer logo asset */}
          <img src={footerLogo} alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
          {/* Added text-light for color, lead for larger text, and w-100 for max width on mobile */}
          <p className="lead text-light w-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi
            debitis vitae obcaecati ab aliquam suscipit, nisi facere hic dolores
            odit, rerum dicta. Nesciunt mollitia, dignissimos corrupti deleniti
            maxime sequi.
          </p>
        </div>
        
        {/* Email Input & Subscribe (d-flex is handled by custom CSS to allow for column stacking on mobile) */}
        <div className="footer-top-right">
          
          {/* Email Input: d-flex align-items-center, bg-secondary (roughly), rounded-pill (handled by custom CSS) */}
          <div className="footer-email-input d-flex align-items-center">
            {/* Replaced user_icon with a placeholder image URL */}
            <img src="https://placehold.co/25x25/32323b/ffffff?text=@" alt="User Icon" style={{ width: '25px', height: '25px' }} />
            {/* Added form-control-plaintext or form-control depending on desired style, text-light */}
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="form-control-plaintext text-light"
            />
          </div>
          
          {/* Subscribe Button: btn class is conceptually aligned with the styling */}
          <div className="footer-subscribe rounded-pill">
            Subscribe
          </div>
        </div>
      </div>
      
      <hr className="my-4 border-secondary" /> {/* Added my-4 for margin and border-secondary for color */}
      
      {/* Footer Bottom: d-flex justify-content-between, flex-wrap for responsiveness */}
      <div className="footer-bottom d-flex justify-content-between flex-wrap">
        
        <p className="footer-bottom-left text-light mb-0">
          @ 2025 John Doe. All rights reserved.
        </p>
        
        {/* Policy Links: d-flex gap-5, text-light (implicit) */}
        <div className="footer-bottom-right d-flex gap-5">
          <p className="mb-0">Term of Service</p>
          <p className="mb-0">Privacy Policy</p>
          <p className="mb-0">Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
