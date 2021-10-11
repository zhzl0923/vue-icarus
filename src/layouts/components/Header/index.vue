<template>
  <div class="header">
    <avatar></avatar>
    <div class="container">
      <el-menu
        :default-active="route.path"
        class="el-menu-demo"
        mode="horizontal"
        router
        @select="handleSelect"
      >
        <menu-item v-for="menu in menus" :key="menu.path" :menu="menu">
        </menu-item>
      </el-menu>
      <hearder-button></hearder-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Avatar from "./Avatar.vue";
import HearderButton from "./HeaderButton.vue";
import MenuItem from "./MenuItem.vue";
import { menus } from "~/routes/menus";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    Avatar,
    MenuItem,
    HearderButton,
  },
  setup() {
    const route = useRoute();
    const handleSelect = (key: any, keyPath: any) => {
      // console.log(key, keyPath);
    };
    return {
      route,
      handleSelect,
      menus,
    };
  },
});
</script>