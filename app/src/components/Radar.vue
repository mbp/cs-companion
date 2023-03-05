<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { MapLineups, UtilityLineup } from "../components/composables/types";

interface Props {
  utilites: MapLineups;
  mapName: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "selectedUtility", utility: UtilityLineup): void;
}>();

const pointSize = 8;

const smokes = computed(() => {
  return props.utilites.smokes.filter((x) => x.coordinates);
});

const nades = computed(() => {
  return props.utilites.fragGrenades.filter((x) => x.coordinates);
});

const molos = computed(() => {
  return props.utilites.molotovs.filter((x) => x.coordinates);
});

const flashBangs = computed(() => {
  return props.utilites.flashBangs.filter((x) => x.coordinates);
});

onMounted(() => {
  drawAll();
});

const drawAll = () => {
  for (const smoke of smokes.value) {
    drawSmokeCoordinates(smoke.coordinates!.x, smoke.coordinates!.y, smoke);
  }
  for (const nade of nades.value) {
    drawNadeCoordinates(nade.coordinates!.x, nade.coordinates!.y, nade);
  }
  for (const molo of molos.value) {
    drawMoloCoordinates(molo.coordinates!.x, molo.coordinates!.y, molo);
  }
  for (const flashBang of flashBangs.value) {
    drawFlashCoordinates(
      flashBang.coordinates!.x,
      flashBang.coordinates!.y,
      flashBang
    );
  }
};

const radarImage = computed(() => {
  return "url(" + (props.mapName as string).toLowerCase() + "/radar.webp" + ")";
});

let radarCanvas = ref<HTMLCanvasElement>();

const clickRadar = (event: MouseEvent) => {
  const { x, y } = getPosition(event);

  console.log("x,y", x, y);
  const rectangle = findMatchingRectangle(x, y);
  if (rectangle) {
    emit("selectedUtility", rectangle.utility);
  }
};

const mouseMoveRadar = (event: MouseEvent) => {
  const { x, y } = getPosition(event);
  document.body.style.cursor = "auto";

  const ctx = radarCanvas.value!.getContext("2d")!;
  ctx.clearRect(0, 0, 1024, 1024);
  drawAll();

  const rectangle = findMatchingRectangle(x, y);
  rectangle?.tooltip.render();
};

const getPosition = (event: MouseEvent) => {
  var rect = radarCanvas.value!.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  return { x, y };
};

const contains = (rect: Rectangle, x: number, y: number) => {
  return (
    x >= rect.x - rect.width &&
    x <= rect.x + rect.width &&
    y >= rect.y - rect.height &&
    y <= rect.y + rect.height
  );
};

type Rectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
  tooltip: Tooltip;
  utility: UtilityLineup;
};

type Tooltip = {
  render: () => void;
};

const findMatchingRectangle = (x: number, y: number) => {
  return rectangles.find((rectangle) => contains(rectangle, x, y));
};

const drawSmokeCoordinates = (x: number, y: number, utility: UtilityLineup) => {
  const color = "grey";
  const strokeColor = "white";
  const rectangle = createRectangle(x, y, utility);
  rectangles.push(rectangle);
  drawCoordinates(rectangle, color, strokeColor);
};

const drawMoloCoordinates = (x: number, y: number, utility: UtilityLineup) => {
  const color = "orange";
  const strokeColor = "black";
  const rectangle = createRectangle(x, y, utility);
  rectangles.push(rectangle);
  drawCoordinates(rectangle, color, strokeColor);
};

const drawNadeCoordinates = (x: number, y: number, utility: UtilityLineup) => {
  const color = "black";
  const strokeColor = "white";
  const rectangle = createRectangle(x, y, utility);
  rectangles.push(rectangle);
  drawCoordinates(rectangle, color, strokeColor);
};

const drawFlashCoordinates = (x: number, y: number, utility: UtilityLineup) => {
  const color = "white";
  const strokeColor = "black";
  const rectangle = createRectangle(x, y, utility);
  rectangles.push(rectangle);
  drawCoordinates(rectangle, color, strokeColor);
};

const createRectangle = (x: number, y: number, utility: UtilityLineup) => {
  const rectangle: Rectangle = {
    x: x,
    y: y,
    width: pointSize,
    height: pointSize,
    tooltip: {
      render: () => {
        document.body.style.cursor = "pointer";
        const ctx = radarCanvas.value!.getContext("2d")!;
        ctx.strokeStyle = "blue";
        ctx.fillStyle = "white";
        ctx.font = "15px Arial";
        ctx.beginPath();
        ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
        ctx.fillText(utility.name, x, y);
        ctx.fill();
        ctx.stroke();
      },
    },
    utility: utility,
  };
  return rectangle;
};

const rectangles: Rectangle[] = [];

const drawCoordinates = (
  rectangle: Rectangle,
  color: string,
  strokeColor: string
) => {
  const ctx = radarCanvas.value!.getContext("2d")!;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(rectangle.x, rectangle.y, pointSize, 0, Math.PI * 2, true);
  ctx.strokeStyle = strokeColor;
  ctx.stroke();
  ctx.fill();
};
</script>

<template>
  <canvas
    ref="radarCanvas"
    @click="clickRadar"
    @mousemove="mouseMoveRadar"
    width="1024"
    height="1024"
    :style="{ 'background-image': radarImage }"
  ></canvas>
</template>

<style>
canvas {
  width: 1024px;
  height: 1024px;
}
</style>
