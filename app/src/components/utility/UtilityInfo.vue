<template>
  <div
    class="grid grid-cols-4 grid-rows-1 gap-0 bg-green-900 justify-items-center rounded-2x1 border border-green-700"
  >
    <div>
      <b>Side</b><br />
      <img :src="getSideImage(utility.side)" class="side-icon-header" />
    </div>
    <div>
      <b>Throw type</b><br />
      {{ utility.throwType }} {{ utility.clickType }}
    </div>
    <div>
      <b>Click type</b><br />
      {{ utility.clickType ?? "left" }}
    </div>
    <div>
      <b>Movement</b><br />
      {{ utility.movement ?? "stand" }}
    </div>
  </div>
  <div
    v-if="utility.description"
    class="bg-green-800 m-2 p-2 border border-green-700 rounded-xl"
  >
    {{ utility.description }}
  </div>
  <div v-if="utility.setPos">
      <button
        class="mt-2 bg-blue-500 text-white py-1 px-3 rounded-sm cursor-pointer"
        @click="copySetPos(utility.setPos)"
      >
        Copy setpos/setang
      </button>
  </div>
</template>

<script setup lang="ts">
import { getSideImage } from "../composables/get-side-image";
import { UtilityLineup } from "./types";

interface Props {
  utility: UtilityLineup;
}
defineProps<Props>();

const copySetPos = async (setPosStr: string) => {
  await navigator.clipboard.writeText(setPosStr);
};
</script>
