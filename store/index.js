import axios from 'axios';

export const state = () => ({
    session: null
});

export const mutations = {
    SET_SESSION(state, payload) {
        state.session = payload
    }
}

export const actions = {
    async nuxtServerInit({ commit }, { req, $config }) {
        try {
            const { data } = await axios.get(`${$config.nextAuthUrl}/api/auth/session`, {
                headers: {
                    cookie: req.headers.cookie
                }
            });
            if (!data || !Object.keys(data).length) {
                commit('SET_SESSION', null);
            } else {
                commit('SET_SESSION', data);
            }
        } catch (e) {
            console.error(e);
            commit('SET_SESSION', null);
        }
    }
}