<template>
<nav class="navbar bg-primary justify-content-center">
  <!-- <router-link class="nav" to="/">Home</router-link> -->
  <router-link class="nav" to="/cars">Store</router-link>
  <router-link v-if="!isLogin" class="nav" to="/login">Login</router-link>
  <a v-if="isLogin" class="nav" @click.prevent="logout">Logout</a>
  <router-link v-if="isLogin" class="nav" to="/cartDetail">my cart {{carts.length}} item</router-link>
  <!-- <a class="nav" @click.prevent="toCartDetail">{{ carts }} cart</a> -->
</nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'navbar',
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['isLogin', 'carts']),
  },
  methods: {
    logout() {
      this.$store.commit('LOGOUT', false);
    },
    toChartDetail() {
      // this.$store.dispatch('getCart');
    }
  },
  created() {
    if(localStorage.token){
      this.$store.commit('ISLOGIN', true);
      // this.$store.dispatch('getCart')
    };
  },
};
</script>

<style scoped>
.nav {
  margin: .5rem;
  padding-right: 2rem;
  padding-left: 2rem;
  color: white !important;
  cursor: pointer;
  text-decoration: none!important;
  transition: 0.8s;
};
.navbar {
  box-shadow: 0 0 10px grey;
};
</style>
