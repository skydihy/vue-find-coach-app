import { APIKEY, AUTH_URL } from '../../../constants';

export default {
  async signin(context, payload) {
    context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },

  async signup(context, payload) {
    context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },

  async auth(context, payload) {
    const mode = payload.mode;
    let url = `${AUTH_URL}:signInWithPassword?key=${APIKEY}`;

    if (mode === 'signup') {
      url = `${AUTH_URL}:signUp?key=${APIKEY}`;
    }

    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    const resData = await res.json();

    if (!res.ok) {
      throw new Error(resData.message || 'Failed to authenticate');
    }

    localStorage.setItem('token', resData.idToken);
    localStorage.setItem('userId', resData.localId);

    context.commit('setUser', {
      token: resData.idToken,
      userId: resData.localId,
      tokenExpiration: resData.expiresIn,
    });
  },

  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    
    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
        tokenExpiration: null,
      });
    }
  },

  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },
};
