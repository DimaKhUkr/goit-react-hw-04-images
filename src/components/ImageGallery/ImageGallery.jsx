import { Gallery, LoaderBtn } from './ImageGallery.styled';
import React, { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { fetchImg } from 'components/Fetch/fetch';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    imgArr: null,
    modalImg: null,
    loader: false,
    page: 1,
    showModal: false,
  };
  //   componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imgRequestName !== this.props.imgRequestName) {
      this.setState({ loader: true });
      this.setState({ imgArr: null });
      this.getImgSet();
    }
    if (prevState.modalImg !== this.state.modalImg && this.state.modalImg) {
      this.setState({ showModal: true });
    }

    if (prevState.page !== this.state.page) {
      this.setState({ loader: true });
      this.getImgSet();
    }
  }

  async getImgSet() {
    const filtered = await fetchImg(this.props.imgRequestName, this.state.page);
    this.setState({ loader: false });
    if (this.state.imgArr) {
      return this.setState(prevState => {
        return { imgArr: [...prevState.imgArr, ...filtered] };
      });
    }
    return this.setState({ imgArr: filtered });
  }

  closeModal = () => {
    this.setState({ showModal: false });
    this.setState({ modalImg: null });
  };

  onImgClick = e => {
    this.setState({ modalImg: e.currentTarget.alt });
  };

  onLoaderButton = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  isButtonVisible = () => {
    if (this.state.imgArr?.length > 0 && !(this.state.imgArr?.length < 12)) {
      return true;
    }
  };

  render() {
    return (
      <>
        <Gallery>
          {this.state.showModal && (
            <Modal closeModal={this.closeModal} src={this.state.modalImg} />
          )}
          {this.state.imgArr && (
            <ImageGalleryItem
              onImgClick={this.onImgClick}
              imgArr={this.state.imgArr}
            />
          )}
        </Gallery>
        {this.state.loader && <Loader />}
        {this.isButtonVisible() && (
          <LoaderBtn onClick={this.onLoaderButton} type="button">
            Load more
          </LoaderBtn>
        )}
      </>
    );
  }
}
ImageGalleryItem.propTypes = { imgRequestName: PropTypes.string.isRequired };
