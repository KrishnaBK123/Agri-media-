import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Post.css';

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    { username: post.username, text: 'Great post!' },
    { username: post.username, text: 'Nice work!' },
    { username: post.username, text: 'Awesome!' }
  ]);
  const [saved, setSaved] = useState(false);

  const handleLike = () => setLikes(likes + 1);
  const toggleComments = () => setShowComments(!showComments);
  const handleCommentChange = (e) => setNewComment(e.target.value);
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([{ username: 'You', text: newComment }, ...comments]);
      setNewComment('');
    }
  };
  const handleSave = () => setSaved(true);

  return (
    <div className="post">
      <div className="post__header">
        <img src={post.userAvatar} alt={`${post.username}'s avatar`} className="post__avatar" />
        <h3>{post.username}</h3>
      </div>
      <img src={post.image} alt="Post content" className="post__image" />
      <div className="post__footer">
        <div className="post__actions">
          <FontAwesomeIcon icon={faHeart} className="icon" onClick={handleLike} />
          <FontAwesomeIcon icon={faComment} className="icon" onClick={toggleComments} />
          <FontAwesomeIcon icon={faShare} className="icon" />
          <FontAwesomeIcon icon={faBookmark} className="icon" onClick={handleSave} />
        </div>
        <p>{likes} likes</p>
        <p>{post.caption}</p>

        {saved && <p className="post__saved">Post saved!</p>}

        {comments.slice(0, 3).map((comment, index) => (
          <p key={index} className="post__comment"><strong>{comment.username}:</strong> {comment.text}</p>
        ))}

        {showComments && (
          <div className="post__comments">
            {comments.map((comment, index) => (
              <p key={index}><strong>{comment.username}:</strong> {comment.text}</p>
            ))}
            <form onSubmit={handleCommentSubmit}>
              <input
                type="text"
                value={newComment}
                onChange={handleCommentChange}
                placeholder="Add a comment..."
              />
              <button type="submit">Post</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
