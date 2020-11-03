import Vue from 'vue';
import Veux from 'veux';

Vue.use(Veux);

export const store = new Veux.Store({
    state: {
        user: {},
    }
});