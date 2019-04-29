import Vue from 'vue';
import Vuex from 'vuex';
import prefectures from './store/prefectures'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    prefectures: prefectures
  }
});
