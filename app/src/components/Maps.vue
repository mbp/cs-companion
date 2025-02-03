<script setup lang="ts">
import { useRouter } from "vue-router";
import { allMapSchemes } from "../data";
import { computed } from "vue";

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

const activeDutyMapSchemes = computed(() =>
  allMapSchemes.filter((x) => x.activeDuty),
);
const reserveMapSchemes = computed(() =>
  allMapSchemes.filter((x) => !x.activeDuty),
);
</script>

<template>
  <h3 class="text-xl font-bold mb-4 text-center text-white-800">Active duty</h3>
  <div class="map-tiles grid gap-5 grid-cols-4 max-w-(--breakpoint-lg) mx-auto">
    <a
      class="map-tile"
      v-for="mapScheme in activeDutyMapSchemes"
      :key="mapScheme.map"
      @click="goMap(mapScheme.map)"
      ><img class="w-full" style="width: 100%" :src="getMapIcon(mapScheme.map)"
    /></a>
  </div>

  <h3 class="text-xl font-bold mb-4 text-center text-white-800 py-6">
    Reserve
  </h3>
  <div class="map-tiles grid gap-5 grid-cols-4 max-w-(--breakpoint-lg) mx-auto">
    <a
      class="map-tile"
      v-for="mapScheme in reserveMapSchemes"
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
