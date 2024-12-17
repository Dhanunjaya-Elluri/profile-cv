import React from "react";
import SocialLinks from "./SocialLinks";
import profileImage from "./images/profile-image.jpeg"; // Import the image

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-content">
        <div className="intro">
          <span className="wave">👋</span>
          <h1>Hey, I&apos;m Dhanunjaya Elluri</h1>
        </div>
        <h2>
          I&apos;m a Data Scientist and Machine Learning Engineer with a passion
          for making data useful for humanity.
        </h2>

        <p className="current-work">
          Currently, I&apos;m a Machine Learning Engineer at{" "}
          <a
            href="https://validaitor.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Validaitor
          </a>{" "}
          where I&apos;m working on fixing LLMs to make them compliant with EU
          AI Act.
        </p>

        <div className="interests">
          <p>My interests include:</p>
          <ul>
            <li>Large Language Models</li>
            <li>Time Series Forecasting</li>
            <li>MLOps</li>
          </ul>
        </div>
      </div>

      <div className="profile-right">
        <div className="profile-image">
          <img
            src={profileImage} // Use the imported image
            alt="Profile"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400x400";
            }}
          />
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Profile;
