<template>
  <div
    class="grid grid-cols-4 grid-rows-1 gap-0 bg-green-900 justify-items-center rounded-2x1 border border-green-700"
  >
    <div>
      Side<br />
      <img :src="getSideImage(utility.side)" class="side-icon-header" />
    </div>
    <div>
      Throw type<br />
      {{ utility.throwType }} {{ utility.clickType }}
    </div>
    <div>
      Click type<br />
      {{ utility.clickType ?? "left" }}
    </div>
    <div>
      Movement<br />
      {{ utility.movement ?? "stand" }}
    </div>
  </div>
  <div class="info-description">
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
</script>
