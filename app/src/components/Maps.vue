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
</script>

<template>
  <h1>Counter-Strike Companion</h1>
  <div>
    <img src="/logo_cs_full.svg" class="logo csgo" alt="Counter-Strike" />
  </div>
  <div class="map-tiles">
    <button
      v-for="mapScheme in allMapSchemes"
      :key="mapScheme.map"
      class="map-tile"
      @click="goMap(mapScheme.map)"
    >
      {{ mapScheme.map }}
    </button>
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
    0 0 3px orange,
    0 0 5px orange;
}
.footer {
  color: #888;
}
.map-tiles {
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.map-tile {
  background-color: #8d918d;
  filter: drop-shadow(0 0 1em #646cffaa);
}
.map-tile:hover {
  background-color: black;
  filter: drop-shadow(0 0 1em yellow);
}

.command-tiles {
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
