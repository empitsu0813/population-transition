<template>
  <div>
    <div>{{prefectures}}</div>
    <ul>
      <li
        v-for="prefecture in prefectures.prefectures"
        :key="prefecture.prefCode"
      >
        <input
          type="checkbox"
          @click="check($event, prefecture)">
        <label>{{ prefecture.prefName }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue'

export default {
  name: "prefectures",
  components: {
    Chart 
  }
};
</script>
