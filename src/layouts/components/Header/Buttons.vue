<template>
  <div class="header-button">
    <button>
      <Icon icon="search"></Icon>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "~/components/Icon";

export default defineComponent({
  components: {
    Icon,
  },
  setup() {
    return {};
  },
});
</script>