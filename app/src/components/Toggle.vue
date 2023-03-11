<template>
  <label class="switch">
    <input type="checkbox" @click="toggle" />
    <span class="slider round"></span>
  </label>
</template>

<script setup lang="ts">
import { ref } from "vue";

const toggled = ref(false);

const emit = defineEmits<{
  (e: "checked", value: boolean): void;
}>();

const toggle = () => {
  toggled.value = !toggled.value;
  emit("checked", toggled.value);
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #646cff;
}

input:focus + .slider {
  box-shadow: 0 0 1px #646cff;
}

input:checked + .slider:before {
  transform: translateX(36px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
