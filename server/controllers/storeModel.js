// We import our store schema
import Store from '../models/storeModel';

//      http://mongoosejs.com/docs/2.7.x/docs/finding-documents.html

// Get all the products sorted by postDate
const getProducts = (req, res) => {
    // Query the db, if no errors send all the products to the client
    Store.find(null, null, (err, products) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(products); // products sent as json        
    });
}

// Get a single products filtered by ID
const getProduct = (req, res) => {
    const { id }  = req.params;
    // Query the db for a single product, if no errors send it to the client
    Store.findById(id, (err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

// Get the body data and create a new Product
const postProduct = (req, res) => {
  // We assign the product info to a empty product and send a message back if no errors
  let product = Object.assign(new Store(), req.body);
  // ...Then we save it into the db
  product.save(err => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.json({ message: 'product  successfully created' }); // A simple JSON answer to inform the client
  });
};

// Delete a product by the given ID
const deleteProduct = (req, res) => {
// We remove the product by the given id and send a message back if no errors
  Store.remove(
    { _id: req.params.id },
    err => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.json({ message: 'product successfully deleted' }); // A simple JSON answer to inform the client
    }
  );
};


//------------------------Countries
const getProductItaly = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "Италия"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getProductSpain = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "Испания"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getProductRussia = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "Россия"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getProductUSA = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "США"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getProductBelarus = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "Беларусь"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getProductJapan = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "Япония"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getProductKorea = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "Корея"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getProductChina = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "Китай"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getProductPoland = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "Польша"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getProductFrance = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "Франция"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getProductGermany = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "Германия"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

//------------------------Warranty

const getWarrantyOneYear = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "1 год"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getWarrantyTwoYears = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "2 года"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getWarrantyThreeYears = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "3 года"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getWarrantyFiveYears = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "5 лет"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getWarrantyTenYears = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "10 лет"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

//------------------------Prices

const getPriceLessTen = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'price': {$lte : 10}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getPriceTenFifty = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'price': {$lte : 50, $gte : 10}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getPriceFiftyFiveHundred = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'price': {$lte : 500, $gte : 50}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getPriceFiveHundredThousand = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'price': {$lte : 1000, $gte : 500}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getPriceMoreThousand = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'price': {$gte : 1000}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getColorWhite = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "белый"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getColorBlack = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "черный"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getColorGreen = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "зеленый"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getColorBlue = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "синий"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}

const getColorRed = (req, res) => {
    
    // Query the db for a single available product, if no errors send it to the client
    Store.find({'param': {$elemMatch: {"__text": "красный"}}},(err, product) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json(product); // product sent as json
    });
}




// We export our functions to be used in the server routes
export { getProducts, getProduct, postProduct, deleteProduct,getProductItaly,getProductSpain,getProductRussia,
getProductUSA,getProductBelarus,getProductChina,getProductKorea,getProductJapan,getProductFrance,getProductGermany,
getProductPoland,
getWarrantyOneYear,getWarrantyTwoYears,getWarrantyThreeYears,getWarrantyFiveYears,getWarrantyTenYears,
getPriceLessTen,getPriceTenFifty,getPriceFiftyFiveHundred,getPriceFiveHundredThousand,getPriceMoreThousand,
getColorWhite,getColorBlack,getColorGreen,getColorBlue,getColorRed
};


