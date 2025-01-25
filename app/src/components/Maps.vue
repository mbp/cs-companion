<script setup lang="ts">
import { useRouter } from "vue-router";
import { allMapSchemes } from "../data";

const props = defineProps<{
  routeName: string;
}>();

var router = useRouter();

const goMap = (mapName: string) => {
  router.push({
    name: props.routeName,
    params: { mapName: mapName },
  });
};

const getMapIcon = (mapName: string) => {
  return `${mapName.toLocaleLowerCase()}/icon.svg`;
};
</script>

<template>
  <div class="map-tiles grid gap-5 grid-cols-5 max-w-(--breakpoint-lg) mx-auto">
    <a
      class="map-tile"
      v-for="mapScheme in allMapSchemes"
      :key="mapScheme.map"
      @click="goMap(mapScheme.map)"
      ><img class="w-full" style="width: 100%" :src="getMapIcon(mapScheme.map)"
    /></a>
  </div>
</template>

<style scoped>
.map-tiles a {
  cursor: pointer;
}
.map-tile:hover {
  filter: drop-shadow(0 0 1em #646cffaa);
}
</style>
