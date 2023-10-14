<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  src: string;
  caption: string;
  initialSize: number;
}>();
const sizePercentage = ref(props.initialSize);
</script>

<template>
  <div class="click-zoom">
    <label>
      <input type="checkbox" />
      <img
        :src="src"
        :style="{
          width: sizePercentage + '%',
          'max-width': (sizePercentage / 100) * 640 + 'px',
        }"
      />
      <figcaption>{{ caption }}</figcaption>
    </label>
  </div>
</template>

<style scoped>
figcaption {
  font: italic smaller sans-serif;
}

.click-zoom input[type="checkbox"] {
  display: none;
}

.click-zoom img {
  transition: transform 0.25s ease;
  cursor: zoom-in;
}

.click-zoom input[type="checkbox"]:checked ~ img {
  transform: scale(2.5);
  cursor: zoom-out;
}
</style>
