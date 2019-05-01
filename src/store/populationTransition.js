import axios from "axios";

const state = {
  populationTransition: [],
  xLabels: []
};

const mutations = {
  addPopulationTransition(state, populationTransition) {
    state.populationTransition.push(populationTransition);
  },
  setXLabels(state, xLabels) {
    state.xLabels = xLabels;
  }
};

const actions = {
  async addPopulationTransition({ commit }, prefecture) {
    console.log(prefecture)
    await axios
      .get("https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear", {
          headers: { "X-API-KEY": process.env.VUE_APP_API_KEY },
          params: { prefCode: prefecture.prefCode }
      })
      .then(response => {
        const data = response.data.result.data[0].data;
        const populationTransition = {
          name: prefecture.prefName,
          data: data.map(arr => arr.value)
        };
        const xLabels = data.map(array => array.year);
        commit("addPopulationTransition", populationTransition);
        commit("setXLabels", xLabels);
      });
  },
  removePopulationTransition({ commit }, prefecture) {
    console.log("remove");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
