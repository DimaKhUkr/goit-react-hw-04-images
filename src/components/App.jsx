import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import React, { Component } from 'react';
import { AppStyleDetka } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    imgRequestName: '',
  };

  DataHandleSubmit = imgRequestName => this.setState({ imgRequestName });

  render() {
    return (
      <AppStyleDetka>
        <Searchbar onSubmit={this.DataHandleSubmit} />
        <ImageGallery imgRequestName={this.state.imgRequestName}></ImageGallery>
        <ToastContainer />
      </AppStyleDetka>
    );
  }
}
