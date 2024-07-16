<template>
  <div class="container">
    <Card>
      <header class="login-header">Login</header>
      <InputBotao
        inputText="Digite seu e-mail"
        :inputStyles="{
          backgroundColor: '#F4F9FE',
          width: '200px',
          padding: '10px',
          borderRadius: '30px',
          marginBottom: '10px',
        }"
      />
      <InputBotao
        inputText="Digite sua senha"
        :inputStyles="{
          backgroundColor: '#F4F9FE',
          width: '200px',
          padding: '10px',
          borderRadius: '30px',
          marginBottom: '10px',
        }"
      />
      <InputBotao
        inputText="Entrar"
        :inputStyles="{
          backgroundColor: '#FF3A30',
          color: 'white', /* Cor do texto */
          width: '100px',
          padding: '10px',
          borderRadius: '30px',
        }"
        isButton
        @click="handleLogin"
      />
    </Card>
  </div>
</template>

<script>
import InputBotao from "../atomos/inputBotao.vue";
import Card from "../atomos/card.vue";

export default {
  components: {
    InputBotao,
    Card,
  },
  methods: {
    handleLogin() {
      // Lógica para login
      console.log('Login button clicked');
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Centralização vertical */
}
.login-header {
  font-family: sans-serif;
  font-size: 24px; /* Tamanho da fonte */
  color: white; /* Cor da fonte */
  margin-bottom: 20px; /* Espaçamento abaixo do header */
  text-align: center; /* Centraliza o texto */
}
</style>
