<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { allMapSchemes } from "../data";
import Navigation from "./Navigation.vue";
import RadarStrategy from "./RadarStrategy.vue";
import StrategyInfo from "./StrategyInfo.vue";

const route = useRoute();

const id = route.params.id as string;
const mapName = route.params.mapName as string;

const strat = computed(() => {
  return allMapSchemes
    .find((x) => x.map == mapName)
    ?.strats.find((x) => x.id == id)!;
});
</script>

<template>
  <Navigation
    :current="strat.name"
    :parents="[
      { routeName: 'Home', title: 'Home' },
      { routeName: 'Map', title: mapName, params: { mapName: mapName } },
    ]"
  />
  <div>
    <StrategyInfo :strategy="strat" />
    <RadarStrategy :map-name="mapName" :player-paths="strat.playerPaths!" />
  </div>
</template>
