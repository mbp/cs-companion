<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { allMapSchemes } from "../data";
import Navigation from "./Navigation.vue";
import RadarStrategy from "./RadarStrategy.vue";

const route = useRoute();

const id = route.params.id as string;
const mapName = route.params.mapName as string;

const playerPaths = computed(() => {
  return allMapSchemes
    .find((x) => x.map == mapName)
    ?.strats.find((x) => x.id == id)?.playerPaths!;
});
</script>

<template>
  <RadarStrategy :map-name="mapName" :player-paths="playerPaths" />
</template>
