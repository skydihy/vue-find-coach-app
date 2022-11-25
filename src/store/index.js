import { createStore } from 'vuex';
import coachesStore from './modules/coaches/index.js';

const store = createStore({
  modules: {
    coaches: coachesStore,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
