import { useRef } from "react";
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from "react-router-dom";
import React from "react";
import AutocompleteInput from "./autocompleteInput";
import "../assets/homepage.css"; // Import the CSS file

const Homepage = () => {
  const navigate = useNavigate();
  
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const rangeRef = useRef(null);
  
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-screen">
      
      <div ref={homeRef} className="background-img"></div>
    
      <div className="header">
        <div className="logo" onClick={() => scrollToSection(homeRef)} style={{ cursor: "pointer" }}></div>
        <span className="logo-text" onClick={() => scrollToSection(homeRef)} style={{ cursor: "pointer" }}>
          Intell-I-Invest
        </span>
        <nav>
          <span onClick={() => scrollToSection(homeRef)} style={{ cursor: "pointer" }}>Home</span>
          <span onClick={() => scrollToSection(aboutRef)} style={{ cursor: "pointer" }}>About Us</span>
          <span onClick={() => scrollToSection(rangeRef)} style={{ cursor: "pointer" }}>Our Range</span>
          
        </nav>
      </div>
      
      <AutocompleteInput />

      <div className="headline">
        <TypeAnimation
          sequence={[
            "Where would you like to invest today?", 1000,
            "Explore new investment opportunities", 1000,
            "Find the best investment plans for you", 1000,
          ]}
          speed={50}
          style={{ 
            fontSize: '50px', 
            display: 'block', 
            textAlign: 'center', 
            fontWeight: 'normal', 
            color: '#fff', 
          }}
          repeat={Infinity}
        />
      </div>

      <span className="section-title">Our Range</span>
      
      <div ref={rangeRef} className="range-container">
        <div className="range-item">
          <div className="icon new-investors"></div>
          <span>New Investors</span>
        </div>
        <div className="vl"></div>
        <div className="range-item">
          <div className="icon experienced"></div>
          <span>Experienced</span>
        </div>
        <div className="vl"></div>
        <div className="range-item">
          <div className="icon small-scale"></div>
          <span>Small Scale Investors</span>
        </div>
        <div className="vl"></div>
        <div className="range-item">
          <div className="icon large-scale"></div>
          <span>Large Scale Investors</span>
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="about-section">
        <h2>About Intell-I-Invest</h2>
        <p>
          Intell-I-Invest is dedicated to helping investors of all levels make informed decisions. 
          Whether you're new to investing or an experienced investor, our platform offers valuable insights, 
          tools, and resources to guide your investment journey.
        </p>
        <p>
          Our mission is to bridge the gap between investors and opportunities by providing 
          reliable financial information and market trends. Join us to explore new investment strategies 
          and achieve your financial goals.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
