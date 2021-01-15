// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//
Vue.config.productionTip = false
// 导入 可拖拽 veu-draggable
import draggable from "vuedraggable";
Vue.component('draggable', draggable)

// 使用awe-dnd 可拖拽
import VueDND from 'awe-dnd';
Vue.use(VueDND)

// 使用vueRx
import VueRx from 'vue-rx';
import Rx from 'rxjs/Rx'
Vue.use(VueRx, Rx);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
