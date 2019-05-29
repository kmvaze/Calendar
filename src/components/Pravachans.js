import React, { Component } from 'react';
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
// import './App.css';

import PravachanResults from './PravachanResults';
import SearchInput from './SearchInput';

import filterPravachans from '../util/filterPravachans';

class Pravachans extends React.Component {
  componentWillMount = () => {
    this.props.getPravachans();
  };

  render() {
    const { pravachans } = this.props.pravachans;

    return (
      <Container>
        <Heading size={3}>Swamiji Pravachans</Heading>
        {/* <SearchInput
          searchTextChange={this.searchTextChange}
          value={this.state.searchText}
        /> */}
        <PravachanResults
          pravachans={filterPravachans(
            pravachans,
            '',
            // this.state.searchText,
            20
          )}
        />
      </Container>
    );
  }
}

export default Pravachans;
