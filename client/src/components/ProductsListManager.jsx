import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Product from './Product';

export default class ProductsListManager extends PureComponent {
  render () {
    const { products, searchBar, setSearchBar, toggleModal, deleteProduct} = this.props;
    return (
      <div className="container scrollable">
        <div className="row text-left">
          <h2>Введите название товара : </h2>
        </div>
        <div className="row">
          <input type="search" placeholder="Искать название товара" className="form-control search-bar" onKeyUp={setSearchBar} />            
        </div>
        <div className="row">
        {
    // A Product is only shown if its name contains the string from the searchBar
          products.filter(product => product.name.toLowerCase().includes(searchBar))            
            .map((product, i) => {
              return (
                <Product  {...product}
                  key={product._id}                 
                  i={i}                 
                  toggleModal={toggleModal}
                  deleteProduct={deleteProduct}
                />
              );
            })
        }
        </div>
        <hr />
      </div>

    );
  }
}
