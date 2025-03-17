<script setup lang="ts">
import { allMapSchemes } from "../data";

const countUtility = allMapSchemes
  .map((x) => x.lineUps.length)
  .reduce((a, b) => a + b, 0);
const countStrats = allMapSchemes
  .map((x) => x.strats.length)
  .reduce((a, b) => a + b, 0);
</script>

<template>
  <h2 class="text-2xl font-bold mb-4 text-center text-white-800">Welcome!</h2>
  <h3 class="text-xl mb-4 text-center text-white-800">
    On this website, you can find
    <span class="key-number">{{ countUtility }}</span> different utility lineups
    and <span class="key-number">{{ countStrats }}</span> different strategies
    for Counter-Strike 2.
  </h3>
  <h3 class="text-xl mb-4 text-center text-white-800">
    The suggested way to use this website is to open it in the Steam overlay
    browser while playing the game.
  </h3>
  <h3 class="text-xl mb-4 text-center text-white-800">Have fun and gg!</h3>
</template>

<style scoped>
.key-number {
  font-weight: bold;
}
</style>
