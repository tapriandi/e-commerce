<template>
<!-- <div class="card"> -->
  <div class="card" style="width: 18rem;">
  <img :src="product.image" class="card-img-top" alt="..." style="max-height:20rem;">
  <div class="card-body">
    <h5 class="card-title">{{ product.name }}</h5>
    <h5 class="card-title">Rp.{{ product.price }} Juta</h5>
    <!-- <router-link :to="`/productDetail/${product._id}`" class="btn btn-primary">see detail</router-link> -->
    <button @click="toDetail(product._id)" class="btn btn-primary">see detail</button>
    <button @click="addToCart(product._id)" class="btn btn-primary ml-2">add to cart</button>
  </div>
</div>
</template>

<script>
// import rupiah from '../helper/rupiah.js';
import Axios from 'axios';

export default {
  props: ['product'],
  // name: 'card',
  data() {
    return{
      // userId: '',
    }
  },
  methods: {
    addToCart(productId) {
      this.$store.dispatch('addToCart', productId);
    },
    toDetail(productId) {
      this.$store.dispatch('productDetail', productId);
      this.$router.push(`/productDetail/${productId}`);
    },
  },
  computed: {
    // getRupiah() {
    //   return rupiah(this.product.price)
    // }
  },
  created() {
    // this.$store.dispatch('productDetail');
  },
};
</script>

<style scoped>
.card {
  margin: 1rem;
  width: 25rem;
  height: 18rem;
  box-shadow: 0 0 20px grey;
};
.card:hover {
  background-color:black;
  box-shadow: 0 0 8px grey;
};
/* img {
  height: 20rem !important;
};
.label {
  background-color:azure;
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem .5rem 1.5rem;
  width: 100%;
  bottom: 0;
}; */
/* .midle {
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  transition: 0.5s;
  padding: 10rem 1rem 1rem 2rem;
};
.midle:hover {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.6);
}; */

</style>
