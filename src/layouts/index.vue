<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <Main></Main>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
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
