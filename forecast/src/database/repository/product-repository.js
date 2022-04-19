const { ProductModel } = require("../models");
const { APIError,BadRequestError } = require('../../utils/app-errors')

//Dealing with data base operations
class ProductRepository {


    async CreateProduct({ name, desc, day, store }){

        try {
            const product = new ProductModel({
                name, desc, day, store
            })
    
            const productResult = await product.save();
            return productResult;
            
        } catch (err) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to Create Product')
        }
        
    }


     async Products(){
         try{
             return await ProductModel.find();
         }catch(err){
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to Get Products')
         }
    }
   
    async FindById(id){
        try{
            return await ProductModel.findById(id);
        }catch(err){
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to Find Product')
        }

    }
}

module.exports = ProductRepository;