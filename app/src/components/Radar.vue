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

onMounted(() => {
  for (const smoke of smokes.value) {
    drawSmokeCoordinates(smoke.coordinates!.x, smoke.coordinates!.y, smoke);
  }
});

const radarImage = computed(() => {
  return "url(" + (props.mapName as string).toLowerCase() + "/radar.jpg" + ")";
});

let radarCanvas = ref<HTMLCanvasElement>();

const clickRadar = (event: MouseEvent) => {
  const { x, y } = getPosition(event);

  console.log("x,y", x, y);
  const rectangle = findMatchingRectangle(x, y);
  if (rectangle) {
    emit("selectedUtility", rectangle.utility);
  }
  console.log("found", rectangle);
};

const mouseMoveRadar = (event: MouseEvent) => {
  const { x, y } = getPosition(event);
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
    x >= rect.x &&
    x <= rect.x + rect.width &&
    y >= rect.y &&
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
  for (const rectangle of rectangles) {
    if (contains(rectangle, x, y)) {
      {
        return rectangle;
      }
    }
  }
};

const drawSmokeCoordinates = (x: number, y: number, utility: UtilityLineup) => {
  const color = "grey";
  const strokeColor = "white";
  const rectangle: Rectangle = {
    x: x,
    y: y,
    width: pointSize,
    height: pointSize,
    tooltip: {
      render: () => {
        const ctx = radarCanvas.value!.getContext("2d")!;
        ctx.strokeStyle = "blue";
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.rect(x, y, pointSize, pointSize);
        ctx.fill();
        ctx.stroke();
      },
    },
    utility: utility,
  };
  rectangles.push(rectangle);
  drawCoordinates(rectangle, color, strokeColor);
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
    width="900"
    height="900"
    :style="{ background: radarImage }"
  ></canvas>
</template>
