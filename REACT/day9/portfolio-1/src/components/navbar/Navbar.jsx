import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);

  const handleMenuClick = (section) => {
    setMenu(section);
    setOpen(false); // close menu after click (mobile)
  };

  return (
    // Added Bootstrap classes: d-flex, align-items-center, justify-content-between
    <div className="navbar d-flex align-items-center justify-content-between">
      <img src={logo} alt="Logo" />

      {/* Hamburger Icon for Mobile */}
      <div
        className={`hamburger ${open ? "open" : ""} d-md-none`} // d-md-none hides it on medium+ screens (desktop)
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Added Bootstrap classes: list-unstyled (for list-style: none) */}
      <ul className={`nav-menu ${open ? "active" : ""} list-unstyled`}>
        {/* Each li implicitly gets d-flex and flex-column from custom CSS */}
        <li>
          {/* Added Bootstrap classes: text-white, text-decoration-none */}
          <AnchorLink className="anchor-link text-white text-decoration-none" href="#home">
            <p onClick={() => handleMenuClick("home")}>Home</p>
            {/* img implicitly gets mx-auto from custom CSS */}
            {menu === "home" && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link text-white text-decoration-none" offset={50} href="#about">
            <p onClick={() => handleMenuClick("about")}>About Me</p>
            {menu === "about" && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link text-white text-decoration-none" offset={50} href="#services">
            <p onClick={() => handleMenuClick("services")}>Services</p>
            {menu === "services" && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link text-white text-decoration-none" offset={50} href="#mywork">
            <p onClick={() => handleMenuClick("portfolio")}>Portfolio</p>
            {menu === "portfolio" && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link text-white text-decoration-none" offset={50} href="#contact">
            <p onClick={() => handleMenuClick("contact")}>Contact</p>
            {menu === "contact" && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect d-none d-md-block"> {/* d-none for mobile, d-md-block for desktop */}
        <AnchorLink className="anchor-link text-white text-decoration-none" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;