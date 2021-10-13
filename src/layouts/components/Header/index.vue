<template>
  <div class="header">
    <avatar></avatar>
    <div class="container">
      <menus></menus>
      <hearder-button></hearder-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Avatar from "./Avatar.vue";
import HearderButton from "./Buttons.vue";
import Menus from "./Menus.vue";

export default defineComponent({
  components: {
    Avatar,
    HearderButton,
    Menus,
  },
  setup() {
    return {};
  },
});
</script>