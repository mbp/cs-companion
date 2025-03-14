<template>
  <div
    class="flex flex-row bg-green-900 rounded-sm border border-green-700 p-4"
  >
    <div class="w-1/4 pr-4">
      <div class="mb-4">
        <b>Side</b><br />
        <img :src="getSideImage(strategy.side)" class="side-icon-header" />
      </div>
      <div class="mb-4">
        <b>Buy type</b><br />
        {{ strategy.buyType }}
      </div>
    </div>
    <div class="w-3/4 bg-green-800 p-4 border border-green-700 rounded-xl">
      <h2 class="text-xl font-bold mb-4">Steps</h2>
      <ol class="list-decimal ps-4">
        <li v-for="step in strategy.steps" :key="step">
          {{ step }}
        </li>
      </ol>
      <div v-if="strategy.tips">
        <h2 class="text-xl font-bold mb-4 pt-4">Tips</h2>
        <ol class="list-decimal ps-4">
          <li v-for="tip in strategy.tips" :key="tip">
            {{ tip }}
          </li>
        </ol>
      </div>
    </div>
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
