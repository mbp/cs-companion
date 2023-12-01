<script setup lang="ts">
import { computed, ref } from "vue";
import { Coordinates } from "../components/composables/types";
import Radar from "./Radar.vue";

interface Props {
  playerPaths: PlayerPath[];
  mapName: string;
}

const props = defineProps<Props>();

const pointSize = 8;

interface PlayerPath {
  path: Coordinates[];
}

const startDrawing = (context: CanvasRenderingContext2D) => {
  let timestamp = Date.now();

  const drawDot = (x: number, y: number) => {
    context.beginPath();
    context.arc(x, y, pointSize, 0, 2 * Math.PI);
    context.fillStyle = "blue";
    context.fill();
    context.stroke();
  };

  const update = () => {
    if (Date.now() < timestamp + 900) {
      return requestAnimationFrame(update);
    }
    for (const playerPath of props.playerPaths) {
      const coordinates = playerPath.path;
      var coordinate = coordinates.shift();
      if (coordinate !== undefined) {
        drawDot(coordinate.x, coordinate.y);
        timestamp = Date.now();
        requestAnimationFrame(update);
      }
    }
  };

  update();
};

const radarImage = computed(() => {
  return "url(" + (props.mapName as string).toLowerCase() + "/radar.webp" + ")";
});

let radarCanvas = ref<HTMLCanvasElement>();

const canvasMounted = (context: HTMLCanvasElement) => {
  radarCanvas.value = context;
  const ctx = radarCanvas.value!.getContext("2d")!;
  startDrawing(ctx);
};
</script>

<template>
  <Radar
    @canvas-mounted="canvasMounted"
    :canvas="radarCanvas"
    ref="radar"
    :mapName="mapName"
  />
</template>
