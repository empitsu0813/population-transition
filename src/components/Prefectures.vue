<template>
  <div>
    <ul>
      <li
        v-for="prefecture in prefectures"
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
    ...mapState("prefectures", ["prefectures"])
  },
  mounted() {
    this.$store.dispatch("prefectures/setPrefectures");
  },
  methods: {
    ...mapActions("populationTransition", ["addPopulationTransition", "removePopulationTransition"]),
    check: function (e, prefecture) {
      if (e.target.checked) {
        // add
        this.addPopulationTransition(prefecture)
      } else {
        this.removePopulationTransition(prefecture)
        // remove
      }
    }
  }
};
</script>
