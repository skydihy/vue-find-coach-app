import { BASEURL } from '../../../constants';

export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const res = await fetch(BASEURL + `coaches/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(coachData),
    });

    await res.json();

    if (!res.ok) {
      // Error handling
    }

    context.commit('registerCoach', { ...coachData, id: userId });
  },

  async loadCoaches(context) {
    const res = await fetch(BASEURL + `coaches.json`);

    const resData = await res.json();

    if (!res.ok) {
      throw new Error(resData.message || 'Failed to fetch!');
    }

    const coaches = [];

    for (const key in resData) {
      const coach = {
        id: key,
        firstName: resData[key].firstName,
        lastName: resData[key].lastName,
        description: resData[key].description,
        hourlyRate: resData[key].hourlyRate,
        areas: resData[key].areas,
      };

      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
  },
};
