import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    // Added Bootstrap classes: container-fluid for full width, py-5 for top/bottom padding
    <div id="services" className="services container-fluid py-5">
      
      <div className="services-title">
        {/* Added Bootstrap class: text-center */}
        <h1 className="text-center">My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>

      {/* Bootstrap Grid Implementation:
        - d-grid (from custom CSS) for the container.
        - The column layout (3-column desktop, 2-column tablet, 1-column mobile) is handled in the custom CSS, 
          but you can add Bootstrap gap utility (g-4) and responsive column classes (col-lg-4, col-md-6, col-12) 
          if you prefer to manage the grid purely with Bootstrap.
      */}
  {/* Use Bootstrap row + gutters so the col- classes on children behave correctly */}
  <div className="services-container row g-4">
        {Services_Data.map((service, index) => {
          return (
            // Add col-12 for full width on mobile, col-md-6 for 2-up on tablet, col-lg-4 for 3-up on desktop
            <div key={index} className="services-format col-12 col-md-6 col-lg-4">
              {/* Added Bootstrap class: fw-bold for font-weight: 600 */}
              <h3 className="fw-bold">{service.s_no}</h3>
              {/* Added Bootstrap class: fw-bolder for font-weight: 800 */}
              <h2 className="fw-bolder">{service.s_name}</h2>
              {/* Added Bootstrap class: text-light for color: #d4d4d4 */}
              <p className="text-light">{service.s_desc}</p>
              
              {/* Added Bootstrap classes: d-flex, align-items-center, mt-3 for readmore styling */}
              <div className="services-readmore d-flex align-items-center mt-3">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;