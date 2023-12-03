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

const colors = ["#eda338", "#109856", "#68a3e5", "#e6f13d", "#803ca1"];
const play = ref(false);
const frame = ref(0);
const seconds = computed(() => 56 - frame.value);

const frameLength = props.playerPaths.reduce((max, innerArray) => {
  return Math.max(max, innerArray.path.length);
}, 0);

const startDrawing = (context: CanvasRenderingContext2D) => {
  let timestamp = Date.now();

  const drawDot = (x: number, y: number, color: string) => {
    context.beginPath();
    context.arc(x, y, pointSize, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
    context.stroke();
  };

  const drawFrame = (frame: number) => {
    clearAll();
    let index = 0;
    for (const playerPath of props.playerPaths) {
      const coordinates = playerPath.path;
      var coordinate = coordinates[frame];
      if (coordinate !== undefined) {
        drawDot(coordinate.x, coordinate.y, colors[index++]);
      }
    }
  };

  const update = () => {
    if (frame.value >= frameLength) {
      return;
    }
    if (Date.now() < timestamp + 1000) {
      return requestAnimationFrame(update);
    }
    drawFrame(frame.value);
    frame.value++;
    timestamp = Date.now();
    if (play.value) {
      requestAnimationFrame(update);
    }
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

const startPlay = () => {
  if (play.value) {
    play.value = false;
  } else {
    const ctx = radarCanvas.value!.getContext("2d")!;
    frame.value = 0;
    play.value = true;
    startDrawing(ctx);
  }
};

const backwardFrame = () => {
  frame.value = frame.value - 1;
};

const forwardFrame = () => {
  frame.value = frame.value + 1;
};

const isDev = () => {
  return import.meta.env.DEV;
};

const sampleCount = computed(() => allCoords.value.length);
let sampling = false;
const allCoords = ref<Coordinates[]>([]);

const startSampling = () => {
  if (sampling) {
    sampling = false;
    var json = JSON.stringify(allCoords.value);
    navigator.clipboard.writeText(json);
    allCoords.value = [];
  } else {
    sampling = true;
  }
};
const clickRadar = (x: number, y: number) => {
  if (!sampling) {
    return;
  }
  allCoords.value.push(currentCoords);
};

var currentCoords: Coordinates;
const mouseMoveRadar = (x: number, y: number) => {
  currentCoords = {
    x: x,
    y: y,
  };
};
</script>

<template>
  <h2>
    1:<span>{{ seconds }}</span>
  </h2>
  <p>
    <button @click="startPlay">⏯</button>
    <button @click="backwardFrame">⏮</button>
    <button @click="forwardFrame">⏭</button>
  </p>
  <Radar
    @radar-click="clickRadar"
    @radar-mouse-move="mouseMoveRadar"
    @canvas-mounted="canvasMounted"
    :canvas="radarCanvas"
    ref="radar"
    :mapName="mapName"
  />
  <p v-if="isDev()">
    <button @click="startSampling" v-if="isDev()">
      (DEV)SAMPLE {{ sampleCount }}
    </button>
  </p>
</template>
