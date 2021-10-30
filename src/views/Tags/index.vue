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
      <div ref="wordCloud" id="wordCloud"  style="width: 300px;height: 500px" class="wordCloud"/>
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
            color: '#fff',
          },
        },
        series: [{
          type: 'wordCloud',
          gridSize: 10, // 字之间的间隔大小
          // sizeRange: [12, 50], // 最小字体和最大字体
          sizeRange: [14, 14], // 最小字体和最大字体 必须写一个范围不能直接写sizeRange: 14，
          rotationRange: [0, 0], // 字体旋转角度的范围，这里水平
          shape: 'smooth', // 形状
          width: 400,
          height: 150,
          drawOutOfBound: false, // 字是否叠加
          textStyle: {
            color: '#FFF',
          },
          emphasis: { // 字高亮时显示的效果
            textStyle: {
              shadowBlur: 10, // 阴影距离
              shadowColor: '#red', // 阴影颜色
            },
          },
          data: [
            {
              name: 'Sam S Club',
              value: 10000,
              textStyle: {
                color: 'black',
                lineHeight: 24,
                borderRadius: 10,
                width: 100,
              },
              // 鼠标放上的效果
              emphasis: {
                textStyle: {
                  color: 'red',
                },
              },
            },
            {
              name: '危险废物企业1',
              value: 61810,
              textStyle: {
                color: 'black',
                lineHeight: 24,
                borderRadius: 10,
                width: 100,
              },
              // 鼠标放上的效果
              emphasis: {
                textStyle: {
                  color: 'red',
                },
              },
            },
            {
              name: '医疗机构',
              value: 4386,
              textStyle: {
                color: 'black',
                lineHeight: 24,
                borderRadius: 10,
                width: 100,
              },
              // 鼠标放上的效果
              emphasis: {
                textStyle: {
                  color: 'red',
                },
              },
            },
            {
              name: '干洗店',
              value: 4055,
              textStyle: {
                color: 'black',
                lineHeight: 24,
                borderRadius: 10,
                width: 100,
              },
              // 鼠标放上的效果
              emphasis: {
                textStyle: {
                  color: 'red',
                },
              },
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
