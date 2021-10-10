<template>
  <div class="layout">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Header, Main, Footer } from "./components";

export default defineComponent({
  components: {
    Header,
    Main,
    Footer,
  },
  setup() {},
});
</script>
