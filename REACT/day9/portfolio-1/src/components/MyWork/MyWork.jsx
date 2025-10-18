import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    // Added Bootstrap classes: container-fluid (for full width layout) and py-5 (for vertical padding)
    <div id="mywork" className="mywork container-fluid py-5">
      
      <div className="mywork-title position-relative text-center">
        {/* Added Bootstrap class: fw-semibold for font-weight: 600 */}
        <h1 className="fw-semibold">My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      {/* The grid is managed by custom CSS, but the container ensures the grid spans the content area. 
          If you were using pure Bootstrap grid, you'd apply row/col classes here.
      */}
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          // You could use a Bootstrap Card component here for more structure, but sticking to <img> for simplicity
          return <img key={index} src={work.w_img} alt={`Work project ${index + 1}`} className="img-fluid" />; // img-fluid ensures the image scales responsively
        })}
      </div>
      
      {/* Added Bootstrap classes: d-flex, align-items-center, justify-content-center, rounded-pill (for 50px border-radius) */}
      <div className="mywork-showmore d-flex align-items-center justify-content-center rounded-pill">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow icon" />
      </div>
    </div>
  );
};

export default MyWork;