import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import { Modal, ProductsListManager } from '../components';
import * as productsActionCreators from '../actions/products';

class ProductsContainer extends Component {
  constructor (props) {
    super(props);
    // Bind the functions to this (context)
    this.toggleModal = this.toggleModal.bind(this);
    this.setSearchBar = this.setSearchBar.bind(this);
  }

  // Once the component mounted it fetches the data from the server
  componentDidMount () {
    this.getProducts();
  }

  toggleModal (index) {
    this.props.productsActions.showSelectedProduct(this.props.products[index]);
    // Since we included bootstrap we can show our modal through its syntax
    $('#product-modal').modal();
  }

  getProducts () {
    this.props.productsActions.getProducts();
  }

  setSearchBar (event) {
    // Super still filters super mario thanks to
    this.props.productsActions.setSearchBar(event.target.value.toLowerCase());
     }

  render () {
    const { products, searchBar,selectedProduct } = this.props;
    console.log(products);
    return (
      <div>
        <Modal product={selectedProduct} />
        <ProductsListManager
          products={products}
          searchBar={searchBar}
          setSearchBar={this.setSearchBar}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

// We can read values from the state thanks to mapStateToProps
function mapStateToProps (state) {
  return { // We get all the products to list in the page
    products: state.getIn(['products', 'list'], Immutable.List()).toJS(),
    searchBar: state.getIn(['products', 'searchBar'], ''),
    selectedProduct: state.getIn(['products', 'selectedProduct'], Immutable.List()).toJS()
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
