<template>
  <div
    class="grid grid-cols-4 grid-rows-1 gap-0 bg-green-900 justify-items-center rounded-2x1 border border-green-700"
  >
    <div>
      <b>Side</b><br />
      <img :src="getSideImage(utility.side)" class="side-icon-header" />
    </div>
    <div>
      <b>Technique</b><br />
      {{ utility.clickType ?? "left" }} click + {{ utility.throwType }} throw
    </div>
    <div>
      <b>Movement</b><br />
      {{ utility.position ?? "stand" }}
      <span v-if="utility.movement">+ {{ utility.movement }}</span>
    </div>
    <div>
      <b>setpos</b><br />
      <button
        class="mt-2 bg-teal-800 text-white py-1 px-3 rounded-sm cursor-pointer hover:bg-teal-600 hover:shadow-lg"
        @click="copySetPos(utility.setPos)"
      >
        <Icon icon="ri:file-copy-line" />
      </button>
    </div>
  </div>
  <div
    v-if="utility.description"
    class="bg-green-800 m-2 p-2 border border-green-700 rounded-xl"
  >
    {{ utility.description }}
  </div>
</template>

<script setup lang="ts">
import { getSideImage } from "../composables/get-side-image";
import { UtilityLineup } from "./types";
import { Icon } from "@iconify/vue";

interface Props {
  utility: UtilityLineup;
}
defineProps<Props>();

const copySetPos = async (setPosStr: string) => {
  await navigator.clipboard.writeText(setPosStr);
};
</script>
