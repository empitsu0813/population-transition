<template>
  <div class="container">
    <ul>
      <li v-for="prefecture in prefectures" :key="prefecture.prefCode">
        <input type="checkbox" @click="check($event, prefecture)" />
        <label>{{ prefecture.prefName }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "prefectures",
  computed: {
    ...mapState("prefectures", ["prefectures"])
  },
  mounted() {
    this.$store.dispatch("prefectures/setPrefectures");
  },
  methods: {
    ...mapActions("populationTransition", [
      "addPopulationTransition",
      "removePopulationTransition"
    ]),
    check: function(e, prefecture) {
      if (e.target.checked) {
        this.addPopulationTransition(prefecture);
      } else {
        this.removePopulationTransition(prefecture);
      }
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

li {
  width: 80px;
  margin: 5px;
  padding: 3px;
  line-height: 1;
  flex-wrap: wrap;
}

input {
  margin: 0;
  padding: 0;
}

label {
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
}
</style>
