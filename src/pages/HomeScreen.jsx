import { useNavigate } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import React from "react";
import AutocompleteInput from "./autocompleteInput";
import "../assets/homepage.css"; // Import the CSS file


const homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-screen">
      
      <div className="background-img"></div>
    
      <div className="header">
        <div className="logo"></div>
        <span className="logo-text">Intell-I-Invest</span>
        <nav>
          <span>Home</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </nav>
      </div>
      
      <AutocompleteInput />

      <div className="chart-image"></div>
      <div className="headline">
      <TypeAnimation
        sequence={[
          "Where would you like to invest today?", 1000,
          
          "Explore new investment opportunities", 1000,
          "Find the best investment plans for you", 1000,
        ]}
        speed={50} // Typing speed
        style={{ 
          fontSize: '50px', 
          display: 'block', 
          textAlign: 'center', 
          fontWeight: 'normal', 
          color: '#fff', 
        }}
        repeat={Infinity} // Keeps repeating the animation
      />
    </div>
      <div className="range-container">
        <div className="range-item">
          <div className="icon new-investors"></div>
          <span>New Investors</span>
        </div>
        <div class="vl"></div>
        <div className="range-item">
          <div className="icon experienced"></div>
          <span>Experienced</span>
        </div>
        <div class="vl"></div>
        <div className="range-item">
          <div className="icon small-scale"></div>
          <span>Small Scale Investors</span>
        </div>
        <div class="vl"></div>
        <div className="range-item">
          <div className="icon large-scale"></div>
          <span>Large Scale Investors</span>
        </div>
      </div>
      

      <span className="section-title">Our Range</span>

      
    </div>
  );
};

export default homepage;
