import Immutable from 'immutable';
// Here the constants file comes handy
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  SET_SEARCH_BAR,
  SHOW_SELECTED_PRODUCT
} from '../constants/products';

// The initial state is just an empty Map
const initialState = Immutable.Map();

// That's a very standard reducer function to return a new state given a dispatched action
export default (state = initialState, action) => {
  switch (action.type) {
  // GET_PRODUCTS_SUCCESS case return a new state with the fetched products in the state
    case GET_PRODUCTS_SUCCESS: {
      return state.merge({ list: action.products });
    }

    case SET_SEARCH_BAR: {
     return state.merge({ searchBar: action.keyword });
   }

   case SHOW_SELECTED_PRODUCT: {
    return state.merge({ selectedProduct: action.product });
  }

  // In case of failure it simplies returned a new empty state
    case  GET_PRODUCTS_FAILURE: {
      return state.clear();
    }
    default:
      return state;
  }
}
