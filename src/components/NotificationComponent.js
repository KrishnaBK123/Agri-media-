// src/components/NotificationPage.js
import React from 'react';
import './NotificationComponent.css'; // Import your CSS
import profilePic1 from '../images/user1.jpg'; // Example profile image
import profilePic2 from '../images/user2.jpeg'; // Example profile image

function NotificationPage() {
  const notifications = [
    {
      id: 1,
      username: 'kushal',
      profilePic: profilePic1,
      action: 'liked your photo',
      time: '2h',
    },
    {
      id: 2,
      username: 'Ravi',
      profilePic: profilePic2,
      action: 'started following you',
      time: '4h',
    },
    {
      id: 3,
      username: 'Rahul',
      profilePic: profilePic1,
      action: 'commented on your post',
      time: '1d',
    },
    {
      id: 4,
      username: 'karthik',
      profilePic: profilePic1,
      action: 'liked your photo',
      time: '2h',
    },
    {
      id: 5,
      username: 'Ram',
      profilePic: profilePic2,
      action: 'started following you',
      time: '4h',
    },
    {
      id: 6,
      username: 'krishna',
      profilePic: profilePic1,
      action: 'commented on your post',
      time: '1d',
    },
    // Add more notifications as needed
  ];

  return (
    <div className="notification-page">
      <div className="notification-header">
        <h2>Notifications</h2>
      </div>

      <div className="notification-list">
        {notifications.map((notification) => (
          <div className="notification-item" key={notification.id}>
            <img
              src={notification.profilePic}
              alt={`${notification.username} profile`}
              className="notification-profile-pic"
            />
            <div className="notification-info">
              <p>
                <span className="username">{notification.username}</span>{' '}
                {notification.action}
              </p>
              <span className="notification-time">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationPage;
