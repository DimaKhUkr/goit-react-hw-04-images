import PropTypes from 'prop-types';

import {
  ImageGalleryItemList,
  ImageGalleryItemImg,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imgArr, onImgClick }) => {
  return imgArr.map(({ id, webformatURL, largeImageURL }) => {
    return (
      <ImageGalleryItemList key={id}>
        <ImageGalleryItemImg
          onClick={onImgClick}
          src={webformatURL}
          alt={largeImageURL}
        />
      </ImageGalleryItemList>
    );
  });
};

ImageGalleryItem.propTypes = {
  onImgClick: PropTypes.func.isRequired,
  imgArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
