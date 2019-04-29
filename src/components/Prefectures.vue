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
// import axios from 'axios';
import { mapActions, mapState } from "vuex"

export default {
  name: "prefectures",
  computed: {
    ...mapState(["prefectures"])
  },
  mounted() {
    this.$store.dispatch("setPrefectures");
  },
  methods: {
    check: function (e, prefectures) {
      aa
    }
  }
};
</script>
