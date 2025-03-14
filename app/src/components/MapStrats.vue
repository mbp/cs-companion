<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { Strategy } from "./strategy/types";
import { computed } from "vue";
import { getMapScheme } from "./composables/get-map-scheme";
import { getSideImage } from "./composables/get-side-image";

const route = useRoute();
const router = useRouter();
const mapName = route.params.mapName as string;

const mapScheme = computed(() => getMapScheme(mapName));

const groupedStrats = computed(() => {
  const groups: Record<string, Strategy[]> = {};
  mapScheme.value.strats.forEach((strat: Strategy) => {
    if (!groups[strat.buyType]) {
      groups[strat.buyType] = [];
    }
    groups[strat.buyType].push(strat);
  });
  return groups;
});

const openStrat = (strat: Strategy) => {
  router.push({
    name: "Strategy",
    params: {
      mapName: mapName,
      id: strat.id,
    },
  });
};
</script>

<template>
  <h2 class="text-2xl font-bold mb-4 text-center text-white-800">
    Strategies for {{ mapName }}
  </h2>
  <div class="p-4">
    <div v-for="(strats, buyType) in groupedStrats" :key="buyType">
      <h3 class="text-xl font-bold mb-2 text-white-800">
        Buy type: {{ buyType }}
      </h3>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div
          class="bg-gray-600 shadow-md rounded-lg p-4"
          v-for="strat in strats"
          :key="strat.id"
        >
          Side:
          <img
            :src="getSideImage(strat.side)"
            class="side-icon-header"
            style="display: inline-block"
          />
          <p class="font-bold">
            {{ strat.name }}
          </p>
          <button
            @click="openStrat(strat)"
            class="mt-2 bg-teal-800 text-white py-1 px-3 rounded-sm cursor-pointer hover:bg-teal-600 hover:shadow-lg"
          >
            Open
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
