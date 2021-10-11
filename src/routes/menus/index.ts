import { RouteRecordRaw } from "vue-router";

export const menus: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("~/views/Home/index.vue"),
    meta: { title: "首页", icon: "fa-solid:home" },
  },
  {
    path: "/categories",
    component: () => import("~/views/Categories/index.vue"),
    meta: { title: "分类", icon: "fa-solid:folder-open" },
  },
  {
    path: "/tags",
    component: () => import("~/views/Tags/index.vue"),
    meta: { title: "标签", icon: "fa-solid:tag" },
  },
  {
    path: "/archive",
    component: () => import("~/views/Archive/index.vue"),
    meta: { title: "归档", icon: "fa-solid:archive" },
  },
  {
    path: "/friends",
    component: () => import("~/views/Friends/index.vue"),
    meta: { title: "友链", icon: "fa-solid:user-friends" },
  },
];
