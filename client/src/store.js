// We import Redux and Redux-thunkdependencies
import {
  createStore,
  applyMiddleware
} from 'redux';
// this comes from our created files
import thunk from 'redux-thunk';
import reducer from './reducers';
import {fetchProducts} from './thunks';
import { getProductsSuccess, getProductsFailure } from './actions/products';

const configureStore = () => {

  // The store is created with a reducer parameter and the thunk middleware
  const store = createStore(
    reducer,
    applyMiddleware(thunk)
  );
  store.dispatch(fetchProducts());

  return store; // Return the state
}
export default configureStore;
