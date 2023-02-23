<!--

  质量管控在成本中的占比 以及意义

  应由图标 动态。和成本占比饼图。


 -->
<template>
  <div>
    <div ref="charts" class="charts"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
const charts = ref(null)
const colors = ['#5470C6', '#EE6666']
const option = {
  color: colors,
  // tooltip: {
  //   trigger: 'none',
  //   axisPointer: {
  //     type: 'cross'
  //   }
  // },
  legend: {},
  grid: {
    top: 70,
    bottom: 50
  },
  xAxis: [
    {
      type: 'category',
      // axisTick: {
      //   alignWithLabel: true
      // },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[1]
        }
      }
      // axisPointer: {
      //   label: {
      //     formatter: function (params) {
      //       return (
      //         'Precipitation  ' +
      //         params.value +
      //         (params.seriesData.length ? '：' + params.seriesData[0].data : '')
      //       )
      //     }
      //   }
      // },
      // prettier-ignore
      // data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
    },
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[0]
        }
      }
      // axisPointer: {
      //   label: {
      //     formatter: function (params) {
      //       return (
      //         'Precipitation  ' +
      //         params.value +
      //         (params.seriesData.length ? '：' + params.seriesData[0].data : '')
      //       )
      //     }
      //   }
      // },
      // // prettier-ignore
      // data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '事故代价',
      data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      type: 'line'
    },
    {
      name: '成本控制',
      data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0],
      type: 'line'
    },
    {
      name: '最优解',
      data: [100, 95, 85, 75, 65, 60, 65, 75, 85, 95, 100],
      type: 'line',
      smooth: true
    }
  ]
}

const showCharts = () => {
  const myChart = echarts.init(charts.value)
  myChart.setOption(option)
}
defineExpose({
  showCharts
})
</script>

<style lang="scss" scoped>
.charts {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
