import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faCheck } from '@fortawesome/free-solid-svg-icons'; // Seen/Unseen icons
import './MessageList.css'; // Import CSS for styling

// Import images
import user1 from '../images/user1.jpg';
import user2 from '../images/user2.jpeg';
import user3 from '../images/user3.jpeg';

const MessageList = ({ onProfileClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const messages = [
    {
      username: 'Krishna',
      profileImage: user1,
      lastMessage: 'Just harvested my crops!',
      seen: true,
      time: '1h',
    },
    {
      username: 'Rahul',
      profileImage: user2,
      lastMessage: 'Check out this farming technique!',
      seen: false,
      time: '5h',
    },
    {
      username: 'Karthik',
      profileImage: user3,
      lastMessage: 'Let’s talk about soil health.',
      seen: true,
      time: '1d',
    },
    {
      username: 'Basavaraj',
      profileImage: user2,
      lastMessage: 'Just harvested my crops!',
      seen: true,
      time: '1h',
    },
    {
      username: 'Rahul_P',
      profileImage: user3,
      lastMessage: 'Check out this farming technique!',
      seen: false,
      time: '5h',
    },
    {
      username: 'Karthik_A',
      profileImage: user1,
      lastMessage: 'Let’s talk about soil health.',
      seen: true,
      time: '1d',
    },
  ];

  const handleProfileClick = (profile) => {
    if (onProfileClick) {
      onProfileClick(profile); // Call onProfileClick with the selected profile
    }
  };

  // Filter messages based on the search term
  const filteredMessages = messages.filter((message) =>
    message.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="message-list-container">
      <div className="message-list">
        {/* Heading */}
        <h2 className="message-heading">Messages</h2>
        
        {/* Search bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search messages"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Message list */}
        {filteredMessages.map((message, index) => (
          <div
            key={index}
            className="message-item"
            onClick={() => handleProfileClick(message)}
          >
            <img src={message.profileImage} alt={message.username} className="message-avatar" />
            <div className="message-info">
              <p className="username">{message.username}</p>
              <p className="last-message">
                {message.lastMessage}{' '}
                <FontAwesomeIcon
                  icon={message.seen ? faCheckDouble : faCheck}
                  className={`message-status ${message.seen ? 'seen' : 'unseen'}`}
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
