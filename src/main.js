// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';

import App from './App';
import HomePage from './components/HomePage';
import FavoritesPage from './components/FavoritesPage';
import AboutPage from './components/AboutPage';
import Error404Page from './components/Error404Page';

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/favoritos',
        component: FavoritesPage,
    },
    {
        path: '/sobre',
        component: AboutPage,
    },
    {
        path: '/*',
        component: Error404Page,
    },
];

const router = new Router({ routes });

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
