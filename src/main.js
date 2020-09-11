import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRx from "vue-rx";

Vue.config.productionTip = false

// Vue.use(VueRx);

new Vue({
  vuetify,
  VueRx,
  render: h => h(App)
}).$mount('#app')
