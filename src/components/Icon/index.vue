<template>
  <n-icon>
    <component :is="icon"></component>
  </n-icon>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {NIcon} from "naive-ui";
import * as FaIcon from "@vicons/fa";

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
  components: {
    NIcon,
    ...FaIcon,
  },
  setup() {},
});
</script>
