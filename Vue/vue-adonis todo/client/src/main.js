import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { sync } from 'vuex-router-sync'
import Panel from './components/Panel'
import Vuetify from 'vuetify/lib'

Vue.config.productionTip = false
sync(store, router);

Vue.component('Panel', Panel);
Vue.use(Vuetify);

new Vue({
    router,
    store,
    vuetify,
    render: function(h) { return h(App) }
}).$mount('#app')