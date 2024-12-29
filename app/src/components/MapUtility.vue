<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import RadarLineups from "./utility/RadarLineups.vue";
import Toggle from "./Toggle.vue";
import Navigation from "./Navigation.vue";
import { Side } from "./types";
import { NadeType, UtilityLineup } from "./utility/types";
import { getMapScheme } from "./composables/get-map-scheme";

const route = useRoute();
const router = useRouter();
const mapName = route.params.mapName as string;

const mapScheme = computed(() => getMapScheme(mapName));

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
    name: "Lineup",
    params: {
      mapName: mapName,
      nadeType: utility.nadeType,
      id: utility.id,
    },
  });
};
const showRadar = ref(true);
const showSmokesOnly = ref(true);
const showMolosOnly = ref(true);
const showFlashBangsOnly = ref(true);
const showFragGrenadesOnly = ref(true);
const showTerroristsOnly = ref(true);
const showCounterTerroristsOnly = ref(true);
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

  <div class="flex justify-center">
    <div class="w-[1024px]">
      <div v-if="showRadar" class="bg-gray-900">
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
    <div class="flex-shrink-0 pl-2">
      Utility filters
      <hr class="px-4 py-2 border-gray-500" />
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
      Side filters
      <hr class="px-4 py-2 border-gray-500" />
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
      Other filters
      <hr class="px-4 py-2 border-gray-500" />
      <Toggle
        label="Radar"
        :initial="true"
        @checked="onToggleShowRadarListChecked"
      />
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
