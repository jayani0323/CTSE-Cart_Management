import {Logger} from "../loaders/logger";
import {ICart} from "../interfaces/ICart";
import Cart from "../models/Cart";

export class CartDao{

    private logger = Logger.getInstance();
    public static instance:CartDao = null;

    public static getInstance():CartDao{
        if(this.instance === null){
            this.instance = new CartDao();
        }
        return this.instance;
    }

    public async save(request:ICart){
        this.logger.info("CartDao - save()");
        const cart = new Cart(request);
        return await cart.save()
            .then(data=>{
                this.logger.info(`Cart ${data.id} Inserted Successfully`)
                return data;
            })
            .catch(error=>{
                this.logger.error("Error in inserting cart" + error.message);
                throw error;
            })
    }
    public async getAll(){
        this.logger.info("CartDao - getAll()");
        return await Cart.find({})
            .then(data=>{
                if(data.length>0){
                    this.logger.info(`Cart Retrieved Successfully`);
                }else{
                    this.logger.info(`Cart Not Found`);
                }
                return data;
            })
            .catch(error=>{
                this.logger.error("Error in retrieving carts" + error.message);
                throw error;
            })
    }

    public async getById(id:String){
        this.logger.info("CartDao - getById()");
        return await Cart.findById(id)
            .then(data=>{
                if(data){
                    this.logger.info(`${data._id} Cart Retrieved Successfully`)
                    return data;
                }else{
                    this.logger.info(`Cart ${id} Not Found`)
                    return {msg:"Cart Not Found"};
                }
            })
            .catch(error=>{
                this.logger.error(`Error in retrieving cart ${id} ${error.message}`);
                throw error;
            })
    }

    public async update(id:String,cart:ICart){
        this.logger.info("CartDao - update()");
        return await Cart.findByIdAndUpdate(id,{$set:cart},{new:true})
            .then(data=>{
                if(data){
                    this.logger.info(`${data.id} Cart Updated Successfully`);
                    return data;
                }else{
                    this.logger.info(`Cart ${id} Not Found`);
                    return {msg:"Cart Not Found"};
                }
            })
            .catch(error=>{
                this.logger.error(`Error in updating Cart ${id} ${error.message}`);
                throw error;
            })
    }

    public async delete(id:String){
        this.logger.info("CartDao - delete()");
        return await Cart.findByIdAndDelete(id)
            .then(data=>{
                if(data){
                    this.logger.info(`${data.id} Cart Deleted Successfully`);
                    return data;
                }else{
                    this.logger.info(`Cart ${id} Not Found`);
                    return {msg:"Cart Not Found"};
                }
            })
            .catch(error=>{
                this.logger.error(`Error in deleting Cart ${id} ${error.message}`);
                throw error;
            })
    }

    
}