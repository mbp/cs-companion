<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
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
</script>

<template>
  <header class="bg-gray-800 text-white p-4 flex items-center relative">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search..."
      class="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white max-w-[1024px]"
    />
    <button class="ml-2 p-2 bg-blue-500 text-white rounded-lg">Search</button>
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
  </header>
</template>
