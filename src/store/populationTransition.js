import axios from "axios";

const state = {
  populationTransitionList: [],
  xLabels: []
};

const mutations = {
  addPopulationTransition(state, populationTransition) {
    state.populationTransitionList.push(populationTransition);
  },
  setXLabels(state, xLabels) {
    state.xLabels = xLabels;
  },
  removePopulationTransition(state, prefName) {
    const tmp = state.populationTransitionList.filter(
      populationTransition => populationTransition.name !== prefName
    );
    state.populationTransitionList = tmp;
  }
};

const actions = {
  async addPopulationTransition({ commit }, prefecture) {
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
    commit("removePopulationTransition", prefecture.prefName);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
