import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userId: 0,
    },
    getters: {
        getCurrentUserId(state){
            return state.userId
        },
    },
    mutations: {
        setUserId(state, _userId){
            state.userId = _userId
        },
    },
    actions: {

    }
});