<template>
  <div class="container">
    <div v-for=" r in products" :key="r.id">
      <Card :product ="r" ></Card>
    </div>
    <!-- <a>ini state {{ products }}</a> -->
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import { mapState } from 'vuex'

export default {
  // name: 'card',
  components: {
    Card,
  },
  methods: {

  },
  created() {
    this.$store.dispatch('getProduct')
  },
  computed: {
    ...mapState(['products']),
  },
};
</script>

<style scoped>
.container {
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
