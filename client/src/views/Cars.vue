<template>
  <div class="container d-flex">
    <div v-for=" r in products" :key="r.id">
      <Card :product ="r" ></Card>
    </div>
    <!-- {{getProduct}} -->
    <!-- <a>ini state {{ products }}</a> -->
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import { mapState } from 'vuex';

export default {
  // name: 'card',
  computed: {
    ...mapState(['products']),
  },
  components: {
    Card,
  },
  methods: {

  },
  created() {
    this.$store.dispatch('getProduct')
  }
};
</script>

<style scoped>
.container {
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
};
</style>
