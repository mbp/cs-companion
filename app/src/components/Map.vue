<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { allMapSchemes } from "../data";
import Radar from "./Radar.vue";
import Toggle from "./Toggle.vue";
import Navigation from "./Navigation.vue";
import { UtilityLineup } from "./composables/types";

const route = useRoute();
const router = useRouter();
const mapName = route.params.mapName as string;
const mapScheme = computed(() => {
  return allMapSchemes.find((x) => x.map == (mapName as string))!;
});

const smokes = computed(() => {
  return mapScheme.value.lineUps.filter(
    (x) => x.nadeType == "smoke" && x.coordinates
  );
});

const fragGrenades = computed(() => {
  return mapScheme.value.lineUps.filter(
    (x) => x.nadeType == "frag" && x.coordinates
  );
});

const molos = computed(() => {
  return mapScheme.value.lineUps.filter(
    (x) => x.nadeType == "molo" && x.coordinates
  );
});

const flashBangs = computed(() => {
  return mapScheme.value.lineUps.filter(
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
      nadeType: utility.nadeType,
      id: utility.id,
    },
  });
};
const showLineups = ref(true);
const showLineupList = ref(false);
const onToggleShowLineupsChecked = () => {
  showLineups.value = !showLineups.value;
};
const onToggleShowLineupListChecked = () => {
  showLineupList.value = !showLineupList.value;
};
</script>

<template>
  <Navigation
    :current="mapName"
    :parents="[{ routeName: 'Home', title: 'Home' }]"
  />

  Show strats <Toggle @checked="onToggleShowLineupsChecked" />

  <div v-if="showLineups">
    Show list <Toggle @checked="onToggleShowLineupListChecked" />
    <div v-if="!showLineupList">
      <Radar
        :lineUps="mapScheme.lineUps"
        :mapName="mapName"
        @selectedUtility="setSelectedUtility"
      />
    </div>

    <div v-if="showLineupList">
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
        <button @click="openUtility(fragGrenade)">
          {{ fragGrenade.name }}
        </button>
      </div>
    </div>
  </div>

  <div v-if="!showLineups">
    <h2>Strategies</h2>
    <div v-for="strat in mapScheme.strats">
      <h3>{{ strat.name }}</h3>
      ({{ strat.buyType }}, {{ strat.side }})
      <p>
        {{ strat.description }}
      </p>
    </div>
  </div>
</template>
