<template>
  <div class="box">
    <div ref="charts" class="charts"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
const charts = ref(null)
const colors = ['#5470C6', '#EE6666']
const option = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%'
  },
  // toolbox: {
  //   feature: {
  //     dataView: { readOnly: false },
  //     restore: {},
  //     saveAsImage: {}
  //   }
  // },
  // legend: {
  //   data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
  // },
  series: [
    {
      name: 'Funnel',
      type: 'funnel',
      left: '10%',
      top: 0,
      height: '50%',
      width: '80%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      // sort: 'ascending',
      // sort: 'none',

      gap: 2,
      label: {
        show: true,
        position: 'inside'
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { value: 40, name: '项目' },
        { value: 60, name: '专业交付' },
        { value: 79, name: '质量控制' },
        { value: 80, name: '运营支撑' },
        { value: 81, name: '体系规范' },
        { value: 90, name: '度量决策' }
      ]
    },
    {
      name: 'Funnel',
      type: 'funnel',
      left: '10%',
      top: '50%',
      height: '50%',
      width: '80%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'ascending',
      gap: 2,
      label: {
        show: true,
        position: 'inside'
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { value: 40, name: '客户感知' },
        { value: 60, name: '专业交付' },
        { value: 79, name: '质量控制' },
        { value: 80, name: '运营支撑' },
        { value: 81, name: '体系规范' },
        { value: 90, name: '度量决策' }
      ]
    }
  ]
}

const showCharts = () => {
  const myChart = echarts.init(charts.value)
  myChart.setOption(option)
}
onMounted(() => {
  showCharts()
})

defineExpose({
  showCharts
})
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.charts {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
