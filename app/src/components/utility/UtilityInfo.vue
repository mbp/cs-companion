<template>
  <div
    class="grid grid-cols-5 grid-rows-1 gap-0 bg-green-900 justify-items-center rounded-2x1 border border-green-700"
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
    <div>
      <b>setpos</b><br />
      <button
        v-if="utility.setPos"
        class="mt-2 bg-teal-800 text-white py-1 px-3 rounded-sm cursor-pointer hover:bg-teal-600 hover:shadow-lg"
        @click="copySetPos(utility.setPos)"
      >
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
        >
          <path
            d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"
          ></path>
          <path
            d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"
          ></path>
        </svg>
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

interface Props {
  utility: UtilityLineup;
}
defineProps<Props>();

const copySetPos = async (setPosStr: string) => {
  await navigator.clipboard.writeText(setPosStr);
};
</script>
