import Vue from 'vue'
import Router from 'vue-router'
//组件
import PageTransition from '@/components/PageTransition'

//页面
import index  from '@/pages/index'
import list   from '@/pages/demo/list'
import dialog from '@/pages/demo/dialog'
import toast  from '@/pages/demo/toast'
import btn  from '@/pages/demo/btn'
import step  from '@/pages/demo/step'
import flow  from '@/pages/demo/flow'
import operlist  from '@/pages/demo/operlist'
import scroll  from '@/pages/demo/scroll'
import header  from '@/pages/demo/header'

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
        path: '/demo/toast',
        component: toast
      }, {
        path: '/demo/btn',
        component: btn
      }, {
        path: '/demo/step',
        component: step
      }, {
        path: '/demo/flow',
        component: flow
      }, {
        path: '/demo/operlist',
        component: operlist
      }, {
        path: '/demo/scroll',
        component: scroll
      }, {
        path: '/demo/header',
        component: header
      },]
    }
  ]
})
