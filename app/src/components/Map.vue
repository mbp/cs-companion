<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { allUtilities } from "../data";
import Utility from "./Utility.vue";
import Radar from "./Radar.vue";
import { UtilityLineup } from "./composables/types";

const route = useRoute();
const mapName = route.params.mapName as string;
const utilites = computed(() => {
  return allUtilities.find((x) => x.map == (mapName as string))!;
});

const selectedUtility = ref<UtilityLineup | undefined>();
const callback = (utility: UtilityLineup) => {
  selectedUtility.value = utility;
};
</script>

<template>
  <h1>
    {{ mapName }}
  </h1>
  <h2>{{ selectedUtility?.name }}</h2>

  <Radar :utilites="utilites" :mapName="mapName" @selectedUtility="callback" />

  <h2>Smoke Grenade</h2>
  <div v-for="smoke in utilites.smokes">
    <Utility :utilityLineup="smoke" />
  </div>
  <h2>Molotov / Incendiary Grenade</h2>
  <div v-for="molo in utilites.molotovs">
    <Utility :utilityLineup="molo" />
  </div>
  <h2>Flashbang</h2>
  <div v-for="flash in utilites.flashBangs">
    <Utility :utilityLineup="flash" />
  </div>
  <h2>Frag Grenade</h2>
  <div v-for="nade in utilites.fragGrenades">
    <Utility :utilityLineup="nade" />
  </div>
</template>

<style>
canvas {
  cursor: crosshair;
}
</style>
