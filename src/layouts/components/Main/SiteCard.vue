<template>
  <n-card class="site-card">
    <div class="site-card-avatar">
      <n-avatar class="rotate" :round="true" :src="avatar" :size="120">
      </n-avatar>
    </div>
    <div class="site-card-info">
      <site-info :options="SiteInfoData"></site-info>
    </div>
    <n-button type="primary" class="w-full">
      <a href="">Follow me</a>
    </n-button>
    <div class="site-card-social">
      <div class="p-4 rotate">
        <icon icon="Envelope" />
      </div>
      <div class="p-4 rotate">
        <icon icon="Envelope" />
      </div>
    </div>
  </n-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NCard, NAvatar, NButton } from "naive-ui";
import avatar from "~/assets/images/avatar.jpg";
import { SiteInfo } from "~/components/SiteInfo";
import { SiteInfoData } from "~/layouts/data";
import { Icon } from "~/components/Icon";

export default defineComponent({
  components: {
    NCard,
    NAvatar,
    SiteInfo,
    NButton,
    Icon,
  },
  setup() {
    return { avatar, SiteInfoData };
  },
});
</script>