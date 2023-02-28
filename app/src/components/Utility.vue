<script setup lang="ts">
import { ref } from "vue";
import { UtilityLineup } from "./composables/types";
import Image from "./Image.vue";

defineProps<{ utilityLineup: UtilityLineup }>();

const getImage = (part: string, folder: string) => {
  return folder + "/" + part + ".png";
};

defineExpose({
  getImage,
});
</script>

<template>
  <button>{{ utilityLineup.name }} ({{ utilityLineup.side }})</button>
  <div>
    <div class="info-area">
      <div class="info info-type">
        Throw type:
        {{ utilityLineup.throwType }}
        Ticks type:
        {{ utilityLineup.ticks }}
      </div>
      <div class="info info-description" v-if="utilityLineup.description">
        {{ utilityLineup.description }}
      </div>
      <div>
        <Image
          :src="getImage('result', utilityLineup.folder)"
          :caption="'Result'"
        />
      </div>
    </div>
    <div class="aim-pos-images">
      <div>
        <Image :src="getImage('aim', utilityLineup.folder)" :caption="'Aim'" />
      </div>
      <div>
        <Image
          :src="getImage('pos', utilityLineup.folder)"
          :caption="'Position'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.aim-pos-images {
  display: grid;
  grid-template-columns: 640px 640px;
}
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
</style>
