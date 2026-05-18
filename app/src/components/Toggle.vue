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
      <div class="mr-3 font-medium pl-2 flex items-center">
        <div
          v-if="img || svg"
          class="toggle-asset"
          :style="assetToneVars"
          :class="{
            'is-on': toggled,
            'is-side': !!img,
            'is-utility': !!svg,
            [`tone-${toneKey}`]: true,
          }"
        >
          <img v-if="img" :src="img" class="toggle-asset-image" />
          <svg
            v-if="svg"
            width="8"
            height="8"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            class="toggle-asset-svg"
          >
            <defs>
              <linearGradient :id="gradientId" x1="10" y1="8" x2="56" y2="56">
                <stop offset="0" :stop-color="toneColors.gradientStart" />
                <stop offset="1" :stop-color="toneColors.gradientEnd" />
              </linearGradient>
              <radialGradient
                :id="highlightId"
                cx="18"
                cy="16"
                r="26"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="rgba(255, 255, 255, 0.55)" />
                <stop offset="1" stop-color="rgba(255, 255, 255, 0)" />
              </radialGradient>
            </defs>
            <path
              v-for="path in svg.paths"
              :d="path.content"
              :fill="path.fill"
              :stroke="path.stroke"
            />
            <path
              v-for="path in svg.paths"
              :d="path.content"
              :fill="`url(#${gradientId})`"
              :opacity="toggled ? 0.68 : 0.52"
            />
            <path
              v-for="path in svg.paths"
              :d="path.content"
              :fill="`url(#${highlightId})`"
            />
          </svg>
        </div>
        <span class="pl-2" :class="toggled ? 'text-sky-100' : 'text-gray-300'">
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
  tone?: "smoke" | "molo" | "flashbang" | "frag" | "t" | "ct";
  initial: boolean;
}>();

const toggled = ref(props.initial);
const uniqueId = computed(() => `toggle-${props.label.replace(/\s+/g, "-")}`);
const gradientId = computed(() => `${uniqueId.value}-gradient`);
const highlightId = computed(() => `${uniqueId.value}-highlight`);

const toneKey = computed(() => props.tone ?? "smoke");

const toneColors = computed(() => {
  switch (toneKey.value) {
    case "smoke":
      return {
        glow: "rgba(116, 217, 255, 0.75)",
        gradientStart: "rgba(102, 194, 241, 0.70)",
        gradientEnd: "rgba(212, 248, 255, 0.95)",
        ring: "rgba(175, 241, 255, 0.85)",
      };
    case "flashbang":
      return {
        glow: "rgba(255, 249, 191, 0.80)",
        gradientStart: "rgba(255, 232, 124, 0.72)",
        gradientEnd: "rgba(255, 255, 245, 0.98)",
        ring: "rgba(255, 255, 220, 0.92)",
      };
    case "frag":
      return {
        glow: "rgba(255, 132, 90, 0.75)",
        gradientStart: "rgba(220, 86, 55, 0.68)",
        gradientEnd: "rgba(255, 184, 113, 0.95)",
        ring: "rgba(255, 194, 129, 0.88)",
      };
    case "molo":
      return {
        glow: "rgba(255, 156, 82, 0.80)",
        gradientStart: "rgba(209, 86, 32, 0.70)",
        gradientEnd: "rgba(255, 204, 120, 0.98)",
        ring: "rgba(255, 211, 145, 0.90)",
      };
    case "ct":
      return {
        glow: "rgba(125, 211, 252, 0.80)",
        gradientStart: "rgba(56, 189, 248, 0.65)",
        gradientEnd: "rgba(186, 230, 253, 0.92)",
        ring: "rgba(147, 197, 253, 0.90)",
      };
    case "t":
      return {
        glow: "rgba(250, 204, 21, 0.78)",
        gradientStart: "rgba(234, 179, 8, 0.62)",
        gradientEnd: "rgba(254, 240, 138, 0.92)",
        ring: "rgba(253, 224, 71, 0.90)",
      };
    default:
      return {
        glow: "rgba(116, 217, 255, 0.75)",
        gradientStart: "rgba(102, 194, 241, 0.70)",
        gradientEnd: "rgba(212, 248, 255, 0.95)",
        ring: "rgba(175, 241, 255, 0.85)",
      };
  }
});

const assetToneVars = computed(() => {
  return {
    "--tone-glow": toneColors.value.glow,
    "--tone-ring": toneColors.value.ring,
  };
});

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

<style scoped>
.toggle-asset {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.45rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(148, 163, 184, 0.34);
  background: radial-gradient(circle at 30% 24%, #334155, #0f172a 72%);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.08);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease;
}

.toggle-asset.is-on {
  transform: scale(1.05);
  border-color: var(--tone-ring);
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--tone-ring) 38%, transparent),
    0 0 10px color-mix(in srgb, var(--tone-glow) 28%, transparent),
    inset 0 1px 1px rgba(255, 255, 255, 0.12);
}

.toggle-asset.is-side {
  border-radius: 9999px;
  background: radial-gradient(circle at 24% 18%, #334155, #0f172a 76%);
}

.toggle-asset.is-side.is-on {
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--tone-ring) 40%, transparent),
    0 0 12px color-mix(in srgb, var(--tone-glow) 32%, transparent),
    inset 0 1px 1px rgba(255, 255, 255, 0.12);
}

.toggle-asset-image,
.toggle-asset-svg {
  width: 1.15rem;
  height: 1.15rem;
}

.toggle-asset-image {
  filter: drop-shadow(
    0 0 4px color-mix(in srgb, var(--tone-glow) 30%, transparent)
  );
}

.toggle-asset.is-on .toggle-asset-image {
  filter: drop-shadow(
    0 0 6px color-mix(in srgb, var(--tone-glow) 52%, transparent)
  );
}

.toggle-asset.is-utility .toggle-asset-svg {
  filter: drop-shadow(
    0 0 4px color-mix(in srgb, var(--tone-glow) 30%, transparent)
  );
}

.toggle-asset.is-on .toggle-asset-svg {
  filter: drop-shadow(
    0 0 6px color-mix(in srgb, var(--tone-glow) 46%, transparent)
  );
}
</style>
