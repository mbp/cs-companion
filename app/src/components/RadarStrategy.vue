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

const colors = ["#eda338", "#109856", "#68a3e5", "#e6f13d", "#803ca1"]
let play = false;
let frame = 0;

const startDrawing = (context: CanvasRenderingContext2D) => {
  let timestamp = Date.now();

  const drawDot = (x: number, y: number, color: string) => {
    context.beginPath();
    context.arc(x, y, pointSize, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
    context.stroke();
  };

  const update = () => {
    if (Date.now() < timestamp + 900) {
      return requestAnimationFrame(update);
    }
    clearAll();
    let index = 0;
    for (const playerPath of props.playerPaths) {
      const coordinates = playerPath.path;
      var coordinate = coordinates[frame];
      if (coordinate !== undefined) {
        drawDot(coordinate.x, coordinate.y, colors[index++]);
        timestamp = Date.now();
        if (play) {
          requestAnimationFrame(update);
        }
      }
    }
    frame++;
  };

  update();
};

const clearAll = () => {
  const ctx = radarCanvas.value!.getContext("2d")!;
  ctx.clearRect(0, 0, 1024, 1024);
};

let radarCanvas = ref<HTMLCanvasElement>();

const canvasMounted = (context: HTMLCanvasElement) => {
  radarCanvas.value = context;
  const ctx = radarCanvas.value!.getContext("2d")!;
  startDrawing(ctx);
};

const start = () => {
  const ctx = radarCanvas.value!.getContext("2d")!;
  frame = 0;
  play = true;
  startDrawing(ctx);
}
</script>

<template>
  <p>
    <button @click="start">START</button>
  </p>
  <Radar
    @canvas-mounted="canvasMounted"
    :canvas="radarCanvas"
    ref="radar"
    :mapName="mapName"
  />
</template>
