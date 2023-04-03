import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  Button,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

import { BsSearch } from 'react-icons/bs';

export function Searchbar({ onSubmit }) {
  const [imgRequestName, setImgRequestName] = useState('');

  const handleChange = e => {
    setImgRequestName(e.target.value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (imgRequestName.length > 0) {
      onSubmit(imgRequestName.toLowerCase());
      // setImgRequestName('');
    }
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <Button type="submit">
          <ButtonLabel>
            <BsSearch
              style={{
                height: '40px',
                padding: 0,
                color: 'black',
                width: '40px',
              }}
            />
          </ButtonLabel>
        </Button>

        <Input
          value={imgRequestName}
          onChange={handleChange}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
