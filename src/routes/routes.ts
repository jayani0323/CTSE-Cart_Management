import * as express from "express";
import CartController from "../controllers/CartController";

export default function setRoutes(app:any){

    const router = express();
    const cartControl = new CartController();


    app.use("/api",router);

    //Routes
    //Cart Routes
     router.route("/carts").post(cartControl.createCart);
     router.route("/carts").get(cartControl.getAllCarts);
     router.route("/carts/:id").get(cartControl.getCartById);
     router.route("/carts/:id").put(cartControl.updateCart);
     router.route("/carts/:id").delete(cartControl.deleteCart);


  
}