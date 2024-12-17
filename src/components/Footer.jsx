import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>© {currentYear} Dhanunjaya Elluri. All rights reserved.</p>
          <p>Made with <FaHeart className="heart-icon" /> using React</p>
        </div>
        <div className="footer-license">
          <p>
            Content licensed under{' '}
            <a 
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              CC BY-NC-SA 4.0
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 