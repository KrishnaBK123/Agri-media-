// src/pages/message.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import MessageComponent from '../components/MessageComponent';
import './Message.css'; // Import CSS for styling

const Message = () => {
  const location = useLocation();
  const { profile } = location.state || {}; // Retrieve profile data from state

  if (!profile) return <div>No profile data available</div>;

  return (
    <div className="message">
      <header className="message-header">
        <img src={profile.profilePic} alt={profile.username} className="message-header__avatar" />
        <span className="message-header__username">{profile.username}</span>
      </header>
      <MessageComponent /> {/* Integrate MessageComponent */}
    </div>
  );
};

export default Message;
