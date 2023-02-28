<script setup lang="ts">
import { useRouter } from "vue-router";
import { allUtilities } from "../data";

var router = useRouter();

const goMap = (mapName: string) => {
  router.push({
    name: "Map",
    params: { mapName: mapName },
  });
};

const copyCmd1 = async () => {
  const text = document.getElementById("perfect1")?.innerText;
  if (text) {
    await navigator.clipboard.writeText(text);
  }
};

const copyCmd2 = async () => {
  const text = document.getElementById("perfect2")?.innerText;
  if (text) {
    await navigator.clipboard.writeText(text);
  }
};
</script>

<template>
  <h1>CSGO Companion</h1>
  <div>
    <img src="/cs-go-1024x576.jpg" class="logo csgo" alt="CSGO" />
  </div>
  <div class="map-tiles">
    <button
      v-for="utility in allUtilities"
      class="map-tile"
      @click="goMap(utility.map)"
    >
      {{ utility.map }}
    </button>
  </div>

  <p class="footer">Perfect practice config</p>

  <button @click="copyCmd1">Copy to clipboard (#1)</button>
  <pre id="perfect1">
sv_cheats 1;bot_kick;mp_limitteams 0;mp_autoteambalance 0;mp_maxmoney 60000;mp_startmoney 60000;mp_buytime 9999;mp_buy_anywhere 1;mp_freezetime 0;mp_roundtime 60;mp_roundtime_defuse 60;mp_respawn_on_death_ct 1;mp_respawn_on_death_t 1;sv_infinite_ammo 1
  </pre>
  <button @click="copyCmd2">Copy to clipboard (#2)</button>
  <pre id="perfect2">
sv_grenade_trajectory 1;sv_grenade_trajectory_time 15;sv_showimpacts 1;sv_showimpacts_time 10;ammo_grenade_limit_total 5;mp_warmup_end;mp_restartgame 1
  </pre>
  <p class="footer">Rethrow last grenade</p>
  <pre>
sv_rethrow_last_grenade
  </pre>

  <p class="footer">Fly command</p>
  <pre>
    noclip
  </pre>
</template>

<style scoped>
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
.logo {
  height: 10em;
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
  overflow: auto;
  max-width: 300px;
  word-break: normal !important;
  word-wrap: normal !important;
  white-space: pre !important;
}
</style>
