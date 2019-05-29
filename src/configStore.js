import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { history } from './helpers/history';

// Middlewares
import pravachansReducer from './reducers/Pravachans.Reducer';

// Build the middleware for intercepting and dispatching navigation actions
const routerMiddlewareResult = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return compose(applyMiddleware(thunkMiddleware, routerMiddlewareResult));
  } else {
    // Enable additional logging in non-production environments.
    return compose(
      applyMiddleware(thunkMiddleware, routerMiddlewareResult, createLogger())
    );
  }
};

// Combine reducers
export default function configureStore() {
  return createStore(
    combineReducers({
      pravachans: pravachansReducer
    }),
    getMiddleware()
  );
}
