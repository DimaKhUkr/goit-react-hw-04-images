import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  Button,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {
    imgRequestName: '',
  };

  handleChange = e => {
    this.setState({ imgRequestName: e.target.value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.imgRequestName.length > 0) {
      this.props.onSubmit(this.state.imgRequestName.toLowerCase());
      this.reset();
    }
  };

  reset = () => this.setState({ imgRequestName: '' });

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
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
            value={this.state.imgRequestName}
            onChange={this.handleChange}
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
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
