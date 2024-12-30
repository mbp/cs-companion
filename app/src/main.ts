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
  { path: "/", name: "Home", component: Home, meta: { title: "Home " } },
  {
    path: "/utility",
    name: "MapsUtility",
    component: MapsUtility,
    meta: { title: "Utility " },
  },
  {
    path: "/utility/:mapName",
    component: MapUtility,
    name: "MapUtility",
    meta: { title: "Utility - Map" },
  },
  {
    path: "/utility/:mapName/:nadeType/:id",
    component: Lineup,
    name: "Lineup",
    meta: { title: "Lineup" },
  },
  {
    path: "/strats",
    name: "MapsStrats",
    component: MapsStrats,
    meta: { title: "Strats " },
  },
  {
    path: "/strats/:mapName",
    component: MapStrats,
    name: "MapStrats",
    meta: { title: "Strats - Map" },
  },
  {
    path: "/strats/:mapName/:id",
    component: Strategy,
    name: "Strategy",
    meta: { title: "Strategy" },
  },
  {
    path: "/commands",
    name: "Commands",
    component: Commands,
    meta: { title: "Commands " },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} - CS Companion`;
  } else {
    document.title = `CS Companion`;
  }
  next();
});

createApp(App).use(router).mount("#app");
