import HTTP from "../HTTP";
import {
    passbyurl
} from '../_helpers/variables'
export default {
    namespaced: true,
    state: {
        projects: [],
        newProjectName: null,
        paramOne: 'cse',
        paramTwo: 'hstu',
        returnbyurl: '',
        urlAlert: false,
        urlAlertError: null,
    },
    mutations: {
        setNewProjectName(state, name) {
            state.newProjectName = name;
        },
        appendProject(state, project) {
            state.projects.push(project)
        },
        setProject(state, project) {
            state.projects = project;
        },
        updateParamOne(state, paramOne) {
            state.paramOne = paramOne
        },
        updateParamTwo(state, paramTwo) {
            state.paramTwo = paramTwo
        },
        updateReturnByUrl(state, returnbyurl) {
            state.returnbyurl = returnbyurl
        },
        updateUrlAlert(state, urlAlert) {
            state.urlAlert = urlAlert
        },
        setUrlAlertError(state, urlAlertError) {
            state.urlAlertError = urlAlertError
        }

    },
    actions: {
        createProject({ commit, state }) {
            console.log('here1')
            return HTTP().post('/projects', {
                    title: state.newProjectName
                })
                .then(Response => {
                    // console.log(Response)
                    commit('appendProject', Response.data)
                    commit('setNewProjectName', null)
                })
        },
        fetchProjects({ commit }) {
            return HTTP().get('/projects')
                .then(Response => {
                    commit('setProject', Response.data)
                        // console.log(Response);
                })
        },
        passbyurl({ state, commit }) {
            return HTTP().get(passbyurl + state.paramOne + '/' + state.paramTwo)
                .then(Response => {
                    // console.log(Response.data.dataOne);
                    commit('setUrlAlertError', null);
                    commit('updateReturnByUrl', Response.data.dataOne)
                    commit('updateUrlAlert', true)
                })
                .catch((err) => {
                    commit('updateUrlAlert', false)
                    commit('setUrlAlertError', err)
                })
        }
    }
}