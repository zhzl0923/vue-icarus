<template>
  <icon-utils>
    <component :is="icon"></component>
  </icon-utils>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon as IconUtils } from "@vicons/utils";
import * as FaIcon from "@vicons/fa";

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
  components: {
    IconUtils,
    ...FaIcon,
  },
  setup(props) {},
});
</script>