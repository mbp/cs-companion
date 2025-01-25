<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import RadarLineups from "./utility/RadarLineups.vue";
import Toggle from "./Toggle.vue";
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
const showRadar = ref(true);
const showSmokesOnly = ref(true);
const showMolosOnly = ref(true);
const showFlashBangsOnly = ref(true);
const showFragGrenadesOnly = ref(true);
const showTerroristsOnly = ref(true);
const showCounterTerroristsOnly = ref(true);
const saveFilters = () => {
  localStorage.setItem("showRadar", JSON.stringify(showRadar.value));
  localStorage.setItem("showSmokesOnly", JSON.stringify(showSmokesOnly.value));
  localStorage.setItem("showMolosOnly", JSON.stringify(showMolosOnly.value));
  localStorage.setItem("showFlashBangsOnly", JSON.stringify(showFlashBangsOnly.value));
  localStorage.setItem("showFragGrenadesOnly", JSON.stringify(showFragGrenadesOnly.value));
  localStorage.setItem("showTerroristsOnly", JSON.stringify(showTerroristsOnly.value));
  localStorage.setItem("showCounterTerroristsOnly", JSON.stringify(showCounterTerroristsOnly.value));
};
const loadFilters = () => {
  showRadar.value = JSON.parse(localStorage.getItem("showRadar") || "true");
  showSmokesOnly.value = JSON.parse(localStorage.getItem("showSmokesOnly") || "true");
  showMolosOnly.value = JSON.parse(localStorage.getItem("showMolosOnly") || "true");
  showFlashBangsOnly.value = JSON.parse(localStorage.getItem("showFlashBangsOnly") || "true");
  showFragGrenadesOnly.value = JSON.parse(localStorage.getItem("showFragGrenadesOnly") || "true");
  showTerroristsOnly.value = JSON.parse(localStorage.getItem("showTerroristsOnly") || "true");
  showCounterTerroristsOnly.value = JSON.parse(localStorage.getItem("showCounterTerroristsOnly") || "true");
};
const clearFilters = () => {
  showRadar.value = true;
  showSmokesOnly.value = true;
  showMolosOnly.value = true;
  showFlashBangsOnly.value = true;
  showFragGrenadesOnly.value = true;
  showTerroristsOnly.value = true;
  showCounterTerroristsOnly.value = true;
  saveFilters();
};
onMounted(() => {
  loadFilters();
});
const onToggleShowRadarListChecked = () => {
  showRadar.value = !showRadar.value;
  saveFilters();
};
const onToggleShowSmokesOnlyChecked = () => {
  showSmokesOnly.value = !showSmokesOnly.value;
  saveFilters();
};
const onToggleShowMolosOnlyChecked = () => {
  showMolosOnly.value = !showMolosOnly.value;
  saveFilters();
};
const onToggleShowFlashBangsOnlyChecked = () => {
  showFlashBangsOnly.value = !showFlashBangsOnly.value;
  saveFilters();
};
const onToggleShowFragGrenadesOnlyChecked = () => {
  showFragGrenadesOnly.value = !showFragGrenadesOnly.value;
  saveFilters();
};
const onToggleShowTerroristsOnlyChecked = () => {
  showTerroristsOnly.value = !showTerroristsOnly.value;
  saveFilters();
};
const onToggleShowCounterTerroristsOnlyChecked = () => {
  showCounterTerroristsOnly.value = !showCounterTerroristsOnly.value;
  saveFilters();
};
const onResetFilters = () => {
  clearFilters();
  loadFilters();
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
                class="mt-2 bg-blue-500 text-white py-1 px-3 rounded-sm"
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
        :initial="showSmokesOnly"
        @checked="onToggleShowSmokesOnlyChecked"
      />
      <Toggle
        label="Molos"
        :initial="showMolosOnly"
        @checked="onToggleShowMolosOnlyChecked"
      />
      <Toggle
        label="Flash"
        :initial="showFlashBangsOnly"
        @checked="onToggleShowFlashBangsOnlyChecked"
      />
      <Toggle
        label="Frag"
        :initial="showFragGrenadesOnly"
        @checked="onToggleShowFragGrenadesOnlyChecked"
      />
      Side filters
      <hr class="px-4 py-2 border-gray-500" />
      <Toggle
        label="T"
        :initial="showTerroristsOnly"
        @checked="onToggleShowTerroristsOnlyChecked"
      />
      <Toggle
        label="CT"
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
      class="mt-2 bg-blue-500 text-white py-1 px-3 rounded-sm cursor-pointer"
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
