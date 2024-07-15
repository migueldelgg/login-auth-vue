<template>
  <h2>Login</h2>

  <form @submit.prevent="login">
    <input type="text" placeholder="Seu email" v-model="user.email">
    <input type="password" placeholder="Sua senha" v-model="user.password">
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
import http from '@/services/http.js'
import { reactive } from 'vue';

const user = reactive({
  email: '',
  password: ''
});

async function login() {
  try {
    const { data } = await http.post('/login', user);
    console.log(data);

    // Store the JWT in localStorage
    localStorage.setItem('jwt', data.jwt);
  } catch (error) {
    console.log(error?.response?.data);
  }
}
</script>

<style scoped>
</style>
