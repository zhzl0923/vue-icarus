<template>
  <div class="main">
    <div class="main-left">
      <site-card></site-card>
      <notice></notice>
      <recent></recent>
      <comments></comments>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SiteCard from "./SiteCard.vue";
import Notice from "./Notice.vue";
import Comments  from './Comments.vue'
import Recent from './Recent.vue'

export default defineComponent({
  components: {
    SiteCard,
    Notice,
    Comments,
    Recent
  },
  setup() {},
});
</script>
