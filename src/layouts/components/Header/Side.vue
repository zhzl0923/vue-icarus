<template>
  <div>
    <div class="flex justify-center">
      <n-avatar
        :style="{ border: '1px solid #f7f7f7' }"
        :round="true"
        :src="avatar"
        :size="120"
      >
      </n-avatar>
    </div>
    <div class="table table-fixed w-full text-center mt-8 mb-8 leading-loose">
      <div class="table-cell">
        <router-link to="/archive">
          <div>文章</div>
          <div class="text-lg">18</div>
        </router-link>
      </div>
      <div class="table-cell">
        <router-link to="/categories">
          <div>分类</div>
          <div class="text-lg">18</div>
        </router-link>
      </div>
      <div class="table-cell">
        <router-link to="/tags">
          <div>标签</div>
          <div class="text-lg">18</div>
        </router-link>
      </div>
    </div>
    <n-divider />
    <div>
      <n-menu :value="route.path" :options="options" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MenuOption } from "naive-ui";
import { useRoute } from "vue-router";
import { NMenu, NAvatar, NDivider } from "naive-ui";
import { Icon } from "~/components/Icon";
import avatar from "~/assets/images/avatar.jpg";

export default defineComponent({
  props: {
    options: {
      type: Array as PropType<MenuOption[]>,
      default: [],
    },
  },
  components: {
    NMenu,
    Icon,
    NAvatar,
    NDivider,
  },
  setup() {
    const route = useRoute();

    return { route, avatar };
  },
});
</script>