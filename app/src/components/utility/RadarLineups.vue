<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { NadeType, UtilityLineup } from "./types";
import Radar from "../Radar.vue";

interface Props {
  lineUps: UtilityLineup[];
  mapName: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "selectedUtility", utility: UtilityLineup): void;
}>();

const pointSize = 8;

type SmokeColors = {
  [key in NadeType]: string;
};

const nadeColors: SmokeColors = {
  smoke: "grey",
  flashbang: "white",
  molo: "orange",
  frag: "green",
};

const nadeStrokeColors: SmokeColors = {
  smoke: "orange",
  flashbang: "black",
  molo: "black",
  frag: "white",
};

onMounted(() => {
  drawAll();
});

const redrawAll = () => {
  clearAll();
  drawAll();
};

const clearAll = () => {
  const ctx = radarCanvas.value!.getContext("2d")!;
  ctx.clearRect(0, 0, 1024, 1024);
};

const drawAll = () => {
  for (const lineUp of props.lineUps) {
    drawNadeCoordinates(lineUp.coordinates.x, lineUp.coordinates.y, lineUp);
  }
};

let radarCanvas = ref<HTMLCanvasElement>();

const clickRadar = (x: number, y: number) => {
  const rectangle = findMatchingRectangle(x, y);
  if (rectangle) {
    emit("selectedUtility", rectangle.utility);
  }
};

const mouseMoveRadar = (x: number, y: number) => {
  document.body.style.cursor = "auto";

  redrawAll();

  const rectangle = findMatchingRectangle(x, y);
  rectangle?.tooltip.render();
};

const contains = (rect: Rectangle, x: number, y: number) => {
  return (
    x >= rect.x - rect.width &&
    x <= rect.x + rect.width &&
    y >= rect.y - rect.height &&
    y <= rect.y + rect.height
  );
};

watch(
  () => props.lineUps,
  () => {
    redrawAll();
  },
);

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

const drawNadeCoordinates = (x: number, y: number, utility: UtilityLineup) => {
  const color = nadeColors[utility.nadeType];
  const strokeColor = nadeStrokeColors[utility.nadeType];
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
        ctx.strokeStyle = "black";
        ctx.fillStyle = "white";
        ctx.font = "15px Arial";
        ctx.beginPath();
        ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.fillText(utility.name, x, y);

        if (utility.positionCoordinates) {
          ctx.beginPath();
          ctx.strokeStyle = nadeColors[utility.nadeType];
          ctx.setLineDash([5, 15]);
          ctx.moveTo(utility.coordinates.x, utility.coordinates.y);
          ctx.lineTo(
            utility.positionCoordinates.x,
            utility.positionCoordinates.y,
          );
          ctx.stroke();
          ctx.closePath();
        }
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
  strokeColor: string,
) => {
  const ctx = radarCanvas.value!.getContext("2d")!;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.arc(rectangle.x, rectangle.y, pointSize, 0, Math.PI * 2, true);
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
};

const canvasMounted = (context: HTMLCanvasElement) => {
  radarCanvas.value = context;
};
</script>

<template>
  <Radar
    @radar-click="clickRadar"
    @radar-mouse-move="mouseMoveRadar"
    @canvas-mounted="canvasMounted"
    :canvas="radarCanvas"
    ref="radar"
    :mapName="mapName"
  />
</template>
