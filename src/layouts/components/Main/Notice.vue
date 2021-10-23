<template>
  <n-card class="site-card">
    <template #header>
      <div class="space-x-2">
        <Icon icon="Bullhorn" class="notice-animate" />
        <span>公告</span>
      </div>
    </template>
    <template #default>
      <span> 努力应该是一种习惯，而不是一时兴起，得到的从来都不是侥幸。 </span>
    </template>
  </n-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NCard } from "naive-ui";
import { Icon } from "~/components/Icon";

export default defineComponent({
  components: {
    NCard,
    Icon,
  },
  setup() {},
});
</script>