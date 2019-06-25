import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/Pravachans.Action';
import { Container, Heading } from 'react-bulma-components/full';
import PravachanResults from '../components/pravachans/PravachanResults';
import SearchInput from '../components/SearchInput';
import filterPravachans from '../util/filterPravachans';

class Pravachans extends Component {
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

/**Map reducer states to component props */
const mapStateToProps = state => {
  return {
    pravachans: state.pravachans
  };
};

/* Map reducer actions to component props */
const mapDispatchToProps = dispatch => {
  return {
    getPravachans: () => dispatch({type: actions.GET_PRAVACHANS})
  }
}

// Pass the mapStateToProps and mapDispatchToProps to connect redux state with this component
export default connect( mapStateToProps, mapDispatchToProps)(Pravachans)
