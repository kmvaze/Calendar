/**
 * Reducer actions
 */
import * as actions from '../actions/Pravachans.Action';

/**
 * Reducer initial states
 */
let initialState = {
  pravachans: [],
  isFetching: false,
  message: '',
  error: null
};

/**
 * Reducer dispatcher
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRAVACHANS:
        fetch('http://localhost:8080/api/pravachans')
        .then(res => {
          return {
            ...state,
            pravachans: res.json() 
          }
        })
        .catch(err => {
          return {
            ...state,
            error: err
          }    
        })    
    case actions.GET_PRAVACHANS_PROGRESS:
      window.location.href = action.redirectTo;
      return { ...state, isFetching: true };
    case actions.GET_PRAVACHANS_SUCCESS:
      return { ...state, isFetching: false, pravachans: action.pravachans };

    case actions.GET_PRAVACHANS_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};
