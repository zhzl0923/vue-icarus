<template>
  <el-menu-item
    v-if="!menu.children || menu.children.length == 0"
    :key="menu.path"
    :index="menu.path"
    :route="menu"
  >
    <Icon :icon="menu.meta.icon" />
    <span>
      {{ menu.meta.title }}
    </span>
  </el-menu-item>
  <el-sub-menu
    v-if="menu.children && menu.children.length > 0"
    :index="menu.path"
    :key="menu.path"
  >
    <template #title>
      <Icon :icon="menu.meta.icon" />
      <span>
        {{ menu.meta.title }}
      </span>
    </template>
    <menu-item
      v-for="children in menu.children"
      :key="children.path"
      :menu="children"
    >
    </menu-item>
  </el-sub-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RouteRecordRaw } from "vue-router";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "MenuItem",
  props: {
    menu: {
      type: Object as PropType<RouteRecordRaw>,
      default: {},
    },
  },
  components: {
    Icon,
  },
  setup() {},
});
</script>
