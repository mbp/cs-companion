<template>
  <div
    class="grid grid-cols-4 grid-rows-1 gap-0 bg-green-900 justify-items-center rounded border border-green-700"
  >
    <div>
      Side<br />
      <img :src="getSideImage(strategy.side)" class="side-icon-header" />
    </div>
    <div>
      Buy type<br />
      {{ strategy.buyType }}
    </div>
  </div>
  <div class="info-description">
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
