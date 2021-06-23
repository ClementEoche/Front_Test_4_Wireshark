import axios from "axios";
//import { config } from "vue/types/umd";

class SubcatService {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://apiexpressjs4category.herokuapp.com/api'
        });
    }

    async getAllSubCategories() {
        const conf = {
            headers: {
                "x-access-token": localStorage.getItem("jwt"),
            },
        }
        let response = await this.axios.get('/subcat', conf, {});
        return response.data;
    }

    async getOneSubCategoriesById(id) {
        const conf = {
            headers: {
                "x-access-token": localStorage.getItem("jwt"),
            },
        }
        let response = await this.axios.get('/subcat/' + id, conf, {});
        return response.data;
    }

}

export default new SubcatService;