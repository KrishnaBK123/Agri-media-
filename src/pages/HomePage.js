// src/pages/HomePage.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';
import VideoBlog from '../components/VideoBlog';
import MessageList from '../components/MessageList'; // Import MessageList component
import MessageComponent from '../components/MessageComponent'; // Import MessageComponent component
import NotificationComponent from '../components/NotificationComponent'; // Import NotificationComponent component

// Import images and videos
import user1 from '../images/user1.jpg';
import user2 from '../images/user2.jpeg';
import user3 from '../images/user3.jpeg';
import user4 from '../images/user4.webp';
import post1 from '../images/post3.jpg';
import post2 from '../images/post2.jpg';
import post3 from '../images/post1.jpg';
import post4 from '../images/post4.jpg';
import video1 from '../videos/video1.mp4'; // Example video  file
import video2 from '../videos/video2.mp4'; // Example video file
import video3 from '../videos/video3.mp4'; // Example video file

const HomePage = ({ user, onVideoClick, onHomeClick }) => {
  const [showVideos, setShowVideos] = useState(false);
  const [showMessages, setShowMessages] = useState(false); // State for messages
  const [showNotifications, setShowNotifications] = useState(false); // State for notifications
  const [selectedProfile, setSelectedProfile] = useState(null); // State for selected profile

  const handleVideoClick = () => {
    setShowVideos(true);
    setShowMessages(false);
    setShowNotifications(false);
    setSelectedProfile(null);
    if (onVideoClick) onVideoClick();
  };

  const handleHomeClick = () => {
    setShowVideos(false);
    setShowMessages(false);
    setShowNotifications(false);
    setSelectedProfile(null);
    if (onHomeClick) onHomeClick();
  };

  const handleMessageClick = () => {
    setShowVideos(false);
    setShowMessages(true);
    setShowNotifications(false);
    setSelectedProfile(null);
  };

  const handleNotificationClick = () => {
    setShowVideos(false);
    setShowMessages(false);
    setShowNotifications(true); // Show notifications and hide others
    setSelectedProfile(null);
  };

  const handleProfileClick = (profile) => {
    setShowMessages(false);
    setSelectedProfile(profile);
    setShowNotifications(false);
  };

 
  const posts = [
    { userAvatar: user1, username: 'FarmerJohn', image: post1, likes: 120, caption: 'Planting new crops 🌾🌻' },
    { userAvatar: user2, username: 'AgriExpert', image: post2, likes: 200, caption: 'Finally Harvesting time comes. 🌱' },
    { userAvatar: user3, username: 'FarmerJohn', image: post3, likes: 120, caption: 'Planting new crops 🌾🌻' },
    { userAvatar: user4, username: 'FarmerJohn', image: post4, likes: 120, caption: 'Planting new crops 🌾🌻' },
  ];

  const videoBlogs = [
    { userAvatar: user1, username: 'FarmingGuru', src: video1, title: 'Farming Techniques', description: 'Learn the best farming techniques in this video.' },
    { userAvatar: user1, username: 'FarmingGuru', src: video2, title: 'Farming Techniques', description: 'Learn the best farming techniques in this video.' },
    { userAvatar: user3, username: 'HarvestMaster', src: video3, title: 'Harvesting Guide', description: 'A comprehensive guide on how to harvest efficiently.' }
  ];

  return (
    <div className="homepage">
      <Header 
        onVideoClick={handleVideoClick} 
        onHomeClick={handleHomeClick} 
        onMessageClick={handleMessageClick}
        onNotificationClick={handleNotificationClick} // Pass handleNotificationClick function to Header
      />
      <div className="homepage__content">
        <Sidebar />
        <div className="homepage__feed">
          {showNotifications && (
            <NotificationComponent /> // Show notifications if showNotifications is true
          )}
          {!showNotifications && selectedProfile ? (
            <MessageComponent profile={selectedProfile} /> // Show MessageComponent if a profile is selected
          ) : !showNotifications && showMessages ? (
            <MessageList onProfileClick={handleProfileClick} /> // Show MessageList if messages should be displayed
          ) : !showNotifications && showVideos ? (
            videoBlogs.map((video, index) => <VideoBlog key={index} video={video} />) // Show video blogs
          ) : !showNotifications && (
            posts.map((post, index) => <Post key={index} post={post} />) // Show posts by default if no other section is active
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
