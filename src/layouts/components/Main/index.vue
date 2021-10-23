<template>
  <div class="main">
    <div class="main-left">
      <site-card></site-card>
      <notice></notice>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
    <div class="main-right"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SiteCard from "./SiteCard.vue";
import Notice from "./Notice.vue";

export default defineComponent({
  components: {
    SiteCard,
    Notice,
  },
  setup() {},
});
</script>