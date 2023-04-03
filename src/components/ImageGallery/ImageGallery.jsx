import { Gallery, LoaderBtn } from './ImageGallery.styled';
import React, { useState, useEffect } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { fetchImg } from 'Fetch/fetch';

export function ImageGallery({ imgRequestName }) {
  const [imgArr, setImgArr] = useState(null);
  const [modalImg, setModalImg] = useState(null);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (imgRequestName.length < 1) {
      return;
    }
    setLoader(true);
    setImgArr(null);
    getImgSet();
  }, [imgRequestName]);

  useEffect(() => {
    if (modalImg) {
      setShowModal(true);
    }
  }, [modalImg]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    setLoader(true);
    getImgSet();
  }, [page]);

  async function getImgSet() {
    const filtered = await fetchImg(imgRequestName, page);
    setLoader(false);
    if (imgArr) {
      console.log('я вызвался');
      return setImgArr(prevState => {
        return [...prevState, ...filtered];
      });
    }
    return setImgArr(filtered);
  }

  const closeModal = () => {
    setShowModal(false);
    setModalImg(null);
  };

  const onImgClick = e => {
    setModalImg(e.currentTarget.alt);
  };

  const onLoaderButton = () => {
    setPage(page + 1);
  };

  const isButtonVisible = () => {
    if (imgArr?.length > 0 && !(imgArr?.length < 12)) {
      return true;
    }
  };

  return (
    <>
      <Gallery>
        {showModal && <Modal closeModal={closeModal} src={modalImg} />}
        {imgArr && <ImageGalleryItem onImgClick={onImgClick} imgArr={imgArr} />}
      </Gallery>
      {loader && <Loader />}
      {isButtonVisible() && (
        <LoaderBtn onClick={onLoaderButton} type="button">
          Load more
        </LoaderBtn>
      )}
    </>
  );
}

ImageGallery.propTypes = { imgRequestName: PropTypes.string.isRequired };
