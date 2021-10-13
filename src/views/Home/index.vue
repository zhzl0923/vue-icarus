<template>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="primary">Primary</n-button>
    <n-button type="info">Info</n-button>
    <n-button type="success">Success</n-button>
    <n-button type="warning">Warning</n-button>
    <n-button type="error">Error</n-button>
  </n-space>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NSpace, NButton } from "naive-ui";

export default defineComponent({
  components: {
    NSpace,
    NButton,
  },
  setup() {},
});
</script>
