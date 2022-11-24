export default {
  registerCoach(context, data) {
    const coachData = {
      // TODO: Dynamic id
      id: 'c3',
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    context.commit('registerCoach', coachData);
  },
};
