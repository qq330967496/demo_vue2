import Vue from 'vue'
import Router from 'vue-router'
//组件
import Header from '@/components/header'

//页面
import Home from '@/pages/home'
import Demo from '@/pages/demo'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: Home.name,
      component: Home
    },{
      path: '/demo',
      name: Demo.name,
      component: Demo
    },
  ]
})
