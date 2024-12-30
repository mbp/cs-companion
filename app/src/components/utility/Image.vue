<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  src: string;
  caption: string;
  initialSize: number;
}>();
const sizePercentage = ref(props.initialSize);
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div>
    <div class="click-zoom" @click="openModal">
      <label>
        <figure class="relative">
          <img
            :src="src"
            :style="{
              width: sizePercentage + '%',
              'max-width': (sizePercentage / 100) * 640 + 'px',
            }"
            class="transition-transform duration-250 ease-in-out cursor-zoom-in"
          />
          <figcaption
            class="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2 text-m"
          >
            {{ caption }}
          </figcaption>
        </figure>
      </label>
    </div>

    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      @click="closeModal"
    >
      <div class="relative bg-white rounded-lg shadow-lg" @click.stop>
        <img
          :src="src"
          @click="closeModal"
          class="max-w-full max-h-screen rounded-lg cursor-zoom-out"
          style="width: 85vw"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.click-zoom img {
  cursor: zoom-in;
}
</style>
