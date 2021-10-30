<template>
  <n-card class="w-full">
    <template #header>
      <div class="flex space-x-2 text-center justify-center items-center text-xl">
        <span>标签</span>
        <span>-</span>
        <span>13</span>
      </div>
    </template>
    <template #default>

    </template>
  </n-card>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {NButton, NCard,} from "naive-ui";


export default defineComponent({
  components: {
    NCard,
    NButton
  },
  setup() {
  },
});
</script>
