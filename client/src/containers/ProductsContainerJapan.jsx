import React, { Component } from 'react';
import { Modal, ProductsListManager } from '../components';

export default class ProductsContainer extends Component {
  constructor (props) {
    super(props);
    // The initial state
    this.state = { products: [], selectedProduct: {}, searchBar: '' };
    // Bind the functions to this (context) 
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.setSearchBar = this.setSearchBar.bind(this);
    this.getProductsItaly = this.setSearchBar.bind(this);
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
    fetch('http://tranquil-wildwood-73157.herokuapp.com/products/Japan', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(response => response.json()) // The json response to object literal
    .then(data => this.setState({ products: data }));
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
