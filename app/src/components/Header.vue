<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { allMapSchemes } from "../data";
import { Icon } from "@iconify/vue";

var router = useRouter();

const searchQuery = ref("");
const isSearchActive = ref(false);
const toggleSearch = () => {
  isSearchActive.value = !isSearchActive.value;
};

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

const isHomeRoute = computed(() => route.name === "Home");

const breadcrumbs = computed(() => {
  const paths = route.path.split("/").filter(Boolean);
  const breadcrumbPaths = paths.map((path, index) => ({
    text: (path.charAt(0).toUpperCase() + path.slice(1)).replace(/-/g, " "),
    to: "/" + paths.slice(0, index + 1).join("/"),
  }));
  return [{ text: "🏠 Home", to: "/" }, ...breadcrumbPaths];
});
</script>

<template>
  <nav class="bg-gray-900 px-4 py-2">
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
        <span
          class="text-gray-300 hover:text-white cursor-pointer"
          @click="toggleSearch"
        >
          <Icon style="display: inline-block" icon="ri:search-line" />
        </span>
        <input
          v-if="isSearchActive"
          v-model="searchQuery"
          type="text"
          class="bg-gray-700 text-white rounded-full px-4 py-1 focus:outline-hidden focus:ring-2 focus:ring-gray-600"
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
    <div v-if="!isHomeRoute" class="container mx-auto mt-2">
      <nav class="text-gray-400">
        <ul class="flex space-x-2">
          <li
            v-for="(breadcrumb, index) in breadcrumbs"
            :key="index"
            class="flex items-center"
          >
            <router-link :to="breadcrumb.to" class="hover:text-white">
              {{ breadcrumb.text }}
            </router-link>
            <span
              v-if="index < breadcrumbs.length - 1"
              class="mx-2 text-gray-500"
              >/</span
            >
          </li>
        </ul>
      </nav>
    </div>
  </nav>
</template>
