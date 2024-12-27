<script setup lang="ts">
import { useRouter } from "vue-router";

var router = useRouter();

const goHome = () => {
  router.push({
    name: "Home",
  });
};

const goCommands = () => {
  router.push({
    name: "Commands",
  });
};
const goMaps = () => {
  router.push({
    name: "Home",
  });
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
        <li class="p-4 hover:bg-gray-700 cursor-pointer" @click="goMaps">
          Maps
        </li>
        <li class="p-4 hover:bg-gray-700 cursor-pointer" @click="goCommands">
          Commands
        </li>
      </ul>
    </nav>
  </div>
</template>
