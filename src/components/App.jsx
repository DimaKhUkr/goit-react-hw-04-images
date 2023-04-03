import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import React, { useState } from 'react';
import { AppStyleDetka } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const [imgRequestName, setImgRequestName] = useState('');

  const DataHandleSubmit = imgRequestName => setImgRequestName(imgRequestName);

  return (
    <AppStyleDetka>
      <Searchbar onSubmit={DataHandleSubmit} />
      <ImageGallery imgRequestName={imgRequestName}></ImageGallery>
      <ToastContainer />
    </AppStyleDetka>
  );
}
