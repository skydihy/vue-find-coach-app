import { createStore } from 'vuex';
import coachesStore from './modules/coaches/index.js';
import requestsStore from './modules/requests/index.js';

const store = createStore({
  modules: {
    coaches: coachesStore,
    requests: requestsStore,
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
