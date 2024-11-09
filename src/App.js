import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MessageComponent from './components/MessageComponent';
import ProfilePage from './components/ProfilePage'; // Import the ProfilePage component
import NotificationComponent from './components/NotificationComponent'; // Import NotificationComponent
import profilePic from './images/profilePic.jpg'; // Import default profile picture
import post1 from './images/post1.jpg'; // Import post images
import post2 from './images/post2.jpg'; // Import post images
import post3 from './images/post3.jpg'; // Import post images

function App() {
  const [showNotifications, setShowNotifications] = useState(false); // State to manage notifications
  const user = {
    profilePic: profilePic,
    username: 'JohnDoe',
    bio: 'This is my bio.',
    posts: 10,
    followers: 100,
    following: 50,
    postsData: [
      { id: 1, image: post1, caption: 'Post 1 caption' },
      { id: 2, image: post2, caption: 'Post 2 caption' },
      { id: 3, image: post3, caption: 'Post 3 caption' },
    ],
    videosData: [], // Add videos data if available
  };

  const handleVideoClick = () => {
    // Implement what happens when the video button is clicked
  };

  const handleHomeClick = () => {
    // Implement what happens when the home button is clicked
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications); // Toggle the notifications
  };

  const profiles = [
    { username: 'User1', profilePic: 'path/to/profilePic1.jpg' },
    { username: 'User2', profilePic: 'path/to/profilePic2.jpg' },
    // Add more profiles as needed
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              user={user}
              onVideoClick={handleVideoClick}
              onHomeClick={handleHomeClick}
              onNotificationClick={handleNotificationClick} // Pass notification click handler
              showNotifications={showNotifications} // Pass notification state to HomePage
              profiles={profiles}
            />
          }
        />
        <Route path="/message" element={<MessageComponent />} />
        <Route path="/profile" element={<ProfilePage />} /> {/* Define the profile route */}
        <Route
          path="/notifications"
          element={<NotificationComponent />}
        />
        {/* Additional routes can be added here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
