<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { allMapSchemes } from "../data";
import RadarLineups from "./RadarLineups.vue";
import Toggle from "./Toggle.vue";
import Navigation from "./Navigation.vue";
import { NadeType, Side, UtilityLineup } from "./composables/types";

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
    @checked="onToggleShowStratsChecked"
    label="Strats"
    :initial="false"
  />
  <Toggle
    @checked="onToggleShowRadarListChecked"
    label="Radar"
    :initial="true"
  />
  <Toggle
    @checked="onToggleShowSmokesOnlyChecked"
    label="Smokes"
    :initial="true"
  />
  <Toggle
    @checked="onToggleShowMolosOnlyChecked"
    label="Molos"
    :initial="true"
  />
  <Toggle
    @checked="onToggleShowFlashBangsOnlyChecked"
    label="Flash"
    :initial="true"
  />
  <Toggle
    @checked="onToggleShowFragGrenadesOnlyChecked"
    label="Frag"
    :initial="true"
  />
  <Toggle
    @checked="onToggleShowTerroristsOnlyChecked"
    label="T"
    :initial="true"
  />
  <Toggle
    @checked="onToggleShowCounterTerroristsOnlyChecked"
    label="CT"
    :initial="true"
  />

  <div v-if="!showStrats">
    <div v-if="showRadar">
      <RadarLineups
        :lineUps="lineUps"
        :mapName="mapName"
        @selectedUtility="setSelectedUtility"
      />
    </div>

    <div v-if="!showRadar">
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

  <div v-if="showStrats">
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
