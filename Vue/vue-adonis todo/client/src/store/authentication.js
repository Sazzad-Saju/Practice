import router from '../router';
import toast from '../services/Notification'
import HTTP from '../HTTP';
import { sendEmail, resetPassword } from '../_helpers/variables'
export default {
    namespaced: true,
    state: {
        registerEmail: 'sazzadsaju17@gmail.com',
        registerPassword: '12345678',
        token: null,
        registerError: null,
        registerConfirmPassword: null,
        //login
        loginEmail: 'sazzadsaju17@gmail.com',
        loginPassword: '12345678',
        loginError: null,
        //reset
        resetEmail: null,
        ResetInfo: {
            email: '',
            code: '',
            attempt: 0,
            password: '',
            password_confirmed: '',
        }

    },
    getters: {
        isLoggedIn(state) {
            return !!state.token;
        },
        isValidToRegister(state) {
            if (state.registerEmail &&
                state.registerPassword &&
                state.registerConfirmPassword)
                return true
            return false
        }
    },
    mutations: {
        setRegisterEmail(state, email) {
            state.registerEmail = email;
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password;
        },
        setToken(state, token) {
            state.token = token;
        },
        setRegisterError(state, error) {
            state.registerError = error;
        },
        setRegisterConfirmPassword(state, registerConfirmPassword) {
            state.registerConfirmPassword = registerConfirmPassword
        },
        //Login
        setLoginEmail(state, email) {
            state.loginEmail = email;
        },
        setLoginPassword(state, password) {
            state.loginPassword = password;
        },
        setLoginError(state, error) {
            state.loginError = error;
        },
        //forget password
        sendEmailTo(state, resetEmail) {
            state.resetEmail = resetEmail;
        },
        //reset
        setResetCode(state, code) {
            state.ResetInfo.code = code
        },
        setResetPassword(state, password) {
            state.ResetInfo.password = password
        },
        setResetRepeatPass(state, password_confirmed) {
            state.ResetInfo.password_confirmed = password_confirmed
        }
    },
    actions: {
        register({ state, commit }) {
            // console.log('here')
            commit('setRegisterError', null);
            return HTTP().post('/auth/register', {
                    email: state.registerEmail,
                    password: state.registerPassword,
                    password_confirmed: state.registerConfirmPassword
                })
                .then(({ data }) => {
                    if (data.type = "invalid") {
                        commit('setRegisterError', 'Validation Error: ' + data.message)
                    } else {
                        commit("setToken", data.token);
                        router.push('/')
                    }
                })
                .catch((err) => {
                    commit('setRegisterError', err)
                })
        },
        login({ state, commit }) {
            // console.log("Here");
            commit('setLoginError', null)
            return HTTP().post('auth/login', {
                    email: state.loginEmail,
                    password: state.loginPassword
                })
                .then(({ data }) => {
                    if (data.type == 'success') {
                        commit("setToken", data.token.token);
                        // console.log(data.token.token)
                        toast.success(data.message, 'topRight', 5000, 'Success')
                        router.push('/')
                    } else {
                        toast.error(data.message, 'topRight', 5000, 'Error')
                    }
                    // console.log(data);
                })
                .catch((err) => {
                    commit('setLoginError', err)
                })
        },
        logout({ commit }) {
            commit('setToken', null);
            router.push('/login');
        },
        sendCode({ commit, state }) {
            try {
                return HTTP().post(sendEmail, {
                        email: state.resetEmail,
                    })
                    .then(response => {
                        if (response.data.type == 'success') {
                            commit('sendEmailTo', response.data.sendEmailTo)
                            toast.success(response.data.message, 'topRight', 5000, 'Success')
                            router.push('/reset-password')
                        } else {
                            toast.error(response.data.message, 'topRight', 5000, 'Error')
                        }
                    })
            } catch (error) {
                console.log(error)
            }
        },
        changePassword({ commit, state }) {
            try {
                return HTTP().post(resetPassword, {
                        code: state.ResetInfo.code,
                        password: state.ResetInfo.password,
                        password_confirmed: state.ResetInfo.password_confirmed
                    })
                    .then(response => {
                        console.log(response)
                        if (response.data.type === 'success') {
                            console.log('here')
                            toast.success(response.data.message, 'topRight', 5000, 'Success')
                            router.push('/login')
                        } else {
                            toast.error(response.data.message, 'topRight', 5000, 'Error')
                        }
                    })
            } catch (e) {
                console.log(e)
            }
        }
    },
};