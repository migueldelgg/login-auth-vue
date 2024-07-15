<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="input-group">
        <input type="text" placeholder="Seu email" v-model="user.email" required>
      </div>
      <div class="input-group">
        <input type="password" placeholder="Sua senha" v-model="user.password" required>
      </div>
      <button type="submit" class="login-button">Login</button>
    </form>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup>
import http from '@/services/http.js'
import { reactive, ref } from 'vue';

const user = reactive({
  email: '',
  password: ''
});

const error = ref('');

async function login() {
  error.value = ''; // Reset the error message
  try {
    const { data } = await http.post('/login', user);
    console.log('Data received:', data);
    // Aqui você pode redirecionar o usuário ou armazenar o token
  } catch (err) {
    error.value = 'Login falhou. Verifique suas credenciais e tente novamente.';
    console.log('Error response:', err?.response?.data);
  }
  console.log("localstorage -> " + localStorage)
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.login-button {
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #45a049;
}

.error-message {
  margin-top: 20px;
  color: red;
  text-align: center;
}
</style>

