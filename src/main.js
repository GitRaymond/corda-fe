import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router';
import VueResource from 'vue-resource';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
    router,
    el: '#app',
    render: h => h(App),
}).$mount(('#app'))