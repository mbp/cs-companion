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
      <figure class="relative">
        <input type="checkbox" class="hidden" />
        <img
          :src="src"
          :style="{
            width: sizePercentage + '%',
            'max-width': (sizePercentage / 100) * 640 + 'px',
          }"
          class="transition-transform duration-250 ease-in-out cursor-zoom-in"
        />
        <figcaption
          class="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2 text-m"
        >
          {{ caption }}
        </figcaption>
      </figure>
    </label>
  </div>
</template>

<style scoped>
.click-zoom input[type="checkbox"]:checked ~ img {
  transform: scale(2.5);
  cursor: zoom-out;
}
.click-zoom input[type="checkbox"]:checked ~ figure > figcaption {
  display: none;
}
</style>
