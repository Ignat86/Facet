import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class HomeSearch extends PureComponent { 
  render () {    
    return (
        <div className="wrap-site">      
          <div className="main_header">   
            <div className="main_search">             
            </div>          
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
          <aside>
            <section className="facet-wrapper">
                <div className="facet-category-title">Страна бренда </div>
                <div id="categories">
                  <div data-reactroot="">
                    <div className="ais-root ais-hierarchical-menu">
                      <div className="ais-body ais-hierarchical-menu--body">
                        <div className="ais-hierarchical-menu--list ais-hierarchical-menu--list__lvl0">
                          <div className="ais-hierarchical-menu--item">
                            <div>
                              <Link to="/products/Belarus" className="facet-item">
                              <span className="facet-name"><i className="fa fa-angle-right"></i> Беларусь</span>
                              </Link>
                            </div>
                          </div>
                          <div className="ais-hierarchical-menu--item">
                            <div>
                              <Link to="/products/Russia" className="facet-item">
                              <span className="facet-name"><i className="fa fa-angle-right"></i> Россия</span>
                              </Link>
                            </div>
                          </div>
                          <div className="ais-hierarchical-menu--item">
                            <div>
                              <Link to="/products/Japan" className="facet-item">
                              <span className="facet-name"><i className="fa fa-angle-right"></i> Япония</span>
                              </Link>
                            </div>
                          </div>
                          <div className="ais-hierarchical-menu--item">
                            <div>
                              <Link to="/products/Korea" className="facet-item">
                              <span className="facet-name"><i className="fa fa-angle-right"></i> Корея</span>
                              </Link>
                            </div>
                          </div>
                          <div className="ais-hierarchical-menu--item">
                            <div>
                              <Link to="/products/USA" className="facet-item">
                              <span className="facet-name"><i className="fa fa-angle-right"></i> США</span>
                              </Link>
                            </div>
                          </div>
                          <div className="ais-hierarchical-menu--item">
                            <div>
                              <Link to="/products/Germany" className="facet-item">
                              <span className="facet-name"><i className="fa fa-angle-right"></i> Германия</span>
                              </Link>
                            </div>
                          </div>
                          <div className="ais-hierarchical-menu--item">
                            <div>
                               <Link to="/products/Italy" className="facet-item">
                              <span className="facet-name"><i className="fa fa-angle-right"></i> Италия</span>
                              </Link>
                            </div>
                          </div>
                          <div className="ais-hierarchical-menu--item">
                            <div>
                              <Link to="/products/Spain" className="facet-item">
                              <span className="facet-name"><i className="fa fa-angle-right"></i> Испания</span>
                              </Link>
                            </div>
                          </div>
                          <div className="ais-hierarchical-menu--item">
                            <div>
                              <Link to="/products/France" className="facet-item">
                              <span className="facet-name"><i className="fa fa-angle-right"></i> Франция</span>
                              </Link>
                            </div>
                          </div>
                          <div className="ais-hierarchical-menu--item">
                            <div>
                              <Link to="/products/Poland" className="facet-item">
                              <span className="facet-name"><i className="fa fa-angle-right"></i> Польша</span>
                              </Link>
                            </div>
                          </div>
                          <div className="ais-hierarchical-menu--item">
                            <div>
                              <Link to="/products/China" className="facet-item">
                              <span className="facet-name"><i className="fa fa-angle-right"></i> Китай</span>
                              </Link>
                            </div>
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="facet-wrapper">
                  <div className="facet-category-title">Гарантия</div>
                    <div id="materials" className="facet">
                      <div data-reactroot="">
                        <div className="ais-root ais-refinement-list">                          
                          <div className="ais-body ais-refinement-list--body">
                            <div className="ais-refinement-list--list">
                              <div className="ais-refinement-list--item">
                                <div>
                                   <Link to="/products/Warranty/1Year" className="facet-item">
                                    <span className="facet-name"><i className="fa fa-angle-right"></i> 1 год</span>                                    
                                   </Link>
                                </div>
                              </div>
                              <div className="ais-refinement-list--item">
                              <div>
                                 <Link to="/products/Warranty/2Years" className="facet-item">
                                  <span className="facet-name"><i className="fa fa-angle-right"></i> 2 года</span>                                  
                                 </Link>
                              </div>
                            </div>
                            <div className="ais-refinement-list--item">
                              <div>
                                <Link to="/products/Warranty/3Years" className="facet-item">
                                  <span className="facet-name"><i className="fa fa-angle-right"></i> 3 года</span>                                 
                                 </Link>
                              </div>
                            </div>
                            <div className="ais-refinement-list--item">
                              <div>
                                <Link to="/products/Warranty/5Years" className="facet-item">
                                  <span className="facet-name"><i className="fa fa-angle-right"></i> 5 лет</span>                            
                                </Link>
                              </div>
                            </div>
                            <div className="ais-refinement-list--item">
                              <div>
                                <Link to="/products/Warranty/10Years" className="facet-item">
                                  <span className="facet-name"><i className="fa fa-angle-right"></i> 10 лет</span>
                                </Link>
                              </div>
                            </div>                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="colors" className="facet">
                    <div data-reactroot="">
                      <div className="ais-root ais-refinement-list">
                        <div className="ais-refinement-list--header ais-header">
                          <div className="facet-category-title">Цвета</div>
                        </div>
                        <div className="ais-body ais-refinement-list--body">
                          <div className="ais-refinement-list--list">
                            <div className="ais-refinement-list--item">
                              <div>
                                <Link to="/products/Color/White" data-facet-value="White" className="facet-color "></Link>
                              </div>
                            </div>
                            <div className="ais-refinement-list--item">
                              <div>
                                <Link to="/products/Color/Black" data-facet-value="Black" className="facet-color "></Link>
                              </div>
                            </div>
                            <div className="ais-refinement-list--item">
                              <div>
                                <Link to="/products/Color/Blue" data-facet-value="Blue" className="facet-color "></Link>
                              </div>
                            </div>
                            <div className="ais-refinement-list--item">
                              <div>
                                <Link to="/products/Color/Green" data-facet-value="Green" className="facet-color "></Link>
                              </div>
                            </div>                            
                            <div className="ais-refinement-list--item">
                              <div>
                                <Link to="/products/Color/Red" data-facet-value="Red" className="facet-color "></Link>
                              </div>
                            </div>                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                  
            <div id="prices" className="facet">
              <div data-reactroot="">
                <div className="ais-root ais-price-ranges">
                  <div className="ais-price-ranges--header ais-header">
                    <div className="facet-category-title">Цены</div>
                  </div>
                  <div className="ais-body ais-price-ranges--body">
                    <div>
                      <div className="ais-price-ranges--list nav nav-list">
                        <div className="ais-price-ranges--item">
                          <Link to="/products/Price/<10" className="ais-price-ranges--link">
                            <div>≤$10</div>
                          </Link>
                        </div>
                        <div className="ais-price-ranges--item">
                          <Link to="/products/Price/10-50" className="ais-price-ranges--link">
                            <div>$10-50</div>
                          </Link>
                        </div>
                        <div className="ais-price-ranges--item">
                          <Link to="/products/Price/50-500" className="ais-price-ranges--link">
                            <div>$50-500</div>
                          </Link>
                        </div>                        
                        <div className="ais-price-ranges--item">
                          <Link to="/products/Price/500-1000" className="ais-price-ranges--link">
                            <div>$500-1000</div>
                          </Link>
                        </div>                       
                        <div className="ais-price-ranges--item">
                          <Link to="/products/Price/>1000" className="ais-price-ranges--link">
                            <div>≥$1000</div>
                          </Link>
                        </div>                   
                      </div>  
                    </div>
                  </div>    
                </div>
              </div> 
            </div>             
          </section>
        </aside> 
        <div className="site-wrapper-inner">   
        {this.props.children}     
        </div>
        <div className="footer">   
          <p>© 2017 Simple Faceted Store All rights reserved | Design by ------------ </p>    
        </div>

      </div>
    );
  } 
}      
 