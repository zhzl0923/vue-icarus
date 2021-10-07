<template>
  <el-config-provider locale="zh-cn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const message = "hello world";
    return { message };
  },
});
</script>
