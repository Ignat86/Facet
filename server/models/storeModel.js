// Dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Our schema definition  products from Amazon   http://mongoosejs.com/docs/schematypes.html
const storeSchema = new Schema(
    {
        
        url: String,
        price : Number,        
        currencyId: String,
        categoryId : Number,
        picture : Array,
        store : Boolean,
        pickup : Boolean,
        delivery : Boolean,
        local_delivery_cost: Number,
        name : String,
        vendor : String,
        vendorCode: String,
        description : String,
        sales_notes : String,
        manufacturer_warranty: Boolean,
        barcode : Number,
        weight : Number,
        dimensions : String,
        param : [Schema.Types.Mixed],
        id: Number,
        available: Boolean,
        groupid: Number
        
    }
);

// We export the schema to use it outside else
export default mongoose.model('Store', storeSchema);