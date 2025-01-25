<template>
  <div
    class="grid grid-cols-4 grid-rows-1 gap-0 bg-green-900 justify-items-center rounded-sm border border-green-700"
  >
    <div>
      <b>Side</b><br />
      <img :src="getSideImage(strategy.side)" class="side-icon-header" />
    </div>
    <div>
      <b>Buy type</b><br />
      {{ strategy.buyType }}
    </div>
  </div>
  <div
    v-if="strategy.description"
    class="bg-green-800 m-2 p-2 border border-green-700 rounded-xl"
  >
    {{ strategy.description }}
  </div>
</template>

<script setup lang="ts">
import { Strategy } from "./types";
import { getSideImage } from "../composables/get-side-image";

interface Props {
  strategy: Strategy;
}
defineProps<Props>();
</script>
