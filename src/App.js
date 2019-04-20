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
import './App.css';

import AppNavBar from './components/AppNavBar';
import PravachanResults from './components/PravachanResults';
import SearchInput from './components/SearchInput';

import filterPravachans from './util/filterPravachans';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      pravachans: [],
      searchText: ''
    };
    this.searchTextChange = this.searchTextChange.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/pravachans')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            pravachans: result.data
          });
        },
        error => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      );
  }

  searchTextChange(event) {
    console.log('In search TextChange ' + event.target.value);
    this.setState({
      searchText: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <AppNavBar />
        <Section>
          <Container>
            <Heading size={3}>Swamiji Pravachans</Heading>
            <SearchInput
              searchTextChange={this.searchTextChange}
              value={this.state.searchText}
            />
            <PravachanResults
              pravachans={filterPravachans(
                this.state.pravachans,
                this.state.searchText,
                20
              )}
            />
          </Container>
        </Section>
      </div>
    );
  }
}

export default App;
