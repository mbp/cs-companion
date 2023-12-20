<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { UtilityLineup } from "./types";
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

const smokes = computed(() => {
  return props.lineUps.filter((x) => x.nadeType == "smoke" && x.coordinates);
});

const nades = computed(() => {
  return props.lineUps.filter((x) => x.nadeType == "frag" && x.coordinates);
});

const molos = computed(() => {
  return props.lineUps.filter((x) => x.nadeType == "molo" && x.coordinates);
});

const flashBangs = computed(() => {
  return props.lineUps.filter(
    (x) => x.nadeType == "flashbang" && x.coordinates,
  );
});

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
      flashBang,
    );
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

const drawSmokeCoordinates = (x: number, y: number, utility: UtilityLineup) => {
  const color = "grey";
  const strokeColor = "orange";
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
  const color = "green";
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
          ctx.strokeStyle = "white";
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
