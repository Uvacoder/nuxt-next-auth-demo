import { getSession } from "~/modules/next-auth/client";

export const state = () => ({
    session: null
});

export const mutations = {
    SET_SESSION(state, payload) {
        state.session = payload
    }
}

export const actions = {
    async nuxtServerInit({ commit }, { req }) {
        try {
            const session = await getSession({ req })
            commit('SET_SESSION', session);
        } catch (e) {
            console.error(e);
            commit('SET_SESSION', null);
        }
    }
}