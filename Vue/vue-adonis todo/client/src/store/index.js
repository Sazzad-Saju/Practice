import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication';
import project from './project';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        baseUrl: '/api',
    },
    modules: {
        authentication,
        project,
    },
    mutations: {},
    actions: {},
});


// import Vue from "vue";
// import Vuex from "vuex";
// import authentication from './authentication';

// Vue.use(Vuex);

// export default new Vuex.Store({
//     state: {
//         baseUrl: '/api',
//     },
//     modules: {
//         authentication,
//     },
//     mutations: {},
//     actions: {},
// });