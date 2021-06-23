// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue.esm.js';
import App from './App'
import Router from './routers'
import VueCookies from 'vue-cookies';

Vue.use(Router)
Vue.use(VueCookies);
Vue.config.productionTip = false

Vue.prototype.$isConnected = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  components: { App },
  template: '<App/>'
})