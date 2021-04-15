import Vue from 'vue'
import App from './App.vue'
import * as API from './api/serve'
import './mock/mockserve'
Vue.config.productionTip = false
Vue.prototype.$API = API
new Vue({
  render: h => h(App),
}).$mount('#app')
