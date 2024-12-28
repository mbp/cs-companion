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
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4 text-center text-white-800">
      Strategies
    </h2>
    <ul class="space-y-4">
      <li
        v-for="strat in mapScheme.strats"
        :key="strat.id"
        class="bg-white p-4 rounded-lg shadow-md"
      >
        <button @click="openStrat(strat)" class="text-blue-500 hover:underline">
          {{ strat.name }}</button
        ><br />
        <span class="text-gray-600"
          >({{ strat.buyType }}, {{ strat.side }})</span
        >
      </li>
    </ul>
  </div>
</template>
