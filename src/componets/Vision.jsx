import React from 'react';
import hmkey from "../assets/homekey.png" 
const VisionMission = () => {
  return (
    <div className="vision-mission-container">
      <div className="vision-mission-content">
        <div className='xmark'>
        <h2>Our Vision</h2>
        <p>
          To redefine the real estate experience by setting new benchmarks in
          quality, innovation, and customer satisfaction, creating communities
          that inspire and enrich lives.
        </p>
        <h2>Our Mission</h2>
        <p>
          To deliver exceptional properties that blend architectural excellence
          with thoughtful design, ensuring each home offers unparalleled comfort
          and value. We are committed to fostering trust, transparency, and
          lasting relationships with our clients, partners, and communities.
        </p>
        </div>
       
      </div>
      <div className="vision-mission-image">
        <img src={hmkey}  alt="Vision and Mission" />
      </div>
    </div>
  );
};

export default VisionMission;
