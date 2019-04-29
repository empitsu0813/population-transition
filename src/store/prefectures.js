import axios from "axios";

const state = {
  prefectures: []
};

const mutations = {
  setPrefectures(state, prefectures) {
    state.prefectures = prefectures;
  }
};

const actions = {
  async setPrefectures({ commit }) {
    let prefectures = [];
    await axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": process.env.VUE_APP_API_KEY }
      })
      .then(response => {
        console.log(response);
        prefectures = response.data.result;
      });

    commit("setPrefectures", prefectures);
  }
};

export default {
  state,
  mutations,
  actions
};
