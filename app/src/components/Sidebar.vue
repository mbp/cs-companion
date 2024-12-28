<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

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
  return computed(() => route.name === name);
};
</script>

<template>
  <div class="w-32 bg-gray-900 text-white flex flex-col">
    <div class="p-4 text-lg font-bold cursor-pointer" @click="goHome">
      CS2<br />
      Companion
    </div>
    <hr class="border-gray-700" />
    <nav class="flex-1">
      <ul>
        <li
          :class="[
            { 'bg-gray-700': isActive('MapsUtility').value },
            'p-4 hover:bg-gray-700 cursor-pointer',
          ]"
          @click="goMapsUtility"
        >
          Utility
        </li>
        <li
          :class="[
            { 'bg-gray-700': isActive('MapsStrats').value },
            'p-4 hover:bg-gray-700 cursor-pointer',
          ]"
          @click="goMapsStrats"
        >
          Strats
        </li>
        <li
          :class="[
            { 'bg-gray-700': isActive('Commands').value },
            'p-4 hover:bg-gray-700 cursor-pointer',
          ]"
          @click="goCommands"
        >
          Commands
        </li>
      </ul>
    </nav>
  </div>
</template>
