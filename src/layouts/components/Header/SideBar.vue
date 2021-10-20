<template>
  <n-menu v-model:value="route.path" :options="options" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MenuOption } from "naive-ui";
import { useRoute } from "vue-router";
import { NMenu } from "naive-ui";
import { Icon } from "~/components/Icon";

export default defineComponent({
  props: {
    options: {
      type: Array as PropType<MenuOption[]>,
      default: [],
    },
  },
  components: {
    NMenu,
    Icon,
  },
  setup() {
    const route = useRoute();

    return { route };
  },
});
</script>