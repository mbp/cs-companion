<script setup lang="ts">
import { ref } from "vue";
import { UtilityLineup } from "./composables/types";
import Image from "./Image.vue";

defineProps<{ utilityLineup: UtilityLineup }>();
const open = () => {
  visible.value = !visible.value;
};
const visible = ref(false);
</script>

<template>
  <button @click="open">
    {{ utilityLineup.name }} ({{ utilityLineup.side }})<span v-if="visible"
      >⮟</span
    ><span v-if="!visible">⮝</span>
  </button>
  <div v-if="visible">
    <div class="info-image">
      <div class="info">
        Throw type:
        {{ utilityLineup.throwType }}
        Ticks type:
        {{ utilityLineup.ticks }}
      </div>
      <div>
        <Image
          :src="utilityLineup.resultImage ?? 'missing.png'"
          :caption="'Result'"
        />
      </div>
    </div>
    <div class="aim-pos-images">
      <div>
        <Image
          :src="utilityLineup.aimImage ?? 'missing.png'"
          :caption="'Aim'"
        />
      </div>
      <div>
        <Image
          :src="utilityLineup.posImage ?? 'missing.png'"
          :caption="'Pos'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.aim-pos-images {
  display: grid;
  grid-template-columns: 640px 640px;
}
div.info {
  background-color: grey;
  padding: 2px;
  border: 1px solid black;
  color: white;
}
</style>
