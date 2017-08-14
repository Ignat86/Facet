import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Home, Welcome, Contact,HomeSearch } from './components';
import { ProductsContainer, ProductsContainerRussia,ProductsContainerBelarus,
ProductsContainerJapan,ProductsContainerKorea,ProductsContainerUSA,ProductsContainerGermany,
ProductsContainerItaly,ProductsContainerSpain,ProductsContainerFrance,ProductsContainerPoland,
ProductsContainerChina,
ProductsContainerWarranty1Year,ProductsContainerWarranty2Years,ProductsContainerWarranty3Years,ProductsContainerWarranty5Years,
ProductsContainerWarranty10Years,
ProductsContainerPriceLessTen,ProductsContainerPriceTenFifty,ProductsContainerPriceFiftyFiveHundred,
ProductsContainerPriceFiveHundredThousand,ProductsContainerPriceMoreThousand,
ProductsContainerColorWhite,ProductsContainerColorBlack,ProductsContainerColorGreen,ProductsContainerColorBlue,
ProductsContainerColorRed

} from './containers';

const store = configureStore();

// Use hashHistory for easier development
const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <IndexRoute component={Welcome}/>
        <Route path="/contact" component={Contact} />
      </Route>
      <Route path="/products" component={HomeSearch}>
        <IndexRoute component={ProductsContainer} />
        <Route path="Russia" component={ProductsContainerRussia} />
        <Route path="Belarus" component={ProductsContainerBelarus} />
        <Route path="Japan" component={ProductsContainerJapan} />
        <Route path="Korea" component={ProductsContainerKorea} />
        <Route path="USA" component={ProductsContainerUSA} />
        <Route path="Germany" component={ProductsContainerGermany} />
        <Route path="Italy" component={ProductsContainerItaly} />
        <Route path="Spain" component={ProductsContainerSpain} />
        <Route path="France" component={ProductsContainerFrance} />
        <Route path="Poland" component={ProductsContainerPoland} />
        <Route path="USA" component={ProductsContainerPoland} /> 
        <Route path="China" component={ProductsContainerChina} /> 
        <Route path="Warranty/1Year" component={ProductsContainerWarranty1Year} />
        <Route path="Warranty/2Years" component={ProductsContainerWarranty2Years} />  
        <Route path="Warranty/3Years" component={ProductsContainerWarranty3Years} />  
        <Route path="Warranty/5Years" component={ProductsContainerWarranty5Years} />  
        <Route path="Warranty/10Years" component={ProductsContainerWarranty10Years} />   
        <Route path="Price/<10" component={ProductsContainerPriceLessTen} />  
        <Route path="Price/10-50" component={ProductsContainerPriceTenFifty} /> 
        <Route path="Price/50-500" component={ProductsContainerPriceFiftyFiveHundred} /> 
        <Route path="Price/500-1000" component={ProductsContainerPriceFiveHundredThousand} /> 
        <Route path="Price/>1000" component={ProductsContainerPriceMoreThousand} />    
        <Route path="Color/White" component={ProductsContainerColorWhite} />  
        <Route path="Color/Black" component={ProductsContainerColorBlack} />  
        <Route path="Color/Green" component={ProductsContainerColorGreen} />  
        <Route path="Color/Blue" component={ProductsContainerColorBlue} />  
        <Route path="Color/Red" component={ProductsContainerColorRed} />    
      </Route>
    </Router>
   </Provider>  
);

export default routes;
