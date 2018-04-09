import Vue from 'vue'
import Router from 'vue-router'
//组件
import Header from '@/components/header'
import PageTransition from '@/components/PageTransition'

//页面
import Home from '@/pages/home'
import Demo from '@/pages/demo'

Vue.use(Router);

// 增强原方法，好处是旧的业务模块不需要任何变动
Router.prototype.go = function () {
  window.history.go(-1);
};
// 或者你可以新建一个方法
Router.prototype.goBack = function () {
  this.go(-1);
};

export default new Router({
  mode: 'history',
  transitionOnLoad:true,
  routes: [
    {
      path: '/',
      name: 'PageTransition',
      component: PageTransition,
      children: [{
        path: '',
        component: Home
      }, {
        path: 'page/demo',
        component: Demo
      }]
    }
  ]
})
