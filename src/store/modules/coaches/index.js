import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Max',
          lastName: 'Bornfordev',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Max and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julia',
          lastName: 'Bornfordev',
          areas: ['frontend', 'career'],
          description:
            'I am Julia and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
      ],
    };
  },
  getters,
};
