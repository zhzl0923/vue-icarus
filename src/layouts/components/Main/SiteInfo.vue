<template>
  <n-card class="shadow-md hover:shadow-lg">
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
  </n-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NCard, NAvatar } from "naive-ui";
import avatar from "~/assets/images/avatar.jpg";
import { SiteInfo } from "~/components/SiteInfo";
import { SiteInfoData } from "~/layouts/data";

export default defineComponent({
  components: {
    NCard,
    NAvatar,
    SiteInfo,
  },
  setup() {
    return { avatar, SiteInfoData };
  },
});
</script>