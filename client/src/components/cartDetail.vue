<template>
<div class="container">
  <h3>Detail cart</h3>
<div class="detail-cart d-flex flex-column">
  <div class="card d-flex flex-row">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <div>
        <a href="#" class="btn btn-primary">Remove</a>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'cartDetail',
  data() {
    return {
      userId: {id: localStorage.id}
    };
  },
  computed: {
    ...mapState(['carts']),
  },
  created() {
    this.$store.dispatch('getProduct')
    this.$store.dispatch('getCartOwner', this.userId);
  },
};
</script>

<style>
.container {
  margin-top: 6rem;
};
</style>