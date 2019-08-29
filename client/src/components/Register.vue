<template>
<!-- login -->
<section class="login">
  <h4>Register</h4>
  <form @submit.prevent="register" class="mt-3">
    <div class="form-group">
      <label>Username</label>
      <input v-model="form.name" type="text" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label>Email address</label>
      <input v-model="form.email" type="email" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label>Password</label>
      <input v-model="form.password" type="password" class="form-control" placeholder="">
    </div>
    <div>
      <button type="submit" class="btn btn-primary mr-3">Register</button>
      <router-link class="toLogin" to="/login" >to login</router-link>
    </div>
  </form>
</section>
</template>

<script>
// import axios from 'axios';
export default {
  name: 'register',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    register() {
      this.$store.dispatch('register', this.form)
    }
  },
};
</script>

<style scoped>
.login{
  border: 1px solid whitesmoke;
  width: 25rem;
  padding: 1rem;
  border-radius: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
};
</style>
