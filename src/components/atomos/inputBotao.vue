<template>
  <div class="input-group">
    <input
      v-if="!isButton"
      type="text"
      :placeholder="inputText"
      v-model="user.inputValue"
      :style="inputStyles"
      required
    />
    <button
      v-else
      :style="inputStyles"
      @click="handleClick"
    >
      {{ inputText }}
    </button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  inputText: {
    type: String,
    required: true,
  },
  inputStyles: {
    type: Object,
    required: false,
    default: () => ({}),
  },
  isButton: {
    type: Boolean,
    required: false,
    default: false,
  }
});

const emits = defineEmits(['click']);

const user = reactive({
  inputValue: "",
});

const handleClick = () => {
  emits('click');
};
</script>

<style scoped>
input {
  color: #333;
  border: none;
  outline: none;
}

button {
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
}
</style>
