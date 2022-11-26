import { BASEURL } from '../../../constants';

export default {
  async contactCoach(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.userEmail,
      message: payload.message,
    };

    const res = await fetch(BASEURL + `requests/${payload.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest),
    });

    const resData = await res.json();

    if (!res.ok) {
      throw new Error(resData.message || 'Failed to request coach.');
    }

    newRequest.id = resData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  },

  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;

    const res = await fetch(BASEURL + `requests/${coachId}.json`);

    const resData = await res.json();

    if (!res.ok) {
      throw new Error(resData.error || 'Failed to get requests.');
    }

    const tempRequests = [];

    for (const key in resData) {
      const requestMapped = {
        id: key,
        coachId: coachId,
        userEmail: resData[key].userEmail,
        message: resData[key].message,
      };

      tempRequests.push(requestMapped);
    }

    context.commit('setRequests', tempRequests);
  },
};
