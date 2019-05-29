/**
 * Reducer actions
 */
import {
  GET_PRAVACHANS_PROGRESS,
  GET_PRAVACHANS_SUCCESS,
  GET_PRAVACHANS_FAILURE
} from '../actions/Pravachans.Action';

/**
 * Get pravachans
 */
export const getPravachans = () => dispatch => {
  //   try {
  //     let pravachans = [
  //       { name: 'Sun-05-05-2019-Swamiji_Pravachan', size: '3.91MB' },
  //       { name: 'Sun-28-04-2019-Swamiji_Pravachan', size: '4.31MB' },
  //       { name: 'Sun-07-04-2019-Swamiji_Pravachan', size: '4.13MB' },
  //       { name: 'Sun-24-03-2019-Swamiji_Pravachan', size: '4.11MB' }
  //     ];

  //     // dispatch({ type: GET_PRAVACHANS_PROGRESS });

  //     dispatch({ type: GET_PRAVACHANS_SUCCESS, pravachans: pravachans });
  //   } catch (exception) {
  //     dispatch({ type: GET_PRAVACHANS_FAILURE, message: exception.message });
  //   }

  fetch('http://localhost:8080/api/pravachans')
    .then(res => res.json())
    .then(
      result => {
        dispatch({ type: GET_PRAVACHANS_SUCCESS, pravachans: result.data });
      },
      error => {
        dispatch({ type: GET_PRAVACHANS_FAILURE, message: null });
      }
    );
};

/**
 * Reducer initial states
 */
let initialState = {
  pravachans: [],
  isFetching: false,
  message: ''
};

/**
 * Reducer dispatcher
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRAVACHANS_PROGRESS:
      window.location.href = action.redirectTo;
      return { ...state, isFetching: true };

    case GET_PRAVACHANS_SUCCESS:
      return { ...state, isFetching: false, pravachans: action.pravachans };

    case GET_PRAVACHANS_FAILURE:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};
