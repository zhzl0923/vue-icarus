import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import type { App } from "vue";
import { menus } from "./menu";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("~/layouts/index.vue"),
    meta: { title: "", icon: "" },
    children: menus,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};
