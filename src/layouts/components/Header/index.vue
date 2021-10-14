<template>
  <div class="header">
    <avatar></avatar>
    <div class="container">
      <menus></menus>
      <div class="header-button">
        <search />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Avatar from "./Avatar.vue";
import Search from "./Search.vue";
import Menus from "./Menus.vue";

export default defineComponent({
  components: {
    Avatar,
    Search,
    Menus,
  },
  setup() {
    return {};
  },
});
</script>