// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './Header.css'; // Import CSS for styling
import logo from '../images/AgriMedia Logo.png'; // Import the logo image
import NotificationComponent from './NotificationComponent'; // Import NotificationComponent

const Header = ({ onVideoClick, onHomeClick, onMessageClick, onNotificationClick, showNotifications }) => {
  const navigate = useNavigate(); // Initialize useNavigate for routing

  // Function to handle profile click and navigate to the profile page
  const onProfileClick = () => {
    navigate('/profile'); // Navigate to the '/profile' route
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="AgriMedia Logo" className="header__logo-image" />
        <span className="header__logo-text"></span>
      </div>
      <input type="text" className="header__search" placeholder="Search..." />
      <div className="header__icons">
        <i className="fas fa-home header__icon" title="Home" onClick={onHomeClick}></i>
        <i className="fas fa-video header__icon" title="Videos" onClick={onVideoClick}></i>
        <i className="fas fa-bell header__icon" title="Notifications" onClick={onNotificationClick}></i> {/* Notification click handler */}
        <i className="fas fa-envelope header__icon" title="Messages" onClick={onMessageClick}></i>
        <i className="fas fa-user header__icon" title="Profile" onClick={onProfileClick}></i> {/* Updated profile click handler */}
      </div>
      {showNotifications && <NotificationComponent />} {/* Display notifications when toggled */}
    </header>
  );
};

export default Header;
