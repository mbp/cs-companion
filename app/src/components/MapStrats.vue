<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { Strategy } from "./strategy/types";
import { computed } from "vue";
import { getMapScheme } from "./composables/get-map-scheme";

const route = useRoute();
const router = useRouter();
const mapName = route.params.mapName as string;

const mapScheme = computed(() => getMapScheme(mapName));

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
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
    <div
      class="bg-gray-600 shadow-md rounded-lg p-4"
      v-for="strat in mapScheme.strats"
      :key="strat.id"
    >
      <p class="font-bold">
        {{ strat.name }}
      </p>
      <button
        @click="openStrat(strat)"
        class="mt-2 bg-blue-500 text-white py-1 px-3 rounded-sm"
      >
        Open
      </button>
      <br />
      <ul>
        <li>Side: {{ strat.side }}</li>
        <li>Buy: {{ strat.buyType }}</li>
      </ul>
    </div>
  </div>
</template>
