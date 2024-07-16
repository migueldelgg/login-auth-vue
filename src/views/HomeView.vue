<template>
  <div class="page-container">
    <div class="element">
      <Login/>
    </div>
  </div>
</template>

<script>
import Login from '@/components/moleculas/juncaoLoginComponents.vue';

export default {
  components: {
    Login
  }
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Altura total da tela para centralização vertical */
  text-align: center;
}

.element {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
