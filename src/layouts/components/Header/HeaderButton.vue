<template>
  <div class="header-button">
    <button>
      <Icon icon="fa-solid:search" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
export default defineComponent({
  components: {
    Icon,
  },
  setup() {},
});
</script>