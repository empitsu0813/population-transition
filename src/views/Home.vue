<template>
  <div>
    <h1 class="title">title</h1>
    <Prefectures></prefectures>
    <div>ここにチャート</div>
    <Chart :options="chartOptions"></Chart>
  </div>
</template>

<script>
import Prefectures from '@/components/Prefectures.vue'
import { Chart } from 'highcharts-vue'

export default {
  name: "home",
  data() {
    return {
      chartOptions: {
        series: [{
          data: [1,2,3] // sample data
        }]
      }
    }
  },
  components: {
    Prefectures,
    Chart
  }
};
</script>
