<template>
<!-- login -->
<section class="login">
  <h4>Login</h4>
  <form @submit.prevent="login" class="mt-3">
    <div class="form-group">
      <label>Email address</label>
      <input v-model="formLogin.email" type="email" class="form-control" placeholder="">
    </div>
    <div class="form-group">
      <label>Password</label>
      <input v-model="formLogin.password" type="password" class="form-control" placeholder="">
    </div>
    <div>
      <button type="submit" class="btn btn-primary mr-3">Login</button>
      <router-link class="" to="/register" >to register</router-link>
    </div>
  </form>
</section>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      formLogin: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.formLogin);
    },
    toRegister() {
      this.$route.push('/login');
    },
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
span {
  cursor: pointer;
};
span:hover {
  color:blue;
};
</style>
