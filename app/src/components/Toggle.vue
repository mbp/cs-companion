<template>
  <label class="switch">
    <input type="checkbox" class="switch-input" />
    <span class="switch-label" @click="toggle">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { ref } from "vue";

const toggled = ref(false);

defineProps<{
  label: string;
}>();

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
  vertical-align: top;
  width: 96px;
  height: 36px;
  padding: 1px;
  border-radius: 3px;
  cursor: pointer;
}

.switch-input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.switch-label {
  color: black;
  position: relative;
  display: block;
  height: inherit;
  font-size: 15px;
  text-transform: uppercase;
  background: #fff;
  border-radius: inherit;
  box-shadow:
    inset 0 1px 2px rgba(0, 0, 0, 0.12),
    inset 0 0 2px rgba(0, 0, 0, 0.15);
  -webkit-transition: 0.15s ease-out;
  -moz-transition: 0.15s ease-out;
  -o-transition: 0.15s ease-out;
  transition: 0.15s ease-out;
  -webkit-transition-property: opacity background;
  -moz-transition-property: opacity background;
  -o-transition-property: opacity background;
  transition-property: opacity background;
}
.switch-label:before,
.switch-label:after {
  position: absolute;
  top: 50%;
  margin-top: -0.5em;
  line-height: 1;
  -webkit-transition: inherit;
  -moz-transition: inherit;
  -o-transition: inherit;
  transition: inherit;
}
.switch-label:before {
  color: red;
  text-shadow: 0 1px rgba(255, 255, 255, 0.5);
}
.switch-label:after {
  color: red;
  text-shadow: 0 1px rgba(0, 0, 0, 0.2);
  opacity: 0;
}
.switch-input:checked ~ .switch-label {
  background: green;
  box-shadow:
    inset 0 1px 2px rgba(0, 0, 0, 0.15),
    inset 0 0 3px rgba(0, 0, 0, 0.2);
}
.switch-input:checked ~ .switch-label:before {
  opacity: 0;
}
.switch-input:checked ~ .switch-label:after {
  opacity: 1;
}

.switch-green > .switch-input:checked ~ .switch-label {
  background: #4fb845;
}
</style>
