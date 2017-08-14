// We import the combineReducers function
import { combineReducers } from 'redux-immutable';
// Import our reducers function from here
import products from './products'; 

// combineReducers merges them all!
export default combineReducers({
  products
});
