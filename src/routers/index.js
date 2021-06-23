import Vue from 'vue/dist/vue.esm.js';
import Router from 'vue-router'
import LoginPage from '../views/LoginPage'
import ArmaHome from '../views/ArmaHome'
import Category from '../views/Category'
import SubCategory from '../views/SubCategory'
import AllProducts from '../views/AllProducts'
import SubcatOfCat from '../views/SubcatOfCat'
import ProductOfSub from '../views/ProductOfSub'
import OneProd from '../views/OneProd'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            name: 'LoginPage',
            component: LoginPage,
        },
        {
            path:'/ArmaHome',
            name: 'ArmaHome',
            component: ArmaHome,
        },
        {
            path:'/Category',
            name: 'Category',
            component: Category,
        },
        {
            path:'/SubCategory',
            name: 'SubCategory',
            component: SubCategory,
        },
        {
            path:'/SubcatOfCat/:id',
            name: 'SubcatOfCat',
            component: SubcatOfCat,
        },
        {
            path:'/ProductOfSub/:id',
            name:'ProductOfSub',
            component: ProductOfSub,
        },
        {
            path:'/OneProd/:id',
            name:'OneProd',
            component: OneProd,
        },
        {
            path:'/AllProducts',
            name: 'AllProducts',
            component: AllProducts,
        },
    ]
})