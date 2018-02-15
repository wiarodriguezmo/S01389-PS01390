// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Admin from './Admin'
import VueFire from 'vuefire'

Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  el: '#admin',
  components: { Admin },
  template: '<Admin/>'
})
