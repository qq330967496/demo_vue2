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
  mounted() {
    utils.adaptive()
  },
  watch: {
    '$route' (to, from) {
      console.log('路由监听',to,from);
    }
  }
});
