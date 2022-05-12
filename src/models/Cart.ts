import {ICart} from "../interfaces/ICart";
import * as mongoose from "mongoose";
import Cart from "./Cart";
const Schema = mongoose.Schema;

const CartSchema = new Schema(
    {
        cartId: {
            type: Number,
            unique: true
        },

        userId:{type:Schema.Types.ObjectId,required:false,ref:'users'},

        products:[{type:Schema.Types.ObjectId,required:false,ref:'products'}],
       
        qty:{
            type:Number,
            required:true,

        }
    }





);
export default mongoose.model<ICart & mongoose.Document>('carts',CartSchema)