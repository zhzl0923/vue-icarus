<template>
  <n-menu v-model:value="route.path" mode="horizontal" :options="options" />
</template>

<script lang="ts">
import { defineComponent, h } from "vue";
import { menus } from "~/routes/menus";
import { MenuOption } from "naive-ui";
import { convertMenusToMenuOption } from "~/utils/menu";
import { useRoute } from "vue-router";
import { NMenu } from "naive-ui";
import { Icon } from "~/components/Icon";

export default defineComponent({
  components: {
    NMenu,
    Icon,
  },
  setup() {
    const route = useRoute();
    const options: MenuOption[] = convertMenusToMenuOption(menus);
    return { options, route };
  },
});
</script>