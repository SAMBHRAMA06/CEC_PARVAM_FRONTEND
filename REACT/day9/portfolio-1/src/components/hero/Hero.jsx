import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    // Added Bootstrap classes: d-flex, align-items-center, flex-column, text-center
    <div id="home" className="hero d-flex align-items-center flex-column text-center">
      {/* Added img-fluid for responsive image scaling */}
      <img src={profile_img} alt="Profile" className="img-fluid" />
      
      {/* Added Bootstrap classes: fw-semibold for font-weight: 600 */}
      <h1 className="fw-semibold">
        {/* The custom gradient styling is handled by the <span> within the custom CSS */}
        <span>I'm John Doe,</span> frontend development based in INDIA.
      </h1>
      
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, sint.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      
      {/* Added Bootstrap classes: d-flex, align-items-center, gap-3 (roughly gap: 25px) 
          For mobile, the custom CSS handles flex-direction: column
      */}
      <div className="hero-action d-flex align-items-center">
        {/* Added Bootstrap class: rounded-pill (for 50px border-radius) */}
        <div className="hero-connect rounded-pill">
          {/* Added Bootstrap class: text-white, text-decoration-none */}
          <AnchorLink className="anchor-link text-white text-decoration-none" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        
        {/* Added Bootstrap classes: rounded-pill, border, border-white, text-white (implicit) */}
        <div className="hero-resume rounded-pill border border-white">
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;