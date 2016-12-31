// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';

import App from './App';
import HomePage from './components/HomePage';
import FavoritesPage from './components/FavoritesPage';

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/favorites',
        component: FavoritesPage,
    },
];

const router = new Router({ routes });

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
