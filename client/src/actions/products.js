// We import the constants from a /constants/products
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE, 
} from '../constants/products';

// GET_PRODUCTS function will be dispatched within ProductsContainer
function getProducts () {
  return {
    type: GET_PRODUCTS
  };
}

/* After fetching form the server this action is intercepted by the reducer and the products added to the state */
function getProductsSuccess (products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products
  };
}

// A failure action is sent in case of server errors
function getProductsFailure () {
  return {
    type: GET_PRODUCTS_FAILURE
  };
}

// we export all the function in a single export command
export {
  getProducts,
  getProductsSuccess,
  getProductsFailure
   // Export the new action-creator
};
