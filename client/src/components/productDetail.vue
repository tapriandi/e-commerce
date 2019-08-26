<template>
<div class="container">
    <div class="detail">
        <h1>Lorem</h1>LYUFWOY Y I
        {{productDetail}}
        <hr>
        <span>Lorem ipsum dolor sit</span>
        <div class="img">
            <img src="../assets/happy-fox.png" class="img-fluid" alt="Responsive image">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat neque perspiciatis quas! Voluptatibus dolorem recusandae saepe earum in eveniet, nisi tenetur, sapiente similique amet explicabo accusamus laboriosam, ipsum doloribus?. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur inventore sequi earum magnam odio rerum nobis voluptatum quaerat similique commodi pariatur, illo, ipsa libero accusamus dicta minus velit nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci amet totam hic, quas quo ea ut doloribus rem ratione aut reprehenderit officia id in beatae eligendi sapiente nihil! Ipsum, ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, maxime vero mollitia quas nesciunt, dolorum aspernatur nulla eaque cupiditate, ipsa numquam architecto tempore sed dolor asperiores? Minima praesentium obcaecati quaerat? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure deserunt placeat voluptas eos, quisquam quae provident obcaecati quia nulla, libero nesciunt. Repellat laboriosam eius iure ipsam debitis non, quos consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis laboriosam, non rerum eaque dolore ex obcaecati id similique aut veniam eum, accusantium quas impedit recusandae laborum sequi. Dicta, similique? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse fugit quo aut distinctio earum optio debitis assumenda laboriosam tenetur eos! Optio corporis eos repellendus quidem debitis officia quisquam omnis sapiente.</p>
        </div>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed: {
    ...mapState(['productDetail']),
  },
  created() {
    this.$store.dispatch('productDetail');
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

</style>
