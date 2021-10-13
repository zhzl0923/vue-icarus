<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <router-view></router-view>
  </NConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NConfigProvider } from "naive-ui";
/**
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  common: {
    primaryColor: "#2080f0",
    primaryColorHover: "#4098fc",
    primaryColorPressed: "#1060c9",
    primaryColorSuppl: "#4098fc",
    infoColor: "#595959",
    infoColorHover: "#8c8c8c",
    infoColorPressed: "#8c8c8c",
    infoColorSuppl: "#595959",
  },
};
export default defineComponent({
  components: {
    NConfigProvider,
  },
  setup() {
    return {
      themeOverrides,
    };
  },
});
</script>
