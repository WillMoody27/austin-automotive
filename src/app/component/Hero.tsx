"use client";
import React from "react";

// Import the Props type from the data file or define it here
import { HeroProps } from "@/lib/heroData";
import "@/styles/Hero.css"; // Import the CSS file
import Link from "next/link";

const Hero = ({ heading, description, image }: HeroProps) => {
  return (
    <section id="hero" className="hero-container">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-heading hero-heading-md hero-heading-lg">
            {heading}
          </h1>
          <p className="hero-description hero-description-md">{description}</p>
          <div className="button-container">
            <Link href="#" className="booking-button">
              Book an Appointment
            </Link>
            <Link href="#" className="services-button">
              See Our Services
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={image.src} className="hero-image" alt={image.alt} />
        <div className="hero-overlay" />
      </div>
    </section>
  );
};

export default Hero;
