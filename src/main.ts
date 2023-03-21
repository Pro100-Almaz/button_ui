import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/buttons",
      component: () => import("./components/Buttons.vue"),
    },
  ],
});

createApp(App).use(router).mount("#app");
