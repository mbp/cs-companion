<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import Navigation from "../Navigation.vue";
import RadarStrategy from "./RadarStrategy.vue";
import StrategyInfo from "./StrategyInfo.vue";
import { getMapScheme } from "../composables/get-map-scheme";

const route = useRoute();

const id = route.params.id as string;
const mapName = route.params.mapName as string;

const strat = computed(() => {
  return getMapScheme(mapName).strats.find((x) => x.id == id)!;
});
const lineUps = computed(() => {
  return getMapScheme(mapName).lineUps;
});
</script>

<template>
  <Navigation
    :current="strat.name"
    :parents="[
      { routeName: 'Home', title: 'Home' },
      { routeName: 'MapStrats', title: mapName, params: { mapName: mapName } },
    ]"
  />
  <div>
    <StrategyInfo :strategy="strat" />
    <div v-if="!strat.events">No graphical available yet</div>
    <RadarStrategy
      v-if="strat.events"
      :map-name="mapName"
      :strategy-events="strat.events"
      :line-ups="lineUps"
    />
  </div>
</template>
