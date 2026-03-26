import React from "react";
import "../landing_page_bg_design/landing_bg_style.css";
import "../landing_page_bg_design/hero_box.css";
import Navbar from "./navbar/Navbar";
import HeroContent from "./hero_sec_intro/HeroContent";
import Footer from "../Footer/Footer";

function HeroBox() {
  return (
    <>
    <div className="bg_gradient">
      <div className="hero_box">
        <div className="navbar_outer_box">
          <Navbar />
        </div>
        <div className="hero_section_intro">
          <HeroContent />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default HeroBox;
