<template>
  <div class="container">
    <div id="card" class="row">
      <Card></Card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
  name: "card",
  data: function () {
    return {
      cars: [],
    };
  },
  components: {
    Card,
  },
  created: function () {
    axios
      .get('/cars')
      .then(({ data }) => {
        this.cars = data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
#card {
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
