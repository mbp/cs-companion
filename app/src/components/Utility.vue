<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { allUtilities } from "../data";
import Navigation from "./Navigation.vue";
import Image from "./Image.vue";
import UtilityInfo from "./UtilityInfo.vue";

const route = useRoute();

const id = route.params.id as string;
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

defineExpose({
  getImage,
});
</script>

<template>
  <Navigation
    :current="utility.name"
    :parents="[
      { routeName: 'Home', title: 'Home' },
      { routeName: 'Map', title: mapName, params: { mapName: mapName } },
    ]"
  />
  <div>
    <UtilityInfo :utility="utility" />
    <div>
      <Image :src="getImage('result')" :caption="'Result'" />
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
</style>
