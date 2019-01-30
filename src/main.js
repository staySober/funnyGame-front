// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 

Vue.config.productionTip = false
Vue.use(Vuetify)

/* eslint-disable no-new */
var app1 = new Vue({
  el: '#App',
  router,
  components: {App},
  template: '<App/>'
})
