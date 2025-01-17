import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import Swal from 'sweetalert2';
// eslint-disable-next-line import/extensions
import router from './router.js';

const baseUrl = 'http://localhost:3000';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    isAdmin: false,
    userLoggedIn: {
      userId: '',
      name: '',
      email: '',
    },
    productDetail: {},
    user: {},
    carts: [],
    products: [],
  },
  mutations: {
    SET_PRODUCT(state, payload) {
      state.products = payload;
    },
    LOGIN(state, payload) {
      // console.log(payload.id);
      localStorage.id = payload.id;
      localStorage.setItem('token', payload.token);
      state.isLogin = true;
      Swal.fire(
        'login Succes',
        'You clicked the button!',
        'success',
      );
      router.push('/cars');
    },
    GET_CART_OWNER(state, payload) {
      state.carts = payload;
    },
    SET_CART(state, payload) {
      state.carts.push(payload);
    },
    PRODUCT_DETAIL(state, payload) {
      state.productDetail = payload;
    },
    LOGOUT(state, payload) {
      router.push('/cars');
      state.isLogin = payload;
      localStorage.clear();
      Swal.fire(
        'logout Succes',
        'You clicked the button!',
        'success',
      );
    },
    ISLOGIN(state, payload) {
      state.isLogin = payload;
    },
  },
  actions: {
    register(context, form) {
      console.log('masuk sini');
      Axios.post(`${baseUrl}/api/user/register`, form)
        .then(({ data }) => {
          // eslint-disable-next-line no-console
          console.log(data);
          Swal.fire(
            'Register succes',
            'You clicked the button!',
            'success',
          );
          router.push('/login');
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    },
    login(context, formLogin) {
      Axios.post(`${baseUrl}/api/user/login`, formLogin)
        .then(({ data }) => {
          console.log(data);
          context.commit('LOGIN', data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    getProduct(context) {
      Axios.get(`${baseUrl}/api/product`)
        .then(({ data }) => {
          context.commit('SET_PRODUCT', data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    addToCart(context, productId) {
      const config = {
        headers: {
          token: localStorage.token,
        },
      };
      Axios.post(`${baseUrl}/api/cart`, { productId }, config)
        .then(({ data }) => {
          context.commit('SET_CART', data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCartOwner(context, owner) {
      console.log(owner);
      Axios
        .get(`${baseUrl}/api/cart/${owner.id}`)
        .then(({ data }) => {
          context.commit('GET_CART_OWNER', data);
        })
        .catch((err) => {
          console.log(err, 'total');
        });
    },
    productDetail(context, productId) {
      // console.log(productId, '<<<<<<<<<<<<<<');
      Axios
        .get(`${baseUrl}/api/product/${productId}`)
        .then(({ data }) => {
          // console.log(data);
          context.commit('PRODUCT_DETAIL', data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
