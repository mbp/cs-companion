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

const getVideo = () => {
  return `${mapName.toLocaleLowerCase()}/${utility.value.side}/${
    utility.value.nadeType
  }/${utility.value.id}/video.mp4`;
};

const hasVideo = computed(() => {
  return utility.value.hasVideo;
});

defineExpose({
  getImage,
  getVideo,
});
</script>

<template>
  <Navigation
    :current="utility.name"
    :parents="[
      { routeName: 'Home', title: 'Home' },
      { routeName: 'MapUtility', title: mapName, params: { mapName: mapName } },
    ]"
  />
  <div>
    <UtilityInfo :utility="utility" />
    <div class="grid grid-cols-2 gap-4 w-full py-4">
      <div class="flex justify-center">
        <Image
          :src="getImage('result')"
          :caption="'Result'"
          :initial-size="100"
        />
      </div>
      <div class="flex justify-center">
        <Image
          :src="getImage('pos')"
          :caption="'Position'"
          :initial-size="100"
        />
      </div>
      <div class="flex justify-center col-span-2">
        <Image :src="getImage('aim')" :caption="'Aim'" :initial-size="100" />
      </div>
      <div v-if="hasVideo" class="flex justify-center col-span-2">
        <video width="640" height="360" controls playsinline muted preload="auto">
          <source :src="getVideo()" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>
