<template>
  <n-card class="w-full">
    <template #header>
      <div class="flex space-x-2 text-center justify-center items-center text-xl">
        <span>标签</span>
        <span>-</span>
        <span>13</span>
      </div>
    </template>
    <template #default>
      <div ref="wordCloud" id="wordCloud"  class="tags-word-cloud"/>
    </template>
  </n-card>
</template>

<script lang="ts">
import {defineComponent,ref,onMounted} from "vue";
import {NButton, NCard,} from "naive-ui";
import * as echarts from 'echarts'
import 'echarts-wordcloud';


export default defineComponent({
  components: {
    NCard,
    NButton,
    echarts
  },
  setup() {
    // echart节点
    const charts = ref<HTMLElement | null>(null);
    const getRandomColor = () => {
      // Random color
      return 'rgb(' + [
        Math.round(Math.random() * 160),
        Math.round(Math.random() * 160),
        Math.round(Math.random() * 160)
      ].join(',') + ')';
    };
    const color = [
        'rgb(255, 208, 119)',
        'rgb(59, 196, 199)',
        'rgb(58, 158, 234)',
        'rgb(255, 78, 105)',
        'rgb(70, 30, 71)'
    ];
    onMounted(() => {
      // 获取节点
      const myChart = echarts.init(
          document.getElementById('wordCloud') as HTMLElement,
      );
      myChart.setOption({
        tooltip: {
          backgroundColor: '',
          borderColor: 'red',
          textStyle: {
            color: '#333',
          },
        },
        series: [{
          type: 'wordCloud',
          gridSize: 10, // 字之间的间隔大小
          sizeRange: [12, 50], // 最小字体和最大字体
          // sizeRange: [14, 14], // 最小字体和最大字体 必须写一个范围不能直接写sizeRange: 14，
          rotationRange: [0, 0], // 字体旋转角度的范围，这里水平
          shape: 'circle', // 形状
          width: '100%',
          height: '100%',
          drawOutOfBound: false, // 字是否叠加
          textStyle: {
            normal: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              // Color can be a callback function or a color string
              color: function () {
                // Random color
                return 'rgb(' + [
                  Math.round(Math.random() * 256),
                  Math.round(Math.random() * 256),
                  Math.round(Math.random() * 256)
                ].join(',') + ')';
              }
            },
            emphasis: {
              shadowBlur: 2,
              shadowColor: '#000'
            }
          },
          emphasis: { // 字高亮时显示的效果
            textStyle: {
              shadowBlur: 10, // 阴影距离
              shadowColor: '#red', // 阴影颜色
            },
          },
          data: [
            {
              name: '标签一',
              value: 10000,
            },
            {
              name: '标签二',
              value: 61810,
            },
            {
              name: '标签三',
              value: 4386,
            },
            {
              name: '标签四',
              value: 4055,
            },
          ],
        }],

      });
    });
    return {
      charts,
    };
  },
});
</script>
