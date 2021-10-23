<template>
  <div class="table-cell" v-for="option in options" :key="option.path">
    <router-link :to="option.path">
      <div>{{ option.title }}</div>
      <div class="text-xl">{{ option.num }}</div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { SiteInfoOption } from "./types";

export default defineComponent({
  props: {
    options: {
      type: Array as PropType<SiteInfoOption[]>,
      default: [],
    },
  },
  setup() {},
});
</script>