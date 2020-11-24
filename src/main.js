import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import { store } from './store/store';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
// Vue.prototype.$http = VueAxios;
const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

new Vue({
  vuetify,
  router,
  store,
  axios,
  VueAxios,
  render: h => h(App)
}).$mount('#app')
