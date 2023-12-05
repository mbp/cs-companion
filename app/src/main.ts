import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Maps from "./components/Maps.vue";
import Map from "./components/Map.vue";
import Utility from "./components/utility/Utility.vue";
import Strategy from "./components/strategy/Strategy.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: Maps },
  { path: "/map/:mapName", component: Map, name: "Map" },
  {
    path: "/map/:mapName/utility/:nadeType/:id",
    component: Utility,
    name: "Utility",
  },
  {
    path: "/map/:mapName/strategy/:id",
    component: Strategy,
    name: "Strategy",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
