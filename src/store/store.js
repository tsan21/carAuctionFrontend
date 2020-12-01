import Vue from 'vue';
import axios from 'axios'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userId: 0,
        user: {},
        isLoggedIn: false,
        myAuctions: [],
        allAuctions: [],
    },

    getters: {
        userId(state) {
            return state.userId
        },
        user(state) {
            return state.user
        },
        isLoggedIn(state) {
            return state.isLoggedIn
        },
        myAuctions(state) {
            return state.myAuctions
        },
        allAuctions(state) {
            return state.allAuctions
        },
    },

    mutations: {
        updateUserId(state, _userId) {
            state.userId = _userId
        },
        updateUser(state, _user) {
            state.user = _user
        },
        updateIsLoggedIn(state, bool) {
            state.isLoggedIn = bool
        },
        updateMyAuctions(state, _myAuctions) {
            state.myAuctions = _myAuctions
        },
        updateAllAuctions(state, _allAuctions) {
            state.allAuctions = _allAuctions
        },
    },

    actions: {
        login(context, loginModel) {
            return axios
                .post("http://192.168.178.20:8090/login/", {
                    name: loginModel.name,
                    password: loginModel.password,
                })
                .then((response) => {
                    if (response.status == 200) {
                        context.commit('updateUser', response.data)
                        context.commit('updateIsLoggedIn', true)
                    }
                })
                .catch((error) => {
                    console.log(error.response)
                })
        },
        register(context, registerModel) {
            return axios
                .post("http://192.168.178.20:8090/register/", {
                    name: registerModel.name,
                    password: registerModel.password,
                })
                .then((response) => {
                    console.log(response.status);
                })
                .catch((error) => {
                    console.log(error.response)
                })
        },
        createAuction(context, auctionCreateModel) {
            return axios
                .post("http://192.168.178.20:8090/auction/", auctionCreateModel)
                .then((response) => {
                    if(response.status==201){       ///////
                        context.dispatch('loadMyAuctions', this.getters.user.userId)
                    }
                })
                .catch((error) => {
                    console.log(error.response)
                })
        },
        loadMyAuctions(context, userId) {
            return axios
                .get("http://192.168.178.20:8090/auction/" + userId)
                .then((response) => {
                    context.commit('updateMyAuctions', response.data)
                })
                .catch((error) => {
                    console.log(error.response)
                })
        },
        loadAllAuctions(context) {
            return axios 
                .get("http://192.168.178.20:8090/auction/")
                .then((response) => {
                    context.commit('updateAllAuctions', response.data)
                })
                .catch((error) => {
                    console.log(error.response)
                })
        },
        logout(context) {
            var emptyUser = {}
            context.commit('updateUser', emptyUser)
            context.commit('updateIsLoggedIn', false)
        },
    }
});