// src/components/ProfilePage.js
import React, { useState } from 'react';
import './ProfilePage.css'; // Import CSS for styling

// Import local images for posts and profile picture
import profile from '../images/user1.jpg'; // Profile image
import sunriseImage from '../images/post5.jpg'; // Post image
import fieldsImage from '../images/background 1.jpg'; // Post image
import cropsImage from '../images/post3.jpg'; // Post image

const ProfilePage = ({ user }) => {
  // Provide default values in case the `user` is undefined
  const defaultUser = {
    profilePic: profile, // Default profile picture
    username: 'Ravi', // Default username
    bio: 'Passionate about farming and nature.', // Default bio
    location: 'Earth', // Default location
    website: 'https://www.farming.com', // Default website (you can modify as needed)
    posts: 3, // Sample number of posts
    followers: 100, // Sample number of followers
    following: 50, // Sample number of following
    postsData: [ // Sample post data with local image imports
      {
        id: 1,
        image: sunriseImage,
        caption: 'A beautiful sunrise over the hills.',
      },
      {
        id: 2,
        image: fieldsImage,
        caption: 'A day in the fields.',
      },
      {
        id: 3,
        image: cropsImage,
        caption: 'Freshly harvested crops.',
      },
    ],
  };

  const currentUser = user || defaultUser; // Use defaultUser if user is undefined

  // State for handling modal visibility
  const [selectedPost, setSelectedPost] = useState(null);

  // Function to handle post click
  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-image">
          {/* Set profile picture here */}
          <img src={currentUser.profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="profile-info">
          <h2 className="username">{currentUser.username}</h2>
          <p className="bio">{currentUser.bio}</p>
          <div className="stats">
            <div className="stat">
              <strong>{currentUser.posts}</strong> Posts
            </div>
            <div className="stat">
              <strong>{currentUser.followers}</strong> Followers
            </div>
            <div className="stat">
              <strong>{currentUser.following}</strong> Following
            </div>
          </div>
        </div>
      </div>
      <div className="profile-posts">
        <h3>Posts</h3>
        <div className="posts">
          {currentUser.postsData.length === 0 ? (
            <p>No posts available</p>
          ) : (
            currentUser.postsData.map((post) => (
              <div
                key={post.id}
                className="post-card"
                onClick={() => handlePostClick(post)}
              >
                <img src={post.image} alt="Post" className="post-image" />
                <p className="post-caption">{post.caption}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal for displaying selected post */}
      {selectedPost && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedPost.image} alt="Selected Post" className="modal-image" />
            <p className="modal-caption">{selectedPost.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
