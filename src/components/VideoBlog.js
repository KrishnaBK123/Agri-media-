import React from 'react';
import './VideoBlogs.css'; // Import CSS for styling

const VideoBlog = ({ video }) => {
  return (
    <div className="video-blog">
      <div className="video-blog__header">
        <img src={video.userAvatar} alt="User Avatar" className="video-blog__user-avatar" />
        <div className="video-blog__user-info">
          <h3 className="video-blog__username">{video.username}</h3>
        </div>
      </div>
      <video className="video-blog__video" controls>
        <source src={video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h4 className="video-blog__title">{video.title}</h4>
      <p className="video-blog__description">{video.description}</p>
    </div>
  );
};

export default VideoBlog;
