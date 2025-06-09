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
        <Icon
          v-if="toggled"
          icon="ri:toggle-fill"
          width="24"
          height="24"
          style="color: deepskyblue"
        />
        <Icon
          v-if="!toggled"
          icon="ri:toggle-line"
          width="24"
          height="24"
          style="color: gray"
        />
      </div>
      <div class="mr-3 text-white-700 font-medium pl-2 flex items-center">
        <img v-if="img" :src="img" class="w-6 h-6 space-x-2" />
        <svg
          v-if="svg"
          width="8"
          height="8"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 space-x-2"
        >
          <path
            v-for="path in svg.paths"
            :d="path.content"
            :fill="path.fill"
            :stroke="path.stroke"
          />
        </svg>
        <span class="pl-2">
          {{ label }}
        </span>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { Svg } from "../inline-assets/utility";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  label: string;
  img?: string;
  svg?: Svg;
  initial: boolean;
}>();

const toggled = ref(props.initial);
const uniqueId = computed(() => `toggle-${props.label.replace(/\s+/g, "-")}`);

const emit = defineEmits<{
  (e: "checked", value: boolean): void;
}>();

const toggle = () => {
  toggled.value = !toggled.value;
  emit("checked", toggled.value);
};

watch(
  () => props.initial,
  (newVal) => {
    toggled.value = newVal;
  },
);
</script>
