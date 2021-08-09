import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'components/common/toast'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
Vue.use(Toast)

var FastClick = require('fastclick');
FastClick.attach(document.body);
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png'),
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')