import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Maps from "./components/Maps.vue";
import Map from "./components/Map.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Maps },
  { path: "/map/:mapName", component: Map, name: "Map" },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

createApp(App).use(router).mount("#app");
