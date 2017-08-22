import { getProducts, getProductsSuccess, getProductsFailure } from '../actions/products';

// We moved the fetch from ProductsContainer
export function fetchProducts () {
  return (dispatch) =>{
  dispatch(getProducts());
  fetch('http://tranquil-wildwood-73157.herokuapp.com/products', {
    // Set the header content-type to application/json
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => response.json())
  .then(
        data => dispatch(getProductsSuccess(data)),
        err => dispatch(getProductsFailure())
        )
    };

}
