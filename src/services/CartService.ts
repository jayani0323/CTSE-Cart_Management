import {ICart} from "../interfaces/ICart";
import {Logger} from "../loaders/logger";
import {ICartService} from "./interfaces/ICartService";
import {CartDao} from "../dao/CartDao";


export class CartService implements ICartService {
    private logger = Logger.getInstance();
    public static instance: CartService = null;
    private CartDao = CartDao.getInstance();

    public static getInstance(): CartService {
        if (this.instance === null) {
            this.instance = new CartService();
        }
        return this.instance;
    }

    public async createCart(request: ICart): Promise<ICart> {
        this.logger.info("Cart Services - createCart()");

        return await this.CartDao.save(request)
            .then(data => {
                return data;
            })
            .catch(error => {
                this.logger.error(error.message);
                throw error;
            })
    }

    public async getAllCart(): Promise<ICart[]> {
        this.logger.info("Cart Services - getAllCart()");
        return await this.CartDao.getAll()
            .then(data => {
                return data;
            })
            .catch(error => {
                this.logger.error(error.message);
                throw error;
            })
    }

    public async getCartById(id: String): Promise<ICart | Object> {
        this.logger.info("Cart Services - getCartById()");
        return await this.CartDao.getById(id)
            .then(data => {
                return data;
            })
            .catch(error => {
                this.logger.error(error.message);
                throw error;
            })
    }

    public async updateCart(id: String, cart: ICart): Promise<ICart | Object> {
        this.logger.info("Customer Services - updateCustomer()");
        return await this.CartDao.update(id, cart)
            .then(data => {
                return data;
            })
            .catch(error => {
                this.logger.error(error.message);
                throw error;
            })
    }

    public async deleteCart(id: String): Promise<ICart | Object> {
        this.logger.info("Cart Services - deleteCart()");
        return await this.CartDao.delete(id)
            .then(data => {
                return data;
            })
            .catch(error => {
                this.logger.error(error.message);
                throw error;
            })
    }

}