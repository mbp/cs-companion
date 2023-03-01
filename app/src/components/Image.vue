<script setup lang="ts">
import { ref } from "vue";

defineProps<{ src: string; caption: string }>();
const zoom = ref(false);
const doZoom = () => {
  zoom.value = !zoom.value;
};
</script>

<template>
  <img @click="doZoom" :src="src" :class="{ zoom: zoom, default: !zoom }" />
  <figcaption>{{ caption }}</figcaption>
</template>

<style scoped>
img {
  cursor: pointer;
}
img.zoom {
  width: 100%;
  max-width: 640px;
}
img.default {
  width: 50%;
  max-width: 320px;
}
figcaption {
  font: italic smaller sans-serif;
}
</style>
