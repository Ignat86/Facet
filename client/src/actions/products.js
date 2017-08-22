// We import the constants from a /constants/products
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  SET_SEARCH_BAR,
  SHOW_SELECTED_PRODUCT
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

function setSearchBar (keyword) {
  return {
    type: SET_SEARCH_BAR,
    keyword
  };
}

function showSelectedProduct (product) {
  return {
    type:  SHOW_SELECTED_PRODUCT,
    product
  };
}

// we export all the function in a single export command
export {
  getProducts,
  getProductsSuccess,
  getProductsFailure,
  setSearchBar,
  showSelectedProduct
   // Export the new action-creator
};
