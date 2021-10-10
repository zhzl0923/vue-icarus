<template>
  <div class="header">
    <avatar></avatar>
    <el-menu
      :default-active="route.path"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect"
    >
      <menu-item :menus="menus"></menu-item>
    </el-menu>
    <search></search>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Avatar from "./Avatar.vue";
import Search from "./Search.vue";
import MenuItem from "./MenuItem.vue";
import { menus } from "~/routes/menus";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    Avatar,
    MenuItem,
    Search,
  },
  setup() {
    const route = useRoute();
    const handleSelect = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    return {
      route,
      handleSelect,
      menus,
    };
  },
});
</script>