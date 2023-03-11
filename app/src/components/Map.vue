<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { allUtilities } from "../data";
import Radar from "./Radar.vue";
import Toggle from "./Toggle.vue";
import Navigation from "./Navigation.vue";
import { UtilityLineup } from "./composables/types";

const route = useRoute();
const router = useRouter();
const mapName = route.params.mapName as string;
const utilites = computed(() => {
  return allUtilities.find((x) => x.map == (mapName as string))!;
});

const smokes = computed(() => {
  return utilites.value.lineUps.filter(
    (x) => x.nadeType == "smoke" && x.coordinates
  );
});

const fragGrenades = computed(() => {
  return utilites.value.lineUps.filter(
    (x) => x.nadeType == "frag" && x.coordinates
  );
});

const molos = computed(() => {
  return utilites.value.lineUps.filter(
    (x) => x.nadeType == "molo" && x.coordinates
  );
});

const flashBangs = computed(() => {
  return utilites.value.lineUps.filter(
    (x) => x.nadeType == "flashbang" && x.coordinates
  );
});

const setSelectedUtility = (utility: UtilityLineup) => {
  openUtility(utility);
};

const openUtility = (utility: UtilityLineup) => {
  router.push({
    name: "Utility",
    params: {
      mapName: mapName,
      id: utility.id,
    },
  });
};
const showList = ref(false);
const onToggleChecked = () => {
  showList.value = !showList.value;
};
</script>

<template>
  <Navigation :current="mapName" />

  <Toggle @checked="onToggleChecked" />

  <div v-if="!showList">
    <Radar
      :utilites="utilites"
      :mapName="mapName"
      @selectedUtility="setSelectedUtility"
    />
  </div>

  <div v-if="showList">
    <h2>Smoke Grenade</h2>
    <div v-for="smoke in smokes">
      <button @click="openUtility(smoke)">{{ smoke.name }}</button>
    </div>
    <h2>Molotov / Incendiary Grenade</h2>
    <div v-for="molo in molos">
      <button @click="openUtility(molo)">{{ molo.name }}</button>
    </div>
    <h2>Flashbang</h2>
    <div v-for="flash in flashBangs">
      <button @click="openUtility(flash)">{{ flash.name }}</button>
    </div>
    <h2>Frag Grenade</h2>
    <div v-for="fragGrenade in fragGrenades">
      <button @click="openUtility(fragGrenade)">{{ fragGrenade.name }}</button>
    </div>
  </div>
</template>
