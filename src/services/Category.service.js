import axios from "axios";
//import { config } from "vue/types/umd";

class CategoryService {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://apiexpressjs4category.herokuapp.com/api'
    });
  }

  async getAllCategories() {
    const conf = {
      headers: {
        "x-access-token": localStorage.getItem("jwt"),
      },
    }
    let response = await this.axios.get('/cat', conf, {});
    return response.data;
  }

  async getOneCategoriesById(id) {
    const conf = {
      headers: {
        "x-access-token": localStorage.getItem("jwt"),
      },
    }
    let response = await this.axios.get('/cat/' + id, conf, {});
    return response.data;
  }

}

export default new CategoryService;