import {ICart} from "../../interfaces/ICart";

export interface ICartService{
    createCart(request:ICart):Promise<ICart>;
    getAllCart():Promise<ICart[]>;
    getCartById(id:String):Promise<ICart | Object>;
    updateCart(id:String,product:ICart):Promise<ICart | Object>;
    deleteCart(id:String):Promise<ICart | Object>;
}
