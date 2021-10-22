import { RouteRecordRaw } from "vue-router";

export const menus: RouteRecordRaw[] = [
  {
    name: "首页",
    path: "/",
    component: () => import("~/views/Home/index.vue"),
    meta: { icon: "Home" },
  },
  {
    name: "分类",
    path: "/categories",
    component: () => import("~/views/Categories/index.vue"),
    meta: { icon: "FolderOpen" },
  },
  {
    name: "标签",
    path: "/tags",
    component: () => import("~/views/Tags/index.vue"),
    meta: { icon: "Tags" },
  },
  {
    name: "归档",
    path: "/archive",
    component: () => import("~/views/Archive/index.vue"),
    meta: { icon: "Archive" },
  },
  {
    name: "友链",
    path: "/Links",
    component: () => import("~/views/Links/index.vue"),
    meta: { icon: "Link" },
  },
];
