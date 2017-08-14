// Import a saga helper
import {
    takeLatest
} from 'redux-saga';
// Saga effects are usesul to interact with the saga middleware
import {
    put,
    call
} from 'redux-saga/effects';
// As predicted a saga will take care of GET_PRODUCTS actions
import {
  GET_PRODUCTS
} from '../constants/products';
// either one is yielded once the fetch is done
import { getProductsSuccess, getProductsFailure } from '../actions/products';

// We moved the fetch from ProductsContainer
const fetchProducts = () => {
  return fetch('http://tranquil-wildwood-73157.herokuapp.com/products', {
    // Set the header content-type to application/json
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => response.json())
};

// yield call to fetchProducts is in a try catch to control the flow even when the promise rejects
function* getProducts () {
  try {
    const products = yield call(fetchProducts);
    yield put(getProductsSuccess(products));
  } catch (err) {
    yield put(getProductsFailure());
  }
}

// The watcher saga waits for dispatched  GET_PRODUCTS actions
function* watchGetProducts () {
  yield takeLatest( GET_PRODUCTS, getProducts);
}

// Export the watcher to be run in parallel in sagas/index.js
export { 
    watchGetProducts
};
