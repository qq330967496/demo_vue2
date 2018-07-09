import Vue from 'vue'
import Router from 'vue-router'
//组件
import PageTransition from '@/components/PageTransition'

//页面
import index from '@/pages/index'
import list from '@/pages/demo/list'
import dialog from '@/pages/demo/dialog'
import home from '@/pages/home'
import demo from '@/pages/demo'

Vue.use(Router);

Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
};

export default new Router({
  mode: 'history',
  transitionOnLoad: true,
  routes: [
    {
      path: '/',
      name: 'pageTransition',
      component: PageTransition,
      children: [{
        path: '/index',
        component: index
      }, {
        path: '/demo/list',
        component: list
      }, {
        path: '/demo/dialog',
        component: dialog
      }, {
        path: '/home',
        component: home
      }, {
        path: '/demo',
        component: demo
      }]
    }
  ]
})
