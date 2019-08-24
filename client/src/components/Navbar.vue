<template>
<nav class="navbar bg-primary justify-content-center">
    <router-link class="nav" to="/">Home</router-link>
    <router-link class="nav" to="/cars">Cars</router-link>
    <router-link class="nav" to="/detail">Detail</router-link>
    <!-- <form class="form-inline">
    </form> -->
</nav>
</template>

<script>
export default {
  name: 'navbar',
};
</script>

<style scope>
.nav {
    margin: .5rem;
    padding-right: 2rem;
    padding-left: 2rem;
    color: white;
    text-decoration: none!important;
    transition: 0.8s;
};
</style>
