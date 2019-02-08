import Vue from 'vue';
import Router from 'vue-router';
import CreateContract from './views/CreateContract';
import Overview from './views/Overview';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Overview,
        },
        {
            path: '/create',
            name: 'create',
            component: CreateContract,
        },



    ],
});
