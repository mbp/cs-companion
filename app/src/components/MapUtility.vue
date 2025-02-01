<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import RadarLineups from "./utility/RadarLineups.vue";
import Toggle from "./Toggle.vue";
import { Side } from "./types";
import { NadeType, UtilityLineup } from "./utility/types";
import { getMapScheme } from "./composables/get-map-scheme";
import { useLocalStorage } from "@vueuse/core";
import { getSideImage } from "./composables/get-side-image";
import { nadeSvgs } from "../inline-assets/utility";

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

const getNadeSvg = (nadeType: string) => {
  return nadeSvgs.find((x) => x.nadeType == nadeType)?.svg;
};

const allUtility = computed(() => {
  return [
    {
      category: "Smoke Grenade",
      utilities: smokes.value,
    },
    {
      category: "Molotov / Incendiary Grenade",
      utilities: molos.value,
    },
    {
      category: "Flashbang",
      utilities: flashBangs.value,
    },
    {
      category: "Frag Grenade",
      utilities: fragGrenades.value,
    },
  ];
});

const setSelectedUtility = (utility: UtilityLineup) => {
  openUtility(utility);
};

const openUtility = (utility: UtilityLineup) => {
  document.body.style.cursor = "";
  router.push({
    name: "Lineup",
    params: {
      mapName: mapName,
      nadeType: utility.nadeType,
      id: utility.id,
    },
  });
};
const showRadar = useLocalStorage("showRadar", true);
const showSmokesOnly = useLocalStorage("showSmokesOnly", true);
const showMolosOnly = useLocalStorage("showMolosOnly", true);
const showFlashBangsOnly = useLocalStorage("showFlashBangsOnly", true);
const showFragGrenadesOnly = useLocalStorage("showFragGrenadesOnly", true);
const showTerroristsOnly = useLocalStorage("showTerroristsOnly", true);
const showCounterTerroristsOnly = useLocalStorage(
  "showCounterTerroristsOnly",
  true,
);

const clearFilters = () => {
  showRadar.value = true;
  showSmokesOnly.value = true;
  showMolosOnly.value = true;
  showFlashBangsOnly.value = true;
  showFragGrenadesOnly.value = true;
  showTerroristsOnly.value = true;
  showCounterTerroristsOnly.value = true;
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
const onResetFilters = () => {
  clearFilters();
};

const lineUps = computed(() => {
  return mapScheme.value.lineUps.filter((x) => {
    const selectedSides = getSelectedSides.value;
    const selectedNadeTypes = getSelectedNadeTypes.value;

    return (
      selectedNadeTypes.includes(x.nadeType) && selectedSides.includes(x.side)
    );
  });
});

const getSelectedNadeTypes = computed(() => {
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
  return selectedNadeTypes;
});

const getSelectedSides = computed(() => {
  const selectedSides: Side[] = [];
  if (showTerroristsOnly.value) {
    selectedSides.push("t");
  }
  if (showCounterTerroristsOnly.value) {
    selectedSides.push("ct");
  }
  return selectedSides;
});
</script>

<template>
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
        <div
          v-for="utilityCategory in allUtility"
          :key="utilityCategory.category"
        >
          <h2 class="text-xl font-bold mb-4 text-center text-white-800">
            {{ utilityCategory.category }}
          </h2>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
            <div
              class="bg-gray-600 shadow-md rounded-lg p-4"
              v-for="utility in utilityCategory.utilities"
              :key="utility.id"
            >
              <p class="font-bold">
                {{ utility.name }}
              </p>
              <button
                @click="openUtility(utility)"
                class="mt-2 bg-teal-800 text-white py-1 px-3 rounded-sm cursor-pointer hover:bg-teal-600 hover:shadow-lg"
              >
                Open
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shrink-0 pl-2">
      Utility filters
      <hr class="px-4 py-2 border-gray-500" />
      <Toggle
        label="Smokes"
        :svg="getNadeSvg('smoke')"
        :initial="showSmokesOnly"
        @checked="onToggleShowSmokesOnlyChecked"
      />
      <Toggle
        label="Molos"
        :svg="getNadeSvg('molo')"
        :initial="showMolosOnly"
        @checked="onToggleShowMolosOnlyChecked"
      />
      <Toggle
        label="Flash"
        :svg="getNadeSvg('flashbang')"
        :initial="showFlashBangsOnly"
        @checked="onToggleShowFlashBangsOnlyChecked"
      />
      <Toggle
        label="Frag"
        :svg="getNadeSvg('frag')"
        :initial="showFragGrenadesOnly"
        @checked="onToggleShowFragGrenadesOnlyChecked"
      />
      Side filters
      <hr class="px-4 py-2 border-gray-500" />
      <Toggle
        label="T"
        :img="getSideImage('t')"
        :initial="showTerroristsOnly"
        @checked="onToggleShowTerroristsOnlyChecked"
      />
      <Toggle
        label="CT"
        :img="getSideImage('ct')"
        :initial="showCounterTerroristsOnly"
        @checked="onToggleShowCounterTerroristsOnlyChecked"
      />
      Other filters
      <hr class="px-4 py-2 border-gray-500" />
      <Toggle
        label="Radar"
        :initial="showRadar"
        @checked="onToggleShowRadarListChecked"
      />
      <button
        class="mt-2 bg-teal-800 text-white py-1 px-3 rounded-sm cursor-pointer hover:bg-teal-600 hover:shadow-lg"
        @click="onResetFilters"
      >
        Reset filters
      </button>
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
