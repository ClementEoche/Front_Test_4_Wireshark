import axios from "axios";
//import { config } from "vue/types/umd";

class ProductService {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://apiexpressjs4category.herokuapp.com/api'
        });
    }

    async getAllProduct() {
        const conf = {
            headers: {
                "x-access-token": localStorage.getItem("jwt"),
            },
        }
        let response = await this.axios.get('/product', conf, {});
        return response.data;
    }

    async modifyQuantity(idprod,quant){
        const conf = {
            headers: {
                "x-access-token": localStorage.getItem("jwt"),
            },
        }
        let response = await this.axios.put('/product/' + idprod, {
            "quantity":parseInt(quant)
        }, conf);
        return response.data;
    }

    async getOneProductById(id) {
        const conf = {
            headers: {
                "x-access-token": localStorage.getItem("jwt"),
            },
        }
        let response = await this.axios.get('/product/' + id, conf, {});
        return response.data;
    }

}

export default new ProductService;