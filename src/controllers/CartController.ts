import {Logger} from "../loaders/logger";
import {CartService} from "../services/CartService";
import {ICart} from "../interfaces/ICart";
import {ICartService} from "../services/interfaces/ICartService";

const autoBind = require('auto-bind');
import * as fs from "fs";
import mime = require("mime");


export default class CartController{

    private logger:Logger;
    private cartService:ICartService;

    constructor(){
        this.logger = Logger.getInstance();
        this.cartService = CartService.getInstance();
        autoBind(this);
    }

    public async createCart(req:any,res:any){
        this.logger.info("CartController - createCart()");

            if(req.body) {
                // let image = "";
                const cart:ICart = JSON.parse(req.body.data);

                // if (req.file) {
                //     image = req.file.filename;
                //     cart.image = image;
                // }
            await this.cartService.createCart(cart)
                .then(data => {
                    res.status(200).send(data);
                })

                .catch(error => {
                    this.logger.error(error.message);
                    res.status(500).send({err:error.message});
                })
        }else {
                res.status(404);
            }
    }
    public async getAllCart(req:any,res:any) {
        this.logger.info("CartController - getAllCart()");

        await this.cartService.getAllCart()
            .then(data => {
                res.status(200).send(data);
            })
            .catch(error => {
                this.logger.error(error.message);
                res.status(500).send({err: error.message});
            })
    }
    public async getCartById(req:any,res:any) {
        this.logger.info("CartController - getCartById()");
        const id = req.params.id;
        await this.cartService.getCartById(id)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(error => {
                this.logger.error(error.message);
                res.status(500).send({err: error.message});
            })
    }

    public async updateCart(req:any,res:any) {
        this.logger.info("CartController - updateCart()");

        const id = req.params.id;

        if(req.body) {
            // let image = "";
            const cart: ICart = JSON.parse(req.body.data);

            // if (req.file) {
            //     image = req.file.filename;
            //     cart.image = image;
            // }
            await this.cartService.updateCart(id, cart)
                .then(data => {
                    res.status(200).send(data);
                })
                .catch(error => {
                    this.logger.error(error.message);
                    res.status(500).send({err: error.message});
                })
        }else {
            res.status(404);
        }
    }

    public async deleteCart(req:any,res:any) {
        this.logger.info("CartController - deleteCart()");
        const id = req.params.id;
        await this.cartService.deleteCart(id)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(error => {
                this.logger.error(error.message);
                res.status(500).send({err: error.message});
            })
    }
   
}