<template>
  <div class="header">
    <avatar></avatar>
    <div class="container">
      <div class="sm:block hidden">
        <menus></menus>
      </div>
      <div class="header-button">
        <search />
        <div class="sm:hidden block">
          <Icon icon="Bars"></Icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Avatar from "./Avatar.vue";
import Search from "./Search.vue";
import Menus from "./Menus.vue";
import { Icon } from "~/components/Icon";

export default defineComponent({
  components: {
    Avatar,
    Search,
    Menus,
    Icon,
  },
  setup() {
    return {};
  },
});
</script>