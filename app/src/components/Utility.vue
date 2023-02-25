<script setup lang="ts">
import { ref } from "vue";
import { UtilityLineup } from "./composables/types";
import Image from "./Image.vue";

defineProps<{ utilityLineup: UtilityLineup }>();
const open = () => {
  visible.value = !visible.value;
};
const visible = ref(false);

const getImage = (part: string, folder: string) => {
  return folder + "/" + part + ".png";
};

defineExpose({
  getImage,
});
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
          :src="getImage('result', utilityLineup.folder)"
          :caption="'Result'"
        />
      </div>
    </div>
    <div class="aim-pos-images">
      <div>
        <Image :src="getImage('aim', utilityLineup.folder)" :caption="'Aim'" />
      </div>
      <div>
        <Image
          :src="getImage('pos', utilityLineup.folder)"
          :caption="'Position'"
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
