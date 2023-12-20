<script setup lang="ts">
import { computed, ref } from "vue";
import { Coordinates } from "../types";
import Radar from "../Radar.vue";
import { ActionThrow, StrategyEvents } from "./types";
import { useDrawing } from "../composables/use-drawing";
import { NadeType, UtilityLineup } from "../utility/types";

interface Props {
  strategyEvents: StrategyEvents;
  lineUps: UtilityLineup[];
  mapName: string;
}

const props = defineProps<Props>();

const pointSize = 8;

const colors = ["#eda338", "#109856", "#68a3e5", "#e6f13d", "#803ca1"];
const play = ref(false);
const currentFrame = ref(0);
const playSecond = computed(() => Math.floor(currentFrame.value / 1000));
const secondsRemaining = computed(() => 56 - playSecond.value);
const frameStep = 1000;
const frameLevel = 100;

const frameLength = props.strategyEvents.playerPaths.reduce(
  (max, innerArray) => {
    return Math.max(max, innerArray.path.length * frameStep);
  },
  0,
);

let canvasRenderingContext: CanvasRenderingContext2D;

const drawPlayerDot = (x: number, y: number, color: string) => {
  canvasRenderingContext.beginPath();
  canvasRenderingContext.arc(x, y, pointSize, 0, 2 * Math.PI);
  canvasRenderingContext.fillStyle = color;
  canvasRenderingContext.lineWidth = 1;
  canvasRenderingContext.setLineDash([]);
  canvasRenderingContext.strokeStyle = "#000";
  canvasRenderingContext.fill();
  canvasRenderingContext.stroke();
  canvasRenderingContext.closePath();
};

const drawMessage = (message: string) => {
  canvasRenderingContext.strokeStyle = "black";
  canvasRenderingContext.fillStyle = "white";
  canvasRenderingContext.font = "20px Arial";
  canvasRenderingContext.fillText(message, 50, 50);
};

const drawThrow = (utility: UtilityLineup) => {
  const drawing = useDrawing(canvasRenderingContext);
  const utilityRectangle = drawing.createUtilityRectangle(
    utility.coordinates.x,
    utility.coordinates.y,
    utility,
  );
  drawing.drawUtilityRectangle(utilityRectangle);
};

const getNadeDuration = (nadeType: NadeType) => {
  return nadeType == "smoke" ? 18 : nadeType == "molo" ? 7 : 5;
};

const drawFrame = (frame: number) => {
  clearAll();
  let index = 0;
  const frameDivision = (frame % frameStep) / frameLevel;
  for (const playerPath of props.strategyEvents.playerPaths) {
    const playerColor = colors[index++];
    const coordinates = playerPath.path;
    var coordinate1 = coordinates[playSecond.value];
    var coordinate2 = coordinates[playSecond.value + 1];
    var coordinate =
      coordinate2 === undefined
        ? coordinate1
        : {
            x:
              coordinate1.x +
              frameDivision * ((coordinate2.x - coordinate1.x) / 10),
            y:
              coordinate1.y +
              frameDivision * ((coordinate2.y - coordinate1.y) / 10),
          };
    if (coordinate !== undefined) {
      drawPlayerDot(coordinate.x, coordinate.y, playerColor);
      if (playerPath.actionThrows) {
        for (const actionThrow of playerPath.actionThrows) {
          const utility = props.lineUps.find((x) => x.id == actionThrow.id)!;
          const duration = getNadeDuration(utility.nadeType);
          if (
            playSecond.value >= actionThrow.playSecond &&
            actionThrow.playSecond - duration < playSecond.value
          ) {
            drawThrow(utility);
          }
        }
      }
    }
  }
  for (const message of props.strategyEvents.messages) {
    if (
      playSecond.value >= message.secondStart &&
      playSecond.value <= message.secondEnd
    ) {
      drawMessage(message.message);
    }
  }
};

const startDrawing = () => {
  let timestamp = Date.now();

  const update = () => {
    if (currentFrame.value >= frameLength) {
      play.value = false;
      return;
    }
    if (Date.now() < timestamp + frameLevel) {
      return requestAnimationFrame(update);
    }
    drawFrame(currentFrame.value);
    currentFrame.value = currentFrame.value + frameLevel;
    timestamp = Date.now();
    if (play.value) {
      requestAnimationFrame(update);
    }
  };

  update();
};

const clearAll = () => {
  canvasRenderingContext.clearRect(0, 0, 1024, 1024);
};

const canvasMounted = (context: HTMLCanvasElement) => {
  canvasRenderingContext = context.getContext("2d")!;
  startDrawing();
};

const startPlay = () => {
  if (play.value) {
    play.value = false;
  } else {
    console.log(currentFrame.value, frameLength);
    if (currentFrame.value == frameLength) {
      // if we reached the end, restart it
      currentFrame.value = 0;
    }
    play.value = true;
    startDrawing();
  }
};

const backwardSecond = () => {
  currentFrame.value = currentFrame.value - frameStep;
  drawFrame(currentFrame.value);
};

const forwardSecond = () => {
  currentFrame.value = currentFrame.value + frameStep;
  drawFrame(currentFrame.value);
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
    1:<span>{{ secondsRemaining }}</span>
  </h2>
  <p>
    <button @click="startPlay">⏯</button>
    <button @click="backwardSecond">⏮</button>
    <button @click="forwardSecond">⏭</button>
  </p>
  <Radar
    ref="radar"
    :map-name="mapName"
    @radar-click="clickRadar"
    @radar-mouse-move="mouseMoveRadar"
    @canvas-mounted="canvasMounted"
  />
  <p v-if="isDev()">
    <button v-if="isDev()" @click="startSampling">
      (DEV)SAMPLE {{ sampleCount }}
    </button>
  </p>
</template>
