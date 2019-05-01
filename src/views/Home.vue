<template>
  <div>
    <h1 class="title">title</h1>
    <Prefectures></Prefectures>
    <Chart :options="chartOptions"></Chart>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Prefectures from "@/components/Prefectures.vue";
import { Chart } from "highcharts-vue";

export default {
  name: "home",
  computed: {
    ...mapState("populationTransition", ["populationTransition", "xLabels"]),
    chartOptions() {
      return {
        xAxis: {
          title: {
            text: '年 (年)'
          },
          categories: this.xLabels
        },
        yAxis: {
          title: {
            text: '人口数 (人)'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        tooltip: {
          valueSuffix: '人'
        },
        series: this.populationTransition
      }
    }
  },
  components: {
    Prefectures,
    Chart
  }
};
</script>
