import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ImageUpload from './components/ImageUpload';
import ImageList from './components/ImageList';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/upload" element={<ImageUpload />} />
          <Route exact path="/images" element={<ImageList/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
