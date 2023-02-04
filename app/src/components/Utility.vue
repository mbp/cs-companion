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
    <p>
      <span class="info">
        Throw type:
        {{ utilityLineup.throwType }}
      </span>
      <span class="info">
        Ticks type:
        {{ utilityLineup.ticks }}
      </span>
    </p>
    <div>
      <div>
        <Image
          :src="utilityLineup.resultImage ?? 'missing.png'"
          :caption="'Result'"
        />
      </div>
    </div>
    <div class="wrapper">
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
.wrapper {
  display: grid;
  grid-template-columns: 640px 640px;
}
span.info {
  background-color: orange;
  color: black;
  margin-right: 2px;
}
</style>
