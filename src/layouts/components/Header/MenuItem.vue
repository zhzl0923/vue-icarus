<template>
  <template v-for="menu in menus">
    <el-menu-item
      v-if="!menu.children"
      :key="menu.path"
      :index="menu.path"
      :route="menu"
    >
      {{ menu.meta.title }}
    </el-menu-item>
    <el-sub-menu v-else :index="menu.path" :key="menu.path">
      <template #title>{{ menu.meta.title }}</template>
      <menu-item :menus="menu.children"></menu-item>
    </el-sub-menu>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RouteRecordRaw } from "vue-router";

export default defineComponent({
  props: {
    menus: {
      type: Array as PropType<RouteRecordRaw[]>,
      default: [],
    },
    path: {
      type: String,
      default: "",
    },
  },
  setup() {},
});
</script>
