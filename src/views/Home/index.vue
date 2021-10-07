<template>
  <div>
    <el-button type="primary">{{ message }}</el-button>
    <el-button type="info">{{ message }}</el-button>
    <el-button type="success">{{ message }}</el-button>
    <el-button type="warning">{{ message }}</el-button>
    <el-button type="danger">{{ message }}</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const message = "Hello World!";
    return { message };
  },
});
</script>
