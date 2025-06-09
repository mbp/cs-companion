<script setup lang="ts">
import { computed, ref } from "vue";
import { Coordinates } from "../types";
import Radar from "../Radar.vue";
import { StrategyEvents } from "./types";
import { DrawingEngine, useDrawing } from "../composables/use-drawing";
import { NadeType, UtilityLineup } from "../utility/types";
import { Icon } from "@iconify/vue";

interface Props {
  strategyEvents: StrategyEvents;
  lineUps: UtilityLineup[];
  mapName: string;
}

const props = defineProps<Props>();

const pointSize = 8;

const roundStartTime = 56;
const colors = ["#eda338", "#109856", "#68a3e5", "#e6f13d", "#803ca1"];
const play = ref(false);
const currentFrame = ref(0);
const playSecond = computed(() => Math.floor(currentFrame.value / 1000));
const secondsRemaining = computed(() => getRoundTime(playSecond.value));
const events = ref<Record<number, string[]>>({});
const frameStep = 1000;
const frameLevel = 100;

const getRoundTime = (playSecond: number) => {
  return roundStartTime - playSecond;
};

const frameLength = props.strategyEvents.playerPaths.reduce(
  (max, innerArray) => {
    return Math.max(max, innerArray.path.length * frameStep);
  },
  0,
);

let canvasRenderingContext: CanvasRenderingContext2D;
let drawing: DrawingEngine;

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

const drawThrow = (utility: UtilityLineup) => {
  const utilityRectangle = drawing.drawUtilityRectangle(
    utility.coordinates.x,
    utility.coordinates.y,
    utility,
  );
  utilityRectangle.drawTravel();
};

const getNadeDuration = (nadeType: NadeType) => {
  return nadeType == "smoke" ? 18 : nadeType == "molo" ? 7 : 5;
};

const drawFrame = (frame: number) => {
  clearAll();
  const messages = [];
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
            if (playSecond.value === actionThrow.playSecond) {
              messages.push("Throwing " + utility.nadeType);
            }
          }
        }
      }
    }
  }
  for (const message of props.strategyEvents.messages) {
    if (playSecond.value === message.secondStart) {
      messages.push(message.message);
    }
  }
  events.value[playSecond.value] = messages;
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
  drawing = useDrawing(canvasRenderingContext);
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
const clickRadar = () => {
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
  <div class="flex justify-center">
    <div class="w-[1024px]">
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
    </div>
    <div class="shrink-0 pl-2">
      <div class="flex flex-col items-center p-4">
        <div class="text-xl mb-4">
          1:<span>{{ secondsRemaining }}</span>
        </div>
        <div class="flex space-x-4">
          <button
            @click="backwardSecond"
            class="bg-black text-white px-4 py-2 rounded-sm hover:bg-blue-600"
          >
            <Icon icon="ri:rewind-start-fill" />
          </button>
          <button
            @click="startPlay"
            class="bg-black text-white px-4 py-2 rounded-sm hover:bg-sky-600"
          >
            <Icon v-if="!play" icon="ri:play-large-fill" />
            <Icon v-if="play" icon="ri:pause-large-fill" />
          </button>
          <button
            @click="forwardSecond"
            class="bg-black text-white px-4 py-2 rounded-sm hover:bg-blue-600"
          >
            <Icon icon="ri:forward-end-fill" />
          </button>
        </div>
        <div
          class="w-full bg-sky-800 p-4 border border-sky-700 rounded-xl my-4"
        >
          <h2 class="text-xl font-bold mb-4">Events</h2>
          <ol class="list-none ps-4">
            <div v-for="(items, key) in events" :key="key">
              <li v-for="(item, index) in items" :key="index">
                {{ "1:" + getRoundTime(key) + " - " + item }}
              </li>
            </div>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
