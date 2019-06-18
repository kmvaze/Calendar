import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';

class App extends Component {
    state = {
      isLoaded: true,
      pravachans: [],
      searchText: '',
      error: null
    };

  componentDidMount() {
    fetch('http://localhost:8080/api/pravachans')
      .then(res => {
        this.setState({
          isLoaded: true,
          pravachans: res.json.data
        });
      }).catch(err => {
        this.setState({
          isLoaded: false,
          error: err
        });
      })
  }

  searchTextChange = (event) => {
    console.log('In search TextChange ' + event.target.value);
    this.setState({
      searchText: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default App;
