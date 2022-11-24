import { createStore } from 'vuex';
import coachesStore from './modules/coaches/index.js';

const store = createStore({
  modules: {
    coaches: coachesStore,
  },
});

export default store;
