<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import Navigation from "../Navigation.vue";
import Image from "./Image.vue";
import UtilityInfo from "./UtilityInfo.vue";
import { getMapScheme } from "../composables/get-map-scheme";

const route = useRoute();

const id = route.params.id as string;
const nadeType = route.params.nadeType as string;
const mapName = route.params.mapName as string;

const utility = computed(() => {
  return getMapScheme(mapName).lineUps.find(
    (x) => x.id == id && x.nadeType == nadeType,
  )!;
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
    <div class="flex flex-col items-center">
      <div class="mb-4 h-72">
        <Image
          :src="getImage('result')"
          :caption="'Result'"
          :initial-size="75"
        />
      </div>
      <div class="grid grid-cols-2 gap-4 w-full">
        <div class="flex justify-center">
          <Image :src="getImage('aim')" :caption="'Aim'" :initial-size="100" />
        </div>
        <div class="flex justify-center">
          <Image
            :src="getImage('pos')"
            :caption="'Position'"
            :initial-size="100"
          />
        </div>
      </div>
    </div>
  </div>
</template>
