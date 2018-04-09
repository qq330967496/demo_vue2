import Vue from 'vue'
import App from './App'
import router from './router'
import utils from './assets/js/utils';//工具类

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  beforeMount() {
    utils.adaptive();
  }
});
