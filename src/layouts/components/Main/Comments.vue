<template>
  <n-card class="site-card">
    <template #header>
      <div class="aside-list-title">
        <span class="flex"><icon icon="CommentDots"/></span>
        <span>最新评论</span>
      </div>
    </template>
    <template #default>
      <div class="aside-list-item">
        <div class="aside-list-item-img">
          <img alt="" src="src/assets/images/avatar.jpg">
        </div>
        <div class="aside-list-item-content">
          <p>很不错</p>
          <div>
            <span>Mr.L /</span>
            <span>12小时以前</span>
          </div>
        </div>
      </div>
    </template>
  </n-card>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {NCard} from "naive-ui";
import {Icon} from "~/components/Icon/index";

export default defineComponent({
  components: {
    NCard,
    Icon
  },
  setup() {
  },
});
</script>
