<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { allUtilities } from "../data";
import Utility from "./Utility.vue";

const route = useRoute();
const mapName = route.params.mapName;
const utilites = computed(() => {
  return allUtilities.find((x) => x.map == (mapName as string))!;
});
</script>

<template>
  <h1>
    {{ mapName }}
  </h1>

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
