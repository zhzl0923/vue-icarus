<template>
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
    <site-info :options="SiteInfoData"></site-info>
  </div>
  <n-divider />
  <div>
    <n-menu :value="route.path" :options="options" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MenuOption } from "naive-ui";
import { useRoute } from "vue-router";
import { NMenu, NAvatar, NDivider } from "naive-ui";
import { Icon } from "~/components/Icon";
import avatar from "~/assets/images/avatar.jpg";
import { SiteInfo } from "~/components/SiteInfo";
import { SiteInfoData } from "~/layouts/data";

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
    SiteInfo,
  },
  setup() {
    const route = useRoute();

    return { route, avatar, SiteInfoData };
  },
});
</script>