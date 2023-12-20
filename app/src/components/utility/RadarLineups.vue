<script setup lang="ts">
import { onMounted, watch } from "vue";
import { UtilityLineup } from "./types";
import Radar from "../Radar.vue";
import { DrawingEngine, useDrawing } from "../composables/use-drawing";

interface Props {
  lineUps: UtilityLineup[];
  mapName: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "selectedUtility", utility: UtilityLineup): void;
}>();

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
  const rectangle = drawing.findMatchingRectangle(x, y);
  if (rectangle) {
    emit("selectedUtility", rectangle.utility);
  }
};

const mouseMoveRadar = (x: number, y: number) => {
  document.body.style.cursor = "auto";

  redrawAll();

  const rectangle = drawing.findMatchingRectangle(x, y);
  rectangle?.drawTravel();
  rectangle?.drawTooltip();
};

watch(
  () => props.lineUps,
  () => {
    redrawAll();
  },
);

const drawNadeCoordinates = (x: number, y: number, utility: UtilityLineup) => {
  drawing.drawUtilityRectangle(x, y, utility);
};

let canvasRenderingContext: CanvasRenderingContext2D;
let drawing: DrawingEngine;

const canvasMounted = (context: HTMLCanvasElement) => {
  canvasRenderingContext = context.getContext("2d")!;
  drawing = useDrawing(canvasRenderingContext);
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
