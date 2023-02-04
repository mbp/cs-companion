<script setup lang="ts">
import { computed, ref } from "vue";

defineProps<{ src: string; caption: string }>();
const zoom = ref(false);
const doZoom = () => {
  zoom.value = !zoom.value;
};
const width = computed(() => {
  return zoom.value ? "640px" : "280px";
});
</script>

<template>
  <img @click="doZoom" :src="src" :style="{ width: width }" />
  <figcaption>{{ caption }}</figcaption>
</template>

<style scoped>
img {
  cursor: pointer;
}
</style>
