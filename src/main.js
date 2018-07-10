import Vue from 'vue'
import App from './App'
import router from './router'
import utils from 'utils';
import Shui from './assets/js/sh-ui';
Vue.use(Shui);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  beforeMount() {
    utils.adaptive();
  },
  mounted(){
  }
});
