<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { allMapSchemes } from "../data";
import Navigation from "./Navigation.vue";
import Image from "./Image.vue";
import UtilityInfo from "./UtilityInfo.vue";

const route = useRoute();

const id = route.params.id as string;
const nadeType = route.params.nadeType as string;
const mapName = route.params.mapName as string;

const utility = computed(() => {
  return allMapSchemes
    .find((x) => x.map == mapName)
    ?.lineUps.find((x) => x.id == id && x.nadeType == nadeType)!;
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
      <Image
        :src="getImage('result')"
        :caption="'Result'"
        :initial-zoom="false"
      />
    </div>
    <div class="aim-pos-images">
      <div>
        <Image :src="getImage('aim')" :caption="'Aim'" :initial-zoom="true" />
      </div>
      <div>
        <Image
          :src="getImage('pos')"
          :caption="'Position'"
          :initial-zoom="true"
        />
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
