import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Box,
  Container,
  Section,
  Media,
  Image,
  Content,
  Level,
  Heading,
  Form,
  Icon,
  Navbar
} from 'react-bulma-components/full';

function SearchInput(props) {
  return (
    <Box>
      <div className="component-search-input">
        <Form.Control iconRight>
          <Form.Input
            type="text"
            placeholder="Search"
            value={props.value}
            onChange={props.searchTextChange}
          />
          <Icon align="right" icon="bars" />
        </Form.Control>
      </div>
    </Box>
  );
}

SearchInput.propTypes = {
  searchTextChange: PropTypes.func
};

export default SearchInput;
