import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cars',
      name: 'cars',
      component: () => import(/* webpackChunkName: "about" */ './views/Cars.vue'),
      children: [
        {
          path: ':id',
          component: () => import(/* webpackChunkName: "detail" */ './components/productDetail.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './components/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './components/Register.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName: "register" */ './components/cartDetail.vue'),
    },
  ],
});
