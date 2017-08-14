import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

import Store from './server/models/storeModel';
import { getProducts, getProduct, postProduct, deleteProduct,getProductItaly,getProductSpain,getProductRussia,
getProductUSA,getProductBelarus,getProductChina,getProductKorea,getProductJapan,getProductFrance,getProductGermany,getProductPoland,
getWarrantyOneYear,getWarrantyTwoYears,getWarrantyThreeYears,getWarrantyFiveYears,getWarrantyTenYears,
getPriceLessTen,getPriceTenFifty,getPriceFiftyFiveHundred,getPriceFiveHundredThousand,getPriceMoreThousand,
getColorWhite,getColorBlack,getColorGreen,getColorBlue,getColorRed

} from './server/controllers/storeModel';

//  When hosting your application on another service (like Heroku, Nodejitsu, and AWS), 
//your host may independently configure the process.env.PORT variable for you; after all, your script runs in their environment.

const app = express(); // Our express server!
const port = process.env.PORT || 8080; //environment variable PORT, or 3000 if there's nothing there.

/* Just a couple of options for the db connection   Mongoose by default sets the auto_reconnect option to true.
  It is reccomended setting socket options at both the server and replica set level.
  It is reccomended a 30 second connection timeout because it allows for 
  plenty of time in most operating environments.    https://gist.github.com/mongolab-org/9959376
  How keepAlive works : http://tldp.org/HOWTO/TCP-Keepalive-HOWTO/overview.html
*/
const options = {
	server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
	replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
}; 

 // Use native promises to exchange messages with MongoDb http://mongoosejs.com/docs/promises.html      
 mongoose.Promise = global.Promise;

//-----------------------------------------------------------------------------------------------------

//connecting to our MongoDB   http://theholmesoffice.com/mongoose-connection-best-practice   http://mongoosejs.com/docs/api.html#connection_Connection
var dbURI = 'mongodb://admin:gas1960@ds129532.mlab.com:29532/store';
mongoose.connect(dbURI,options);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

// If the Node process ends, close the Mongoose connection   https://nodejs.org/api/process.html    http://man7.org/linux/man-pages/man7/signal.7.html
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 


//-----------------------------------------------------------------------------------------------------


// Body parser and Morgan middleware    https://github.com/expressjs/morgan    https://www.npmjs.com/package/body-parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// We tell express where to find static assets   http://expressjs.com/ru/starter/static-files.html
app.use(express.static(__dirname + '/client/static'));

// API routes

app.route('/products')
  // create a product
  .post(postProduct)
  // get all the products
  .get(getProducts);  

app.route('/products/Russia')
  // get all the products
  .get(getProductRussia);
app.route('/products/Belarus')
  // get all the products
  .get(getProductBelarus);

app.route('/products/Japan')
  // get all the products
  .get(getProductJapan);

app.route('/products/Korea')
  // get all the products
  .get(getProductKorea);

app.route('/products/USA')
  // get all the products
  .get(getProductUSA);

app.route('/products/Germany')
  // get all the products
  .get(getProductGermany);

app.route('/products/Italy')
  // get all the products
  .get(getProductItaly);

app.route('/products/Spain')
  // get all the products
  .get(getProductSpain);

app.route('/products/France')
  // get all the products
  .get(getProductFrance);

app.route('/products/Poland')
  // get all the products
  .get(getProductPoland);

app.route('/products/China')
  // get all the products
  .get(getProductChina); 

app.route('/products/Warranty/1year')
  // get all the products
  .get(getWarrantyOneYear);

app.route('/products/Warranty/2years')
  // get all the products
  .get(getWarrantyTwoYears);

app.route('/products/Warranty/3years')
  // get all the products
  .get(getWarrantyThreeYears);

app.route('/products/Warranty/5years')
  // get all the products
  .get(getWarrantyFiveYears);

app.route('/products/Warranty/10years')
  // get all the products
  .get(getWarrantyTenYears);
         
app.route('/products/Price/less10dollars')
  // get all the products
  .get(getPriceLessTen);

app.route('/products/Price/10-50dollars')
  // get all the products
  .get(getPriceTenFifty);

app.route('/products/Price/50-500dollars')
  // get all the products
  .get(getPriceFiftyFiveHundred);

app.route('/products/Price/500-1000dollars')
  // get all the products
  .get(getPriceFiveHundredThousand);

app.route('/products/Price/more1000dollars')
  // get all the products
  .get(getPriceMoreThousand);    

app.route('/products/Color/white')
  // get all the products
  .get(getColorWhite); 

app.route('/products/Color/black')
  // get all the products
  .get(getColorBlack);   

app.route('/products/Color/green')
  // get all the products
  .get(getColorGreen);  

app.route('/products/Color/blue')
  // get all the products
  .get(getColorBlue);  

app.route('/products/Color/red')
  // get all the products
  .get(getColorRed);         
 
app.route('/products/:id')
  // get a single product
  .get(getProduct)
  // delete a single product
  .delete(deleteProduct);



// ...For all the other requests just sends back the Homepage
app.route("*").get((req, res) => {
  res.sendFile('client/static/index-static.html', { root: __dirname });
});


app.listen(port);

console.log(`listening on port ${port}`);