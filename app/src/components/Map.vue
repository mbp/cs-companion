<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { allUtilities } from "../data";
import Utility from "./Utility.vue";
import Radar from "./Radar.vue";
import Toggle from "./Toggle.vue";
import Navigation from "./Navigation.vue";
import { UtilityLineup } from "./composables/types";

const route = useRoute();
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
let modalElement = ref<HTMLElement>();

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
watch(selectedUtility, async (newState) => {
  if (newState) {
    await nextTick();

    modalElement.value?.focus();
  }
});
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

  <div
    v-if="selectedUtility"
    class="modal"
    @keydown.esc="closeModal"
    tabindex="0"
  >
    <div class="modal-content">
      <button class="close" @click="closeModal" ref="modalElement">
        &times;
      </button>
      <Utility :utilityLineup="selectedUtility" :mapName="mapName" />
    </div>
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
