import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faMicrophone, faPaperPlane, faVideo } from '@fortawesome/free-solid-svg-icons';
import './MessageComponent.css';

// Import profile images
import myAvatar from '../images/user1.jpg'; // Replace with your actual path
import otherAvatar from '../images/user3.jpeg'; // Replace with your actual path

const MessageComponent = ({ profile }) => {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [messages, setMessages] = useState([]);
  const [mediaError, setMediaError] = useState(false);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSend = () => {
    if (message.trim() || file) {
      const newMessage = {
        fromMe: true,
        type: file ? file.type.split('/')[0] : 'text',
        text: file ? URL.createObjectURL(file) : message,
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      setFile(null);
    }
  };

  const handleRecord = () => {
    // Placeholder for recording logic
    console.log("Recording audio...");
  };

  const handleMediaError = () => {
    setMediaError(true);
  };

  return (
    <div className="message-component">
      <div className="message-header">
        <img src={profile.profileImage} alt={profile.username} className="message-header__avatar" />
        <span className="message-header__username">{profile.username}</span>
        <FontAwesomeIcon icon={faVideo} className="message-header__video-call-icon" />
      </div>
      <div className="message-header-line"></div>
      <div className="message-content">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-content__message ${message.fromMe ? 'from-me' : ''}`}
          >
            <img
              src={message.fromMe ? myAvatar : otherAvatar}
              alt={message.fromMe ? 'Your avatar' : 'Sender avatar'}
              className="message-content__message-avatar"
            />
            <div className="message-content__message-bubble">
              {message.type === 'text' && (
                <p className="message-content__message-text">{message.text}</p>
              )}
              {message.type === 'image' && !mediaError && (
                <img
                  src={message.text}
                  alt="Sent image"
                  className="message-content__message-media"
                  onError={handleMediaError}
                />
              )}
              {message.type === 'video' && !mediaError && (
                <video controls className="message-content__message-media" onError={handleMediaError}>
                  <source src={message.text} type="video/mp4" />
                </video>
              )}
              {message.type === 'audio' && !mediaError && (
                <audio controls className="message-content__message-media" onError={handleMediaError}>
                  <source src={message.text} type="audio/mp4" />
                </audio>
              )}
              {mediaError && <p className="message-content__message-error">Media failed to load.</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="message-input">
        <label htmlFor="file-upload" className="message-input__file-label">
          <FontAwesomeIcon icon={faPaperclip} />
          <input
            id="file-upload"
            type="file"
            accept="image/*,video/*,audio/*"
            onChange={handleFileChange}
            className="message-input__file"
          />
        </label>
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type a message..."
          className="message-input__text"
        />
        <button onClick={handleRecord} className="message-input__record">
          <FontAwesomeIcon icon={faMicrophone} />
        </button>
        <button onClick={handleSend} className="message-input__send">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default MessageComponent;
