<template>
  <div>
    <div class="title">都道府県別の総人口推移</div>
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
    ...mapState("populationTransition", ["populationTransitionList", "xLabels"]),
    chartOptions() {
      return {
        title: {
          text: null
        },
        xAxis: {
          title: {
            text: '年 (年)'
          },
          categories: this.xLabels
        },
        yAxis: {
          title: {
            text: '総人口数 (人)'
          }
        },
        tooltip: {
          valueSuffix: '人'
        },
        series: this.populationTransitionList
      }
    }
  },
  components: {
    Prefectures,
    Chart
  }
};
</script>

<style scoped>
.title {
  font-size: 24px;
  font-weight: 600;
}
</style>
