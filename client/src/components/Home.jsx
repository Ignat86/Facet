import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Home extends PureComponent { 
  render () {
    const {  setSearchBar } = this.props;
    return (
        <div className="wrap-site">      
          <div className="main_header">                       
            <div className="header_right">
              <h2><Link to="/contact">Обратная связь</Link></h2>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="logo_products">
            <div className="container">
              <div className="logo_products_left">
                <h1><Link to="/"><span>Simple Faceted</span> Store</Link></h1>
              </div>      
              <div className="logo_products_left_contacts">
                <ul className="phone_email">
                  <li><i className="fa fa-phone" aria-hidden="true"></i>(+375) 555 5555</li>
                  <li><i className="fa fa-envelope-o" aria-hidden="true"></i><Link to="/contact">example@mail.ru</Link></li>
                </ul>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>       
           {this.props.children}     
          <div className="footer">   
          <p>© 2017 Simple Faceted Store All rights reserved | Design by ------------ </p>    
          </div>
        </div>
    );
  } 
}      
 