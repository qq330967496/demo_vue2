import Vue from 'vue'
import Router from 'vue-router'
//组件
import PageTransition from '@/components/PageTransition'

//页面
import Index from '@/pages/index'
import List from '@/pages/list'
import Home from '@/pages/home'
import Demo from '@/pages/demo'

Vue.use(Router);

Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
};

export default new Router({
  mode: 'history',
  transitionOnLoad:true,
  routes: [
    {
      path: '/',
      name: 'pageTransition',
      component: PageTransition,
      children: [{
        path: '/index',
        component: Index
      },{
        path: '/list',
        component: List
      },{
        path: '/home',
        component: Home
      }, {
        path: '/demo',
        component: Demo
      }]
    }
  ]
})
