<template>
  <div class="parent info-type">
    <div class="div1 header-cell">Side</div>
    <div class="div2">
      <img :src="getSideImage(utility.side)" class="side-icon-header" />
    </div>
    <div class="div3 info-cell header-cell">Throw type</div>
    <div class="div4 info-cell">
      {{ utility.throwType }} {{ utility.clickType }}
    </div>
    <div class="div5 info-cell header-cell">Click type</div>
    <div class="div6 info-cell">
      {{ utility.clickType ?? "left" }}
    </div>
    <div class="div7 info-cell header-cell">Movement</div>
    <div class="div8 info-cell">
      {{ utility.movement ?? "stand" }}
    </div>
  </div>
  <div class="info-description">
    {{ utility.description }}
  </div>
</template>

<script setup lang="ts">
import { getSideImage } from "../composables/get-side-image";
import { UtilityLineup } from "./types";

interface Props {
  utility: UtilityLineup;
}
defineProps<Props>();
</script>
<style scoped>
.parent {
  border-radius: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
}
.div2 {
  grid-area: 2 / 1 / 3 / 2;
}
.div3 {
  grid-area: 1 / 2 / 2 / 3;
}
.div4 {
  grid-area: 2 / 2 / 3 / 3;
}
.div5 {
  grid-area: 1 / 3 / 2 / 4;
}
.div6 {
  grid-area: 2 / 3 / 3 / 4;
}
.div7 {
  grid-area: 1 / 4 / 2 / 5;
}
.div8 {
  grid-area: 2 / 4 / 3 / 5;
}
</style>
