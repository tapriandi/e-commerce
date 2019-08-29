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
    },
    {
      path: '/productDetail/:id',
      name: 'productDetail',
      component: () => import(/* webpackChunkName: "productDetail" */ './components/productDetail.vue'),
      children: [
        {
          path: '/kelebihan',
          name: 'kelebihan',
          component: () => import(/* webpackChunkName: "kelebihan" */ './components/kelebihan.vue'),
        },
        {
          path: '/kekurangan',
          name: 'kekurangan',
          component: () => import(/* webpackChunkName: "kekurangan" */ './components/kekurangan.vue'),
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
      path: '/cartDetail',
      name: 'cartDetail',
      component: () => import(/* webpackChunkName: "cartDetail" */ './components/cartDetail.vue'),
    },
  ],
});
