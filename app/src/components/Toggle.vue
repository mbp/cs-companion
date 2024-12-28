<template>
  <div class="py-1">
    <label :for="uniqueId" class="flex items-center cursor-pointer">
      <div class="relative">
        <input
          :id="uniqueId"
          type="checkbox"
          class="sr-only"
          :checked="toggled"
          @click="toggle"
        />
        <div class="block bg-gray-600 w-8 h-4 rounded-full"></div>
        <div
          class="dot absolute left-1 top-1 bg-white w-2 h-2 rounded-full transition"
        ></div>
      </div>
      <div class="mr-3 text-white-700 font-medium pl-2">
        {{ label }}
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  label: string;
  initial: boolean;
}>();

const toggled = ref(props.initial);
const uniqueId = computed(() => `toggle-${props.label.replace(/\s+/g, "-")}`);

const emit = defineEmits<{
  (e: "checked", value: boolean): void;
}>();

const toggle = () => {
  console.log("toggled", props.label);
  toggled.value = !toggled.value;
  emit("checked", toggled.value);
};
</script>

<style scoped>
input:checked + .block {
  background-color: #14532d;
}

input:checked + .block .dot {
  transform: translateX(6rem);
}
</style>
