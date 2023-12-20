<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { NadeType, UtilityLineup } from "./types";
import Radar from "../Radar.vue";
import { UtilityRectangle } from "../composables/drawing-types";
import { useDrawing } from "../composables/use-drawing";

interface Props {
  lineUps: UtilityLineup[];
  mapName: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "selectedUtility", utility: UtilityLineup): void;
}>();

const pointSize = 8;

onMounted(() => {
  drawAll();
});

const redrawAll = () => {
  clearAll();
  drawAll();
};

const clearAll = () => {
  canvasRenderingContext.clearRect(0, 0, 1024, 1024);
};

const drawAll = () => {
  for (const lineUp of props.lineUps) {
    drawNadeCoordinates(lineUp.coordinates.x, lineUp.coordinates.y, lineUp);
  }
};

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

const contains = (rect: UtilityRectangle, x: number, y: number) => {
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

const findMatchingRectangle = (x: number, y: number) => {
  return utilityRectangles.find((r) => contains(r, x, y));
};

const drawNadeCoordinates = (x: number, y: number, utility: UtilityLineup) => {
  const drawing = useDrawing(canvasRenderingContext);
  const utilityRectangle = drawing.createUtilityRectangle(x, y, utility);
  utilityRectangles.push(utilityRectangle);
  drawing.drawUtilityRectangle(utilityRectangle);
};

const utilityRectangles: UtilityRectangle[] = [];

let canvasRenderingContext: CanvasRenderingContext2D;

const canvasMounted = (context: HTMLCanvasElement) => {
  canvasRenderingContext = context.getContext("2d")!;
};
</script>

<template>
  <Radar
    ref="radar"
    :map-name="mapName"
    @radar-click="clickRadar"
    @radar-mouse-move="mouseMoveRadar"
    @canvas-mounted="canvasMounted"
  />
</template>
