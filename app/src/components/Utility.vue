<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { allUtilities } from "../data";
import Navigation from "./Navigation.vue";
import Image from "./Image.vue";

const route = useRoute();

const id = route.params.id;
const mapName = route.params.mapName as string;

const utility = computed(() => {
  return allUtilities
    .find((x) => x.map == mapName)
    ?.lineUps.find((x) => x.id == id)!;
});

const getImage = (part: string) => {
  return `${mapName.toLocaleLowerCase()}/${utility.value.side}/${
    utility.value.nadeType
  }/${utility.value.id}/${part}.png`;
};

const getSideImage = computed(() => {
  return utility.value.side === "ct" ? "ct-icon.webp" : "t-icon.webp";
});

defineExpose({
  getImage,
});
</script>

<template>
  <Navigation :current="mapName" />
  <h3>
    {{ utility.name }}
    <img :src="getSideImage" class="side-icon-header" />
  </h3>
  <div>
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
