import Vue from 'vue';
import Vuex from 'vuex';
import prefectures from './store/prefectures'
import populationTransition from './store/populationTransition'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    prefectures: prefectures,
    populationTransition: populationTransition
  }
});
