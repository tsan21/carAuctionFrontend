import Vue from 'vue';
import axios from 'axios'
import Vuex from 'vuex';

Vue.use(Vuex);

var baseUrl = "http://192.168.178.20:8090/"

export const store = new Vuex.Store({
    state: {
        userId: 0,
        user: {},
        isLoggedIn: false,
        myAuctions: [],
        allAuctions: [],
        auctionDialog: false,
        auctionDetails: {},
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
        auctionDialog(state) {
            return state.auctionDialog
        },
        auctionDetails(state) {
            return state.auctionDetails
        },
    },

    mutations: {
        updateUserId(state, _userId) {
            state.userId = _userId
        },
        updateUser(state, _user) {
            state.user = _user
        },
        updateIsLoggedIn(state, _bool) {
            state.isLoggedIn = _bool
        },
        updateMyAuctions(state, _myAuctions) {
            state.myAuctions = _myAuctions
        },
        updateAllAuctions(state, _allAuctions) {
            state.allAuctions = _allAuctions
        },
        updateAuctionDialog(state, _bool) {
            state.auctionDialog = _bool
        },
        updateAuctionDetails(state, _auction) {
            state.auctionDetails = _auction
        },
    },

    actions: {
        login(context, loginModel) {
            return axios
                .post(baseUrl + "login/", {
                    name: loginModel.name,
                    password: loginModel.password,
                })
                .then((response) => {
                    if (response.status == 200) {
                        context.commit('updateUser', response.data)
                        context.commit('updateIsLoggedIn', true)
                        console.log("user: " + this.getters.user.userId + " logged in.")
                    }
                })
                .catch((error) => {
                    console.log(error.response)
                })
        },
        register(context, registerModel) {
            return axios
                .post(baseUrl + "register/", {
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
                .post(baseUrl + "auction/", auctionCreateModel)
                .then((response) => {
                    if (response.status == 201) {
                        context.dispatch('loadMyAuctions', this.getters.user.userId)
                    }
                })
                .catch((error) => {
                    console.log(error.response)
                })
        },
        loadMyAuctions(context, userId) {
            return axios
                .get(baseUrl + "auction/" + userId)
                .then((response) => {
                    context.commit('updateMyAuctions', response.data)
                })
                .catch((error) => {
                    console.log(error.response)
                })
        },
        loadAllAuctions(context) {
            return axios
                .get(baseUrl + "auction/")
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
        placeBid(context, bidPlaceModel) {      ///////
            return axios
                .post(baseUrl + "bid/", {
                    bidder: bidPlaceModel.bidder,
                    amount: bidPlaceModel.amount,
                    auctionId: bidPlaceModel.auctionId
                })
                .then((response) => {
                    console.log(response.status)
                })
                .catch((error) => {
                    console.log(error.response)
                })
        },
        deleteAuction(context, auctionId) {
            return axios
                .delete(baseUrl + "auction/" + auctionId)
                .then((response) => {
                    if (response.status == 200) {
                        context.dispatch('loadMyAuctions', this.getters.user.userId)
                    }
                })
                .catch((error) => {
                    console.log(error.response)
                })
        },
    }
});