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
const setSelectedUtility = (utility: UtilityLineup) => {
  selectedUtility.value = utility;
};

const openUtility = (utility: UtilityLineup) => {
  selectedUtility.value = utility;
};
const closeModal = () => {
  selectedUtility.value = undefined;
};
</script>

<template>
  <router-link to="/">Home</router-link>
  <h2>
    {{ mapName }}
  </h2>

  <Radar
    :utilites="utilites"
    :mapName="mapName"
    @selectedUtility="setSelectedUtility"
  />

  <div v-if="selectedUtility" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <Utility :utilityLineup="selectedUtility" />
    </div>
  </div>

  <h2>Smoke Grenade</h2>
  <div v-for="smoke in utilites.smokes">
    <button @click="openUtility(smoke)">{{ smoke.name }}</button>
  </div>
  <h2>Molotov / Incendiary Grenade</h2>
  <div v-for="molo in utilites.molotovs">
    <button @click="openUtility(molo)">{{ molo.name }}</button>
  </div>
  <h2>Flashbang</h2>
  <div v-for="flash in utilites.flashBangs">
    <button @click="openUtility(flash)">{{ flash.name }}</button>
  </div>
  <h2>Frag Grenade</h2>
  <div v-for="nade in utilites.fragGrenades">
    <button @click="openUtility(nade)">{{ nade.name }}</button>
  </div>
</template>

<style>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #242424;
  margin: 1% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
