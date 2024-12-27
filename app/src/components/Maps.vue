<script setup lang="ts">
import { useRouter } from "vue-router";
import { allMapSchemes } from "../data";

var router = useRouter();

const goMap = (mapName: string) => {
  router.push({
    name: "Map",
    params: { mapName: mapName },
  });
};

const getMapIcon = (mapName: string) => {
  return `${mapName.toLocaleLowerCase()}/icon.svg`;
};
</script>

<template>
  <div
    class="map-tiles grid gap-4 grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
  >
    <a
      v-for="mapScheme in allMapSchemes"
      :key="mapScheme.map"
      @click="goMap(mapScheme.map)"
      ><img class="w-full" style="width: 100%" :src="getMapIcon(mapScheme.map)"
    /></a>
  </div>
</template>

<style scoped>
h1 {
  text-shadow:
    0 0 3px #646cffaa,
    0 0 5px #646cffaa;
}
.map-tiles a {
  cursor: pointer;
}
.map-tile:hover {
  filter: drop-shadow(0 0 1em #646cffaa);
}
</style>
