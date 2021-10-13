import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    // 图标是可选的
    icon: string;
  }
}
