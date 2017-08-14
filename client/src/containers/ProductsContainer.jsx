import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import { Modal, ProductsListManager } from '../components';
import * as productsActionCreators from '../actions/products';

export default class ProductsContainer extends Component {
  constructor (props) {
    super(props);
    // The initial state
    this.state = { selectedProduct: {}, searchBar: '' };
    // Bind the functions to this (context) 
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.setSearchBar = this.setSearchBar.bind(this);    
  }

  // Once the component mounted it fetches the data from the server
  componentDidMount () {
    this.getProducts();
  }

  toggleModal (index) {
    this.setState({ selectedProduct: this.state.products[index] });
    // Since we included bootstrap we can show our modal through its syntax
    $('#product-modal').modal();
  }

  getProducts () {
    this.props.productsActions.getProducts();
  }

 deleteProduct (id) {
    fetch(`http://tranquil-wildwood-73157.herokuapp.com/products/${id}`, {      
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(response => {
      // The product is also removed from the state thanks to the filter function
      this.setState({ products: this.state.products.filter(product => product._id !== id) }); 
      console.log(response.message);
    });
  }

  setSearchBar (event) { 
    // Super still filters super mario thanks to 
    this.setState({ searchBar: event.target.value.toLowerCase()});   
     }

  render () {
    const { products, selectedProduct, searchBar } = this.state;
    const { products  } = this.props;
    console.log(products);
    return (
      <div>
        <Modal product={selectedProduct} />
        <ProductsListManager
          products={products}
          searchBar={searchBar}
          setSearchBar={this.setSearchBar}
          toggleModal={this.toggleModal} 
          deleteProduct={this.deleteProduct}                                          
        />
      </div>
    );
  }
}

// We can read values from the state thanks to mapStateToProps
function mapStateToProps (state) {
  return { // We get all the products to list in the page
    products: state.getIn(['products', 'list'], Immutable.List()).toJS()
  }
}
// We can dispatch actions to the reducer and sagas
function mapDispatchToProps (dispatch) {
  return {
    productsActions: bindActionCreators(productsActionCreators, dispatch)
  };
}
// Finally we export the connected ProductsContainer
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);