<template>
  <div class="card">
    <slot>
    </slot>
  </div>
</template>

<script setup>
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  background-color: #8E99A5;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px; /* Adicionando padding para evitar que os inputs fiquem colados nas bordas */
}
</style>
