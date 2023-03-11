<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  src: string;
  caption: string;
  initialZoom: boolean;
}>();
const zoom = ref(props.initialZoom);
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
