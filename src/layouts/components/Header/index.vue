<template>
  <div class="header">
    <avatar></avatar>
    <div class="container">
      <div class="sm:block hidden">
        <menus :options="options"></menus>
      </div>
      <div class="header-button">
        <search />
        <div class="sm:hidden block">
          <n-button @click="handleBarClick">
            <Icon icon="Bars"></Icon>
          </n-button>
        </div>
      </div>
    </div>
    <n-drawer v-model:show="active" width="60%" placement="left">
      <n-drawer-content>
        <sidebar :options="options"></sidebar>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NDrawer, NDrawerContent, NButton, MenuOption } from "naive-ui";
import { Icon } from "~/components/Icon";
import { menus } from "~/routes/menus";
import { convertMenusToMenuOption } from "~/utils/menu";
import Avatar from "./Avatar.vue";
import Search from "./Search.vue";
import Menus from "./Menus.vue";
import Sidebar from "./Sidebar.vue";

export default defineComponent({
  components: {
    Avatar,
    Search,
    Menus,
    Sidebar,
    Icon,
    NButton,
    NDrawer,
    NDrawerContent,
  },
  setup() {
    const options: MenuOption[] = convertMenusToMenuOption(menus);
    const active = ref(false);
    const handleBarClick = () => {
      active.value = !active.value;
    };
    return {
      options,
      active,
      handleBarClick,
    };
  },
});
</script>