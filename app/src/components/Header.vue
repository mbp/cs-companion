<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { allMapSchemes } from "../data";

var router = useRouter();

const searchQuery = ref("");

const filteredMaps = computed(() => {
  if (!searchQuery.value) return [];
  return allMapSchemes.filter((map) =>
    map.map.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});

const goMap = (mapName: string) => {
  router.push({
    name: "MapUtility",
    params: { mapName: mapName },
  });
  searchQuery.value = "";
};

var router = useRouter();
var route = useRoute();

const goHome = () => {
  router.push({
    name: "Home",
  });
};

const goMapsUtility = () => {
  router.push({
    name: "MapsUtility",
  });
};
const goMapsStrats = () => {
  router.push({
    name: "MapsStrats",
  });
};
const goCommands = () => {
  router.push({
    name: "Commands",
  });
};

const isActive = (name: string) => {
  return computed(() => {
    const currentRoute = router.resolve({ name });
    return route.path.startsWith(currentRoute.path);
  });
};
</script>

<template>
  <nav class="bg-gray-900 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div
        class="text-white text-lg font-semibold cursor-pointer"
        @click="goHome"
      >
        Counter-Strike Companion
      </div>
      <div class="flex space-x-4">
        <a
          :class="[
            'text-gray-300 hover:text-white cursor-pointer',
            { 'font-bold text-white': isActive('MapsUtility').value },
          ]"
          @click="goMapsUtility"
          >Utility</a
        >
        <a
          :class="[
            'text-gray-300 hover:text-white cursor-pointer',
            { 'font-bold text-white': isActive('MapsStrats').value },
          ]"
          @click="goMapsStrats"
          >Strategy</a
        >
        <a
          :class="[
            'text-gray-300 hover:text-white cursor-pointer',
            { 'font-bold text-white': isActive('Commands').value },
          ]"
          @click="goCommands"
          >Commands</a
        >
      </div>
      <div class="relative">
        <input
          v-model="searchQuery"
          type="text"
          class="bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-hidden focus:ring-2 focus:ring-gray-600"
          placeholder="Search..."
        />
        <ul
          v-if="filteredMaps.length"
          class="absolute top-full left-0 w-full bg-gray-700 text-white mt-1 rounded-lg shadow-lg"
        >
          <li
            v-for="map in filteredMaps"
            :key="map.map"
            class="p-2 hover:bg-gray-600 cursor-pointer"
            @click="goMap(map.map)"
          >
            {{ map.map }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
