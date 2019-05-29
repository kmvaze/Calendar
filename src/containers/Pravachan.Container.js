import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../reducers/Pravachans.Reducer';
import Pravachans from '../components/Pravachans';

/**Map reducer states to component props */
const mapStateToProps = state => {
  return {
    pravachans: state.pravachans
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(Pravachans)
);
