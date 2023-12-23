<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { allMapSchemes } from "../data";
import RadarLineups from "./utility/RadarLineups.vue";
import Toggle from "./Toggle.vue";
import Navigation from "./Navigation.vue";
import { Side } from "./types";
import { Strategy } from "./strategy/types";
import { NadeType, UtilityLineup } from "./utility/types";

const route = useRoute();
const router = useRouter();
const mapName = route.params.mapName as string;
const mapScheme = computed(() => {
  return allMapSchemes.find((x) => x.map == (mapName as string))!;
});

const smokes = computed(() => {
  return lineUps.value.filter((x) => x.nadeType == "smoke" && x.coordinates);
});

const fragGrenades = computed(() => {
  return lineUps.value.filter((x) => x.nadeType == "frag" && x.coordinates);
});

const molos = computed(() => {
  return lineUps.value.filter((x) => x.nadeType == "molo" && x.coordinates);
});

const flashBangs = computed(() => {
  return lineUps.value.filter(
    (x) => x.nadeType == "flashbang" && x.coordinates,
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
const openStrat = (strat: Strategy) => {
  router.push({
    name: "Strategy",
    params: {
      mapName: mapName,
      id: strat.id,
    },
  });
};
const showStrats = ref(false);
const showRadar = ref(true);
const showSmokesOnly = ref(true);
const showMolosOnly = ref(true);
const showFlashBangsOnly = ref(true);
const showFragGrenadesOnly = ref(true);
const showTerroristsOnly = ref(true);
const showCounterTerroristsOnly = ref(true);
const onToggleShowStratsChecked = () => {
  showStrats.value = !showStrats.value;
};
const onToggleShowRadarListChecked = () => {
  showRadar.value = !showRadar.value;
};
const onToggleShowSmokesOnlyChecked = () => {
  showSmokesOnly.value = !showSmokesOnly.value;
};
const onToggleShowMolosOnlyChecked = () => {
  showMolosOnly.value = !showMolosOnly.value;
};
const onToggleShowFlashBangsOnlyChecked = () => {
  showFlashBangsOnly.value = !showFlashBangsOnly.value;
};
const onToggleShowFragGrenadesOnlyChecked = () => {
  showFragGrenadesOnly.value = !showFragGrenadesOnly.value;
};
const onToggleShowTerroristsOnlyChecked = () => {
  showTerroristsOnly.value = !showTerroristsOnly.value;
};
const onToggleShowCounterTerroristsOnlyChecked = () => {
  showCounterTerroristsOnly.value = !showCounterTerroristsOnly.value;
};
const lineUps = computed(() => {
  return mapScheme.value.lineUps.filter((x) => {
    const selectedNadeTypes: NadeType[] = [];
    if (showSmokesOnly.value) {
      selectedNadeTypes.push("smoke");
    }
    if (showFragGrenadesOnly.value) {
      selectedNadeTypes.push("frag");
    }
    if (showMolosOnly.value) {
      selectedNadeTypes.push("molo");
    }
    if (showFlashBangsOnly.value) {
      selectedNadeTypes.push("flashbang");
    }

    const selectedSides: Side[] = [];
    if (showTerroristsOnly.value) {
      selectedSides.push("t");
    }
    if (showCounterTerroristsOnly.value) {
      selectedSides.push("ct");
    }

    return (
      selectedNadeTypes.includes(x.nadeType) && selectedSides.includes(x.side)
    );
  });
});
</script>

<template>
  <Navigation
    :current="mapName"
    :parents="[{ routeName: 'Home', title: 'Home' }]"
  />

  <Toggle
    label="Strats"
    :initial="false"
    @checked="onToggleShowStratsChecked"
  />
  <Toggle
    label="Radar"
    :initial="true"
    @checked="onToggleShowRadarListChecked"
  />
  <Toggle
    label="Smokes"
    :initial="true"
    @checked="onToggleShowSmokesOnlyChecked"
  />
  <Toggle
    label="Molos"
    :initial="true"
    @checked="onToggleShowMolosOnlyChecked"
  />
  <Toggle
    label="Flash"
    :initial="true"
    @checked="onToggleShowFlashBangsOnlyChecked"
  />
  <Toggle
    label="Frag"
    :initial="true"
    @checked="onToggleShowFragGrenadesOnlyChecked"
  />
  <Toggle
    label="T"
    :initial="true"
    @checked="onToggleShowTerroristsOnlyChecked"
  />
  <Toggle
    label="CT"
    :initial="true"
    @checked="onToggleShowCounterTerroristsOnlyChecked"
  />

  <div v-if="!showStrats">
    <div v-if="showRadar">
      <RadarLineups
        :line-ups="lineUps"
        :map-name="mapName"
        @selected-utility="setSelectedUtility"
      />
    </div>

    <div v-if="!showRadar">
      <h2>Smoke Grenade</h2>
      <ul>
        <li v-for="smoke in smokes" :key="smoke.id">
          <button @click="openUtility(smoke)">
            {{ smoke.name }}
          </button>
        </li>
      </ul>
      <h2>Molotov / Incendiary Grenade</h2>
      <ul>
        <li v-for="molo in molos" :key="molo.id">
          <button @click="openUtility(molo)">
            {{ molo.name }}
          </button>
        </li>
      </ul>
      <h2>Flashbang</h2>
      <ul>
        <li v-for="flash in flashBangs" :key="flash.id">
          <button @click="openUtility(flash)">
            {{ flash.name }}
          </button>
        </li>
      </ul>
      <h2>Frag Grenade</h2>
      <ul>
        <li v-for="fragGrenade in fragGrenades" :key="fragGrenade.id">
          <button @click="openUtility(fragGrenade)">
            {{ fragGrenade.name }}
          </button>
        </li>
      </ul>
    </div>
  </div>

  <div v-if="showStrats">
    <h2>Strategies</h2>
    <div v-for="strat in mapScheme.strats" :key="strat.id">
      <h3>{{ strat.name }}</h3>
      <button @click="openStrat(strat)">OPEN</button>
      ({{ strat.buyType }}, {{ strat.side }})
      <p>
        {{ strat.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
ul {
  columns: 2;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
