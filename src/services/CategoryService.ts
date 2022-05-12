import {ICategory} from "../interfaces/ICategory";
import {Logger} from "../loaders/logger";
import {ICategoryService} from "./interfaces/ICategoryService";
import {CategoryDao} from "../dao/CategoryDao";
import {IProduct} from "../interfaces/IProduct";

export class CategoryService implements ICategoryService{
    private logger = Logger.getInstance();
    public static instance:CategoryService = null;
    private CategoryDao = CategoryDao.getInstance();
    public static getInstance():CategoryService{
        if(this.instance === null){
            this.instance = new CategoryService();
        }
        return this.instance;
    }

    public async createCategory(request:ICategory):Promise<ICategory>{
        this.logger.info("Category Services - createCategory()");

        return await this.CategoryDao.save(request)
            .then(data=>{
                return data;
            })
            .catch(error=>{
                this.logger.error(error.message);
                throw error;
            })
    }
    public async getAllCategory():Promise<ICategory[]>{
        this.logger.info("Category Services - getAllCategory()");
        return await this.CategoryDao.getAll()
            .then(data=>{
                return data;
            })
            .catch(error=>{
                this.logger.error(error.message);
                throw error;
            })
    }
    public async getCategoryById(id:String):Promise<ICategory | Object>{
        this.logger.info("Category Services - getCategoryById()");
        return await this.CategoryDao.getById(id)
            .then(data=>{
                return data;
            })
            .catch(error=>{
                this.logger.error(error.message);
                throw error;
            })
    }

    public async getProductsByCategory(name:string):Promise<ICategory | Object>{
        this.logger.info("Category Services - getProductsByCategory()");
        return await this.CategoryDao.getProductsByCategory(name)
            .then(data=>{
                return data;
            })
            .catch(error=>{
                this.logger.error(error.message);
                throw error;
            })
    }
    public async updateCategoryStatus(id:string,status:string):Promise<ICategory | Object>{
        this.logger.info("Category Services - updateCategoryStatus()");
        return await this.CategoryDao.updateStatus(id,status)
            .then(data=>{
                return data;
            })
            .catch(error=>{
                this.logger.error(error.message);
                throw error;
            })
    }


    public async updateCategory(id:String,category:ICategory):Promise<ICategory | Object>{
        this.logger.info("Customer Services - updateCustomer()");
        return await this.CategoryDao.update(id,category)
            .then(data=>{
                return data;
            })
            .catch(error=>{
                this.logger.error(error.message);
                throw error;
            })
    }
    public async deleteCategory(id:String):Promise<ICategory | Object>{
        this.logger.info("Category Services - deleteCategory()");
        return await this.CategoryDao.delete(id)
            .then(data=>{
                return data;
            })
            .catch(error=>{
                this.logger.error(error.message);
                throw error;
            })
    }
    public async addProductToCategory(id:String,productId:string):Promise<ICategory | Object>{
        this.logger.info("Category Services - addProductToCategory()");
        return await this.CategoryDao.addProduct(id,productId)
            .then(data=>{
                return data;
            })
            .catch(error=>{
                this.logger.error(error.message);
                throw error;
            })
    }

    public async removeProductFromCategory(id:String,productId:string):Promise<ICategory | Object>{
        this.logger.info("Category Services - removeProductFromCategory()");
        return await this.CategoryDao.removeProduct(id,productId)
            .then(data=>{
                return data;
            })
            .catch(error=>{
                this.logger.error(error.message);
                throw error;
            })
    }
}