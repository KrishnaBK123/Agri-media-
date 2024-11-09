// src/components/UploadForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './UploadForm.css'; 

const UploadForm = () => {
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [type, setType] = useState('post'); // 'post' or 'video'

  const handleContentChange = (e) => setContent(e.target.value);
  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleTypeChange = (e) => setType(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('content', content);
    formData.append('type', type);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await axios.post('/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload success:', response.data);
      // Optionally reset form fields
      setContent('');
      setFile(null);
    } catch (error) {
      console.error('Error uploading:', error);
    }
  };

  return (
    <div className="upload-form">
      <h2>Upload {type === 'post' ? 'Post' : 'Video Blog'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Type:
            <select value={type} onChange={handleTypeChange}>
              <option value="post">Post</option>
              <option value="video">Video</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Content:
            <textarea
              value={content}
              onChange={handleContentChange}
              placeholder={`Write your ${type === 'post' ? 'post' : 'video blog'} content here`}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Upload {type === 'post' ? 'Image' : 'Video'}:
            <input type="file" accept={type === 'post' ? 'image/*' : 'video/*'} onChange={handleFileChange} />
          </label>
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadForm;
