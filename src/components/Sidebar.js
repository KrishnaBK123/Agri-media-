import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import axios from 'axios';

// Import images
import user1 from '../images/user1.jpg';
import user2 from '../images/user2.jpeg';
import user3 from '../images/user3.jpeg';
import user4 from '../images/user4.webp';
import user5 from '../images/user5.jpeg';
import post1 from '../images/post1.jpg';
import post2 from '../images/post2.jpg';
import post3 from '../images/post3.jpg';
import post4 from '../images/post4.jpg';
import post5 from '../images/post5.jpg';

// Sample user data for trending posts with imported images
const trendingPostsData = [
  { username: 'FarmerJohn', profileImage: user1, postImage: post1, caption: 'Fertilizing the paddy crop. 🌱' },
  { username: 'AgriExpert', profileImage: user2, postImage: post2, caption: 'Finally Harvesting time comes. 🌱🧑‍🌾' },
  { username: 'CropMaster', profileImage: user3, postImage: post3, caption: 'Time of picking Apples 🌾🌻' },
  { username: 'SoilSage', profileImage: user4, postImage: post4, caption: 'Checking soil quality today!' },
  { username: 'HarvestHero', profileImage: user5, postImage: post5, caption: 'Harvesting season is here!' }
];

const Sidebar = () => {
  const [weather, setWeather] = useState({
    temperature: '',
    humidity: '', 
    rainfall: '',
    description: '',
    city: '',
  });

  const [trendingPosts] = useState(trendingPostsData);
  const [showTrendingPosts, setShowTrendingPosts] = useState(true); // Toggle state for trending posts

  const API_KEY = '9d30b68ced6c11846e34469db629ca6a'; // Replace with your actual API key
  const CITY_NAME = 'Bengaluru'; // Replace with your city or pass dynamically

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`;
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        setWeather({
          temperature: data.main.temp,
          humidity: data.main.humidity,
          rainfall: data.rain ? data.rain['1h'] || '0' : '0',
          description: data.weather[0].description,
          city: data.name,
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [API_KEY, CITY_NAME]);

  return (
    <aside className="sidebar">
      {/* Weather Section */}
      <div className="sidebar__section sidebar__weather">
        <h2>Weather in {weather.city}</h2>
        <ul className="sidebar__weather-list">
          <li className="sidebar__weather-item">
            <strong>Temperature:</strong> {weather.temperature}°C
          </li>
          <li className="sidebar__weather-item">
            <strong>Humidity:</strong> {weather.humidity}%
          </li>
          <li className="sidebar__weather-item">
            <strong>Rainfall:</strong> {weather.rainfall} mm
          </li>
          <li className="sidebar__weather-item">
            <strong>Description:</strong> {weather.description}
          </li>
        </ul>
      </div>

      {/* Toggle Button for Trending Posts on smaller screens */}
      <button
        className="sidebar__toggle-button"
        onClick={() => setShowTrendingPosts(!showTrendingPosts)}
      >
        {showTrendingPosts ? 'Hide Trending Posts' : 'Show Trending Posts'}
      </button>

      {/* Trending Posts Section */}
      <div className={`sidebar__section sidebar__trending-posts ${!showTrendingPosts ? 'hidden' : ''}`}>
        <h2>Trending Posts</h2>
        <div className="sidebar__post-container">
          {trendingPosts.map((post, index) => (
            <div key={index} className="sidebar__post">
              <div className="sidebar__post-content">
                <img
                  src={post.profileImage}
                  alt={`${post.username}'s profile`}
                  className="sidebar__post-avatar"
                />
                <span className="sidebar__post-username">{post.username}</span>
                <img
                  src={post.postImage}
                  alt="Post"
                  className="sidebar__post-image"
                />
                <p className="sidebar__post-caption">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
