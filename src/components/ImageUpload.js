import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import{v4} from "uuid";
import axios from 'axios';
import './assets/styles/ImageUpload.css';




function ImageUpload() {
  const navigate = useNavigate()
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);

  const [token, setToken] = useState(null)


  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('token')))
  }, [navigate, token])

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    setImageName(e.target.files[0].name);
  };

  const handleUpload = async() => {
    if (image) {

      const imageRef = ref(storage, `images/${v4() + image.name}`)

      await uploadBytes(imageRef, image);

      const res = await getDownloadURL(imageRef);

      const data = {
        image_name:imageName,
        image_url:res
      }

      await axios.post('http://127.0.0.1:5000/api/upload_image', data, {headers:{Authorization:token}})
      if(token)
        navigate('/images')
    } 
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default ImageUpload;
