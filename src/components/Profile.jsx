import React from 'react';
import SocialLinks from './SocialLinks';
import profileImage from './images/profile-image.jpeg';  // Import the image

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-content">
        <div className="intro">
          <span className="wave">👋</span>
          <h1>Hey, I'm Dhanunjaya Elluri</h1>
        </div>
        <h2>I'm a Data Scientist and Machine Learning Engineer with a passion for making data useful.</h2>
        
        <p className="current-work">
          Currently, I'm a Machine Learning Engineer at <a href="https://validaitor.com/" target="_blank" rel="noopener noreferrer">Validaitor</a> where I'm working on fixing LLMs to make them compliant with EU AI Act.
        </p>

        <div className="interests">
          <p>My research interests include:</p>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Computational Linguistics</li>
            <li>Information Retrieval</li>
          </ul>
        </div>
      </div>
      
      <div className="profile-right">
        <div className="profile-image">
          <img 
            src={profileImage}  // Use the imported image
            alt="Profile"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x400';
            }}
          />
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Profile; 