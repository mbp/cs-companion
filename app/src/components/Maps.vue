<script setup lang="ts">
import { useRouter } from "vue-router";
import { allMapSchemes } from "../data";

var router = useRouter();

const goMap = (mapName: string) => {
  router.push({
    name: "Map",
    params: { mapName: mapName },
  });
};
const copyCmd = async (id: string) => {
  const text = document.getElementById(id)?.innerText;
  if (text) {
    await navigator.clipboard.writeText(text);
  }
};

const getMapIcon = (mapName: string) => {
  return `${mapName.toLocaleLowerCase()}/icon.svg`;
};
</script>

<template>
  <h1>Counter-Strike Companion</h1>
  <div class="map-tiles">
    <a
      v-for="mapScheme in allMapSchemes"
      :key="mapScheme.map"
      @click="goMap(mapScheme.map)"
      ><img
        class="map-tile"
        style="width: 100%"
        :src="getMapIcon(mapScheme.map)"
    /></a>
  </div>

  <div class="command-tiles">
    <div>
      <p class="footer">Rethrow last grenade</p>
      <pre id="rethrow">sv_rethrow_last_grenade</pre>
      <button @click="copyCmd('rethrow')">Copy</button>
    </div>

    <div>
      <p class="footer">Fly command</p>
      <pre id="fly">noclip</pre>
      <button @click="copyCmd('fly')">Copy</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-shadow:
    0 0 3px #646cffaa,
    0 0 5px #646cffaa;
}
.footer {
  color: #888;
}
.map-tiles a {
  cursor: pointer;
}
.map-tiles {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15%, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
}
.map-tile:hover {
  filter: drop-shadow(0 0 1em #646cffaa);
}

.command-tiles {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15%, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
}
.logo {
  height: 3em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

pre {
  background-color: grey;
  border: 1px dotted white;
  margin: auto;
  height: auto;
  max-height: 200px;
  padding: 5px;
  overflow: auto;
  max-width: 300px;
  word-break: normal !important;
  word-wrap: normal !important;
  white-space: pre !important;
}
</style>
