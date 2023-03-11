<template>
  <img :src="getSideImage" class="side-icon-header" />
  <div class="info-area">
    <div class="info info-type">
      Throw type:
      {{ utility.throwType }}
      Ticks type:
      {{ utility.ticks }}
    </div>
    <div class="info info-description" v-if="utility.description">
      {{ utility.description }}
    </div>
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
div.info {
  padding: 2px;
  width: 50%;
  margin: auto;
}

div.info-type {
  background-color: lightgreen;
  border: 1px solid black;
  color: black;
}

div.info-description {
  background-color: orange;
  border: 1px solid black;
  color: black;
}

.side-icon-header {
  width: 50px;
}
</style>
