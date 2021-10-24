<template>
  <n-layout>
    <n-layout-header>
      <Header></Header>
    </n-layout-header>
    <n-layout-content
      position="absolute"
      style="top: 60px"
      content-style="padding: 24px;"
      :native-scrollbar="false"
    >
      <Main></Main>
    </n-layout-content>
    <n-layout-footer>
      <Footer></Footer>
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Header, Main, Footer } from "./components";
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
} from "naive-ui";

export default defineComponent({
  components: {
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    Header,
    Main,
    Footer,
  },
  setup() {},
});
</script>
