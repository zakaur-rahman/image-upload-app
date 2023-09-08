import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './assets/styles/ImageList.css';

function ImageList() {
  const [images, setImages] = useState([]);
  const [token, setToken] = useState(null)


  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('token')))
  }, [token])

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get('http://localhost:5000/api/images', {headers:{Authorization:token}});
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchImages();
  }, [token]);

  return (
    <div>
      <h2>Recently Uploaded URLs</h2>
      <ul>
        {images.map((item) => (
          <div> 
            <p>{item.image_name}</p>
            <img src={item.image_url} target="_blank" rel="noopener noreferrer" alt={item.image_name} height="400px" width="350px"/>
          </div> 
        ))}
      </ul>
    </div>
  );
}

export default ImageList;
