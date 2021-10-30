<template>
  <n-card class="w-full">
    <template #header>
      <div class="flex space-x-2 text-center justify-center items-center text-xl">
        <span>分类</span>
        <span>-</span>
        <span>13</span>
      </div>
    </template>
    <template #default>
      <n-tree
          block-line
          :data="data"
          :default-expanded-keys="defaultExpandedKeys"
          :selectable="false"
      />
    </template>
  </n-card>
</template>
<script lang="ts">
import { h, defineComponent, ref } from 'vue'
import {NTree,NCard,NButton, TreeOption} from "naive-ui";

function createData (level = 4, baseKey = '') :TreeOption[] {
  if (!level) return []
  return Array.apply(null, { length: 6 - level } as unknown[]).map((_, index) => {
    const key = '' + baseKey + level + index
    const label = createLabel(level)
    return {
      label,
      key,
      children: createData(level - 1, key),
      suffix: () =>
          h(
              NButton,
              { text: true, type: 'primary' },
              { default: () => 'Suffix' }
          ),

    }
  })
}

function createLabel (level: number) {
  if (level === 4) return '道生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
}
export default defineComponent({
  components:{
    NCard,
    NButton,
    NTree
  },
  setup() {
    return {
      data: createData(),
      defaultExpandedKeys: ref(['40', '41'])
    }
  },
});
</script>
