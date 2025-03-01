<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

interface Props {
  mapName: string;
}

const radarCanvas = ref<HTMLCanvasElement>();

const props = defineProps<Props>();
const radarImage = computed(() => {
  return "url(" + (props.mapName as string).toLowerCase() + "/radar.webp" + ")";
});

defineExpose({
  radarCanvas,
});

const emit = defineEmits(["canvas-mounted", "radarClick", "radarMouseMove"]);

onMounted(() => {
  emit("canvas-mounted", radarCanvas.value);
});

const getPosition = (event: MouseEvent) => {
  var rect = radarCanvas.value!.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  return { x, y };
};

const isDev = import.meta.env.DEV;

const clickRadar = (event: MouseEvent) => {
  const { x, y } = getPosition(event);
  if (isDev) {
    copyToClipboard(x, y);
  }

  emit("radarClick", x, y);
};

const copyToClipboard = (x: number, y: number) => {
  const text = `x: ${x},
        y: ${y},`;
  console.log("copied to clipboard", text);
  navigator.clipboard.writeText(text);
};

const radarMouseMove = (event: MouseEvent) => {
  const { x, y } = getPosition(event);

  emit("radarMouseMove", x, y);
};
</script>

<template>
  <canvas
    ref="radarCanvas"
    width="1024"
    height="1024"
    :style="{ 'background-image': radarImage }"
    @click="clickRadar"
    @mousemove="radarMouseMove"
  />
</template>

<style>
canvas {
  width: 1024px;
  height: 1024px;
  background-repeat: no-repeat;
}
</style>
