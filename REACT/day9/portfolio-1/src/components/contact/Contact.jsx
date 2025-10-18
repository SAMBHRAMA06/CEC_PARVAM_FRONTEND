import { useState } from "react";
import "./Contact.css";
import themePattern from "../../assets/theme_pattern.svg";
import mailIcon from "../../assets/mail_icon.svg";
import callIcon from "../../assets/call_icon.svg";
import locationIcon from "../../assets/location_icon.svg";

const Contact = () => {
  // State for form submission status message
  const [result, setResult] = useState("");
  // State for controlling the visibility of the custom submission modal (fallback)
  const [showModal, setShowModal] = useState(false);
  // Submitting state to disable button and show spinner
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
  setResult("Sending....");
  setSubmitting(true);

    // Replace the access key placeholder with a valid one if used externally
    const accessKey = "your api key (get from this url “https://app.web3forms.com/forms”)" 
    
    // Simple validation
    const form = event.target;
    if (!form.name.value || !form.email.value || !form.message.value || accessKey.includes("your api key")) {
        setResult("Please fill all fields and configure your access key.");
        setShowModal(true);
        return;
    }

    const formData = new FormData(form);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully!");
        setShowModal(true);
        form.reset();
      } else {
        setResult("Error submitting form. Please try again.");
        setShowModal(true);
        console.error(data.message);
      }
    } catch (error) {
      setResult("Network error. Please check your connection.");
      setShowModal(true);
      console.error("Fetch Error:", error);
    } finally {
      setSubmitting(false);
    }
  };
  
  // Custom Modal Component for Status Messages (Replaces alert())
  const StatusModal = ({ message, show, onClose }) => {
    if (!show) return null;

    return (
      <div className="custom-modal-backdrop">
        <div className="custom-modal-content rounded-lg p-5">
          <h2 className="text-xl font-bold mb-4">{message.includes("Error") ? "Status Error" : "Success"}</h2>
          <p className="mb-6">{message}</p>
          <button 
            onClick={onClose} 
            className="btn btn-primary rounded-pill px-4 py-2"
          >
            Close
          </button>
        </div>
      </div>
    );
  };


  return (
    <div id="contact" className="contact container py-5">
      
      {/* Status Modal */}
      <StatusModal 
        message={result} 
        show={showModal} 
        onClose={() => setShowModal(false)} 
      />

      {/* Title Section: Mapped to text-center mb-5 */}
      <div className="contact-title text-center mb-5">
        <h1 className="fw-semibold">Get in touch</h1>
        <img src={themePattern} alt="Theme Pattern" className="theme-pattern-placeholder" />
      </div>

      {/* Contact Section: Mapped to row g-5 (for gap) */}
      <div className="contact-section row g-5">
        
        {/* Contact Left (Info): Mapped to col-lg-5, d-flex flex-column */}
        <div className="contact-left col-lg-5 d-flex flex-column">
          <h1>Let's talk </h1>
          <p className="text-secondary lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            cumque, facere non autem sit aperiam ratione repellendus ex deserunt
            libero cum fugit fuga est illum illo eius odit eveniet laudantium.
          </p>
          
          {/* Contact Details: Mapped to d-flex flex-column gap-3 */}
          <div className="contact-details d-flex flex-column gap-3">
            
            {/* Mail */}
            <div className="contact-detail d-flex align-items-center">
              <img src={mailIcon} alt="Mail Icon" style={{ width: 25, height: 25 }} />
              <p>someone@gmail.com</p>
            </div>
            
            {/* Call */}
            <div className="contact-detail d-flex align-items-center">
              <img src={callIcon} alt="Call Icon" style={{ width: 25, height: 25 }} />
              <p>+91 88988777678</p>
            </div>
            
            {/* Location */}
            <div className="contact-detail d-flex align-items-center">
              <img src={locationIcon} alt="Location Icon" style={{ width: 25, height: 25 }} />
              <p>Bengaluru, Karnataka - 563502</p>
            </div>
          </div>
        </div>
        
        {/* Contact Right (Form): Mapped to col-lg-7, d-flex flex-column */}
  <form className="contact-right col-lg-7 d-flex flex-column" onSubmit={onSubmit}>
          
          {/* Name Input */}
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            className="form-control" // Bootstrap form class
            required
          />
          
          {/* Email Input */}
          <label htmlFor="email" className="form-label">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="form-control" // Bootstrap form class
            required
          />
          
          {/* Message Input */}
          <label htmlFor="message" className="form-label">Write your message here</label>
          <textarea
            name="message"
            id="message"
            rows={8} // FIX: Changed 'role' to 'rows'
            placeholder="Enter your message"
            className="form-control" // Bootstrap form class
            required
          ></textarea>

          {/* Submit Button: Mapped to btn btn-primary rounded-pill */}
          <button className="contact-submit btn btn-primary rounded-pill" type="submit" disabled={submitting}>
            {submitting ? (
              <span className="d-flex align-items-center gap-2">
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Sending...
              </span>
            ) : (
              "Submit now"
            )}
          </button>
        </form>
      </div>

      {/* ARIA live region for result messages (screen-reader friendly) */}
      <div aria-live="polite" className="sr-only">{result}</div>
    </div>
  );
};

export default Contact;
