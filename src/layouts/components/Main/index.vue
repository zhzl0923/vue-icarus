<template>
  <div class="main">
    <site-info></site-info>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SiteInfo from "./SiteInfo.vue";

export default defineComponent({
  components: {
    SiteInfo,
  },
  setup() {},
});
</script>