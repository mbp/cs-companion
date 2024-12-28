import { createApp } from "vue";
import "./styles/tailwind.css";
import "./styles/legacy.css";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Commands from "./components/Commands.vue";
import MapUtility from "./components/MapUtility.vue";
import MapsUtility from "./components/MapsUtility.vue";
import MapStrats from "./components/MapStrats.vue";
import MapsStrats from "./components/MapsStrats.vue";
import Lineup from "./components/utility/Lineup.vue";
import Strategy from "./components/strategy/Strategy.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/utility", name: "MapsUtility", component: MapsUtility },
  { path: "/utility/:mapName", component: MapUtility, name: "MapUtility" },
  {
    path: "/utility/:mapName/:nadeType/:id",
    component: Lineup,
    name: "Lineup",
  },
  { path: "/strats", name: "MapsStrats", component: MapsStrats },
  { path: "/strats/:mapName", component: MapStrats, name: "MapStrats" },
  {
    path: "/strats/:mapName/:id",
    component: Strategy,
    name: "Strategy",
  },
  { path: "/commands", name: "Commands", component: Commands },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
