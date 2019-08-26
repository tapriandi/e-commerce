<template>
<nav class="navbar bg-primary justify-content-center">
  <!-- <router-link class="nav" to="/">Home</router-link> -->
  <router-link class="nav" to="/cars">Cars</router-link>
  <router-link class="nav" to="/login">Login</router-link>
  <router-link class="nav" to="/cars">Logout</router-link>
  <router-link class="btn" to="/cart">{{ carts[0].cart.length }}</router-link>
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
  methods: {
    logout() {
      // console.log('a;fgjansdb');
      this.$store.commit('LOGOUT', false);
    },
  },
  computed: {
    ...mapState(['isLogin', 'carts']),
  },
  mounted() {
    if(localStorage.token){
      this.$store.commit('ISLOGIN', true);
      this.$store.dispatch('getCart')
    };
  },
};
</script>

<style scoped>
.nav {
  margin: .5rem;
  padding-right: 2rem;
  padding-left: 2rem;
  color: white;
  text-decoration: none!important;
  transition: 0.8s;
};
.navbar {
  box-shadow: 0 0 10px grey;
};
</style>
