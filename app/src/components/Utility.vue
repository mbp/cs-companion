<script setup lang="ts">
import { computed } from "vue";
import { UtilityLineup } from "./composables/types";
import Image from "./Image.vue";

const props = defineProps<{ utilityLineup: UtilityLineup; mapName: String }>();

const getImage = (part: string) => {
  return `${props.mapName.toLocaleLowerCase()}/${props.utilityLineup.side}/${
    props.utilityLineup.nadeType
  }/${props.utilityLineup.id}/${part}.png`;
};

const getSideImage = computed(() => {
  return props.utilityLineup.side === "ct" ? "ct-icon.webp" : "t-icon.webp";
});

defineExpose({
  getImage,
});
</script>

<template>
  <h3>
    {{ utilityLineup.name }}
    <img :src="getSideImage" class="side-icon-header" />
  </h3>
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
        <Image :src="getImage('result')" :caption="'Result'" />
      </div>
    </div>
    <div class="aim-pos-images">
      <div>
        <Image :src="getImage('aim')" :caption="'Aim'" />
      </div>
      <div>
        <Image :src="getImage('pos')" :caption="'Position'" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.aim-pos-images {
  display: grid;
  grid-template-columns: 50% 50%;
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
.side-icon-header {
  width: 50px;
}
</style>
