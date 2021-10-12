<template>
  <div class="header-button">
    <button @click="dialogVisible = true">
      <Icon icon="fa-solid:search" />
    </button>
    <el-dialog
      v-model="dialogVisible"
      show-close="false"
      width="40%"
      :before-close="handleClose"
    >
      <template #title>
        <el-input width="80%" prefix-icon="el-icon-search"></el-input>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Icon } from "@iconify/vue";
export default defineComponent({
  components: {
    Icon,
  },
  setup() {
    const dialogVisible = ref(false);
    return { dialogVisible };
  },
});
</script>