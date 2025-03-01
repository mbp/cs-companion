<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { UtilityLineup } from "./types";
import Radar from "../Radar.vue";
import { DrawingEngine, useDrawing } from "../composables/use-drawing";
import { MapCallout } from "../types/callout";

interface Props {
  lineUps: UtilityLineup[];
  callouts: MapCallout[];
  mapName: string;
}

const startPoint = ref<{ x: number; y: number } | null>(null);
const currentMousePos = ref<{ x: number; y: number } | null>(null);

const props = defineProps<Props>();

const isDev = import.meta.env.DEV;

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
  for (const callout of props.callouts) {
    if (callout.arrow) {
      drawing.drawArrow(
        { x: callout.arrow.from.x, y: callout.arrow.from.y },
        { x: callout.arrow.to.x, y: callout.arrow.to.y },
      );
    }
    drawing.drawText(
      callout.coordinates.x,
      callout.coordinates.y,
      callout.name.toLocaleUpperCase(),
      callout.angle ?? 0,
    );
  }
  if (isDev) {
    if (startPoint.value && currentMousePos.value) {
      drawing.drawArrow(startPoint.value, currentMousePos.value);
    }
  }
};

const clickRadar = (x: number, y: number, event: MouseEvent) => {
  const rectangle = drawing.findMatchingRectangle(x, y);
  if (rectangle) {
    emit("selectedUtility", rectangle.utility);
  }
  if (isDev) {
    if (startPoint.value) {
      copyArrowToClipboard(startPoint.value, { x, y });
      startPoint.value = null;
      currentMousePos.value = null;
    }
    if (event.ctrlKey && !startPoint.value) {
      startPoint.value = { x, y };
    }
  }
};

const mouseMoveRadar = (x: number, y: number) => {
  document.body.style.cursor = "auto";

  redrawAll();

  const rectangle = drawing.findMatchingRectangle(x, y);
  rectangle?.drawTravel();
  rectangle?.drawTooltip();

  if (isDev) {
    currentMousePos.value = { x, y };
    drawAll();
  }
};

const copyArrowToClipboard = (
  from: { x: number; y: number },
  to: { x: number; y: number },
) => {
  const text = `from: { x: ${from.x}, y: ${from.y} }, to: { x: ${to.x}, y: ${to.y} }`;
  console.log("copied to clipboard", text);
  navigator.clipboard.writeText(text);
};

watch(
  () => [props.lineUps, props.callouts],
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
