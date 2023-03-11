<template>
  <div class="parent info-type">
    <div class="div1 header-cell">Throw type</div>
    <div class="div2">
      {{ utility.throwType }}
    </div>
    <div class="div3 info-cell header-cell">Ticks</div>
    <div class="div4 info-cell">
      {{ utility.ticks }}
    </div>
    <div class="div5 info-cell header-cell">Side</div>
    <div class="div6 info-cell">
      <img :src="getSideImage" class="side-icon-header" />
    </div>
  </div>
  <div class="info-description">
    {{ utility.description }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { UtilityLineup } from "./composables/types";

interface Props {
  utility: UtilityLineup;
}
const props = defineProps<Props>();

const getSideImage = computed(() => {
  return props.utility.side === "ct" ? "ct-icon.webp" : "t-icon.webp";
});
</script>
<style scoped>
.parent {
  border-radius: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.info-cell {
  border-left: 1px solid grey;
}

.header-cell {
  font-weight: bold;
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

div.info {
  padding: 2px;
  width: 50%;
  margin: auto;
}

div.info-type {
  background-color: #646cff;
  color: white;
}

div.info-description {
  background-color: #2196f3;
  border-radius: 15px;
  width: 95%;
  margin: 0 auto;
}

.side-icon-header {
  width: 25px;
}
</style>
