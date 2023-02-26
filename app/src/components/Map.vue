<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { allUtilities } from "../data";
import Utility from "./Utility.vue";

const route = useRoute();
const mapName = route.params.mapName;
const utilites = computed(() => {
  return allUtilities.find((x) => x.map == (mapName as string))!;
});

const pointSize = 8;

const smokesCoordinates = computed(() => {
  return utilites.value.smokes
    .filter((x) => x.coordinates)
    .map((x) => x.coordinates!);
});

onMounted(() => {
  for (const smokeCoordinate of smokesCoordinates.value) {
    drawSmokeCoordinates(smokeCoordinate?.x, smokeCoordinate.y);
  }
});

const radarImage = computed(() => {
  return "url(" + (mapName as string).toLowerCase() + "/radar.jpg" + ")";
});

let mapCanvas = ref<HTMLCanvasElement>();

const clickCanvas = (event: MouseEvent) => {
  getPosition(event);
};

const getPosition = (event: MouseEvent) => {
  var rect = mapCanvas.value!.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  console.log("x,y", x, y);
  findMatchingCoordinate(x, y);
};

const contains = (rect: Rectangle, x: number, y: number) => {
  return (
    x >= rect.x &&
    x <= rect.x + rect.width &&
    y >= rect.y &&
    y <= rect.y + rect.height
  );
};

type Rectangle = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const findMatchingCoordinate = (x: number, y: number) => {
  for (const smokeCoordinate of smokesCoordinates.value) {
    const rectangle = {
      x: smokeCoordinate.x,
      y: smokeCoordinate.y,
      width: pointSize,
      height: pointSize,
    };

    if (contains(rectangle, x, y)) {
      console.log("found it");
    }
  }
};

const drawSmokeCoordinates = (x: number, y: number) => {
  const color = "grey";
  const strokeColor = "white";
  drawCoordinates(x, y, color, strokeColor);
};

const drawCoordinates = (
  x: number,
  y: number,
  color: string,
  strokeColor: string
) => {
  const ctx = mapCanvas.value!.getContext("2d")!;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
  ctx.strokeStyle = strokeColor;
  ctx.stroke();
  ctx.fill();
};
</script>

<template>
  <h1>
    {{ mapName }}
  </h1>

  <canvas
    ref="mapCanvas"
    @click="clickCanvas"
    width="900"
    height="900"
    :style="{ background: radarImage }"
  ></canvas>

  <h2>Smoke Grenade</h2>
  <div v-for="smoke in utilites.smokes">
    <Utility :utilityLineup="smoke" />
  </div>
  <h2>Molotov / Incendiary Grenade</h2>
  <div v-for="molo in utilites.molotovs">
    <Utility :utilityLineup="molo" />
  </div>
  <h2>Flashbang</h2>
  <div v-for="flash in utilites.flashBangs">
    <Utility :utilityLineup="flash" />
  </div>
  <h2>Frag Grenade</h2>
  <div v-for="nade in utilites.fragGrenades">
    <Utility :utilityLineup="nade" />
  </div>
</template>

<style>
canvas {
  cursor: crosshair;
}
</style>
