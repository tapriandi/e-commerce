<template>
<div class="container">
    <div class="detail">
        <h1>{{productDetail.name}}</h1>
        <!-- {{productDetail}} -->
        <hr>
        <span class="mr-5">Price: {{productDetail.price}} Juta</span>
        <span>Stock: {{productDetail.stock}} unit</span>
        <div class="img mt-4">
            <img :src="productDetail.image" class="img-fluid mb-5" alt="Responsive image">
            <h4>Description Product</h4>
            <p>{{productDetail.description}}</p>
        </div>
        <div class="children p-2 ">
          <a class="p-2">Kekurangan</a>
          <a class="p-2">Kelebihan</a>
        </div>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'productDetail',
  computed: {
    ...mapState(['productDetail']),
  },
  created() {
    this.$store.dispatch('getProduct')
    this.$store.dispatch('productDetail', this.$route.params.id);
  },
};
</script>

<style scoped>
.detail {
    margin-top: 8rem;
};
.detail img {
    height: 45rem;
    width: 30rem;
};
a {
  cursor: pointer;
}
</style>
