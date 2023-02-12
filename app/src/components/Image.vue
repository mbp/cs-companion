<script setup lang="ts">
import { computed, ref } from "vue";

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
  width: 640px;
}
img.default {
  width: 280px;
}
</style>
